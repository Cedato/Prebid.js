import '../modules/appnexusBidAdapter';
import '../modules/pubmaticBidAdapter';
// additional
import '../modules/spotxBidAdapter';
// import '../modules/freewheel-sspBidAdapter';
// import '../modules/telariaBidAdapter';

import { getUniqueIdentifierStr, generateUUID, insertUserSyncIframe, triggerPixel, shuffleArray, parseQueryStringParameters } from './utils';
import { getAdapter } from './bidderFactory';

const adapterUserSyncsDone = [];

export function requestBid(bid, config) {
  const spec = getAdapter(bid);
  if (!spec) {
    console.warn(`Unsupported bid adapter, name: ${bid && bid.bidder}`);
    return;
  }
  const adUnit = {
    sizes: [640, 480],
    mediaTypes: {
      video: {
        playerSize: [640, 480],
        context: 'instream',
      }
    },
    bids: [bid],
  };

  const bidRequests = getBidRequests(adUnit, spec);
  const bidderRequest = getBidderRequest(bidRequests, config);
  let request = spec.buildRequests(bidRequests, bidderRequest);
  if (Array.isArray(request)) {
    request = request[0];
  }

  if (!adUnit.bids || adUnit.bids.length == 0) {
    return null;
  }

  return processRequest(request).then(response => {
    if (response && response.error) {
      throw new Error(response.error);
    }
    response = { body: response };
    const bids = spec.interpretResponse(response, request);
    if (bids && bids.length) {
      const bidder = adUnit.bids[0].bidder;
      const currentBid = bids[0];
      setTimeout(() => triggerUserSync(bidder, [response], spec), 3000);

      if (config && config.playerData) {
        config.playerData.impressionData = {
          pricing: currentBid.cpm,
          currency: currentBid.currency,
          impType: bidder,
        }
      }
      if (bid.floorPrice && currentBid.cpm < bid.floorPrice) {
        throw new Error('bidder cmp is lower than floorPrice ' + bid.floorPrice);
      }
      return currentBid.vastUrl;
    }
    return null;
  });
}

// generated bid requests
function filterNonValid(bid, spec) {
  if (!spec.isBidRequestValid(bid)) {
    return false;
  }
  return true;
}

function getBidRequests(adUnit, spec) {
  const unitBid = adUnit.bids[0];
  let bids = [
    {
      ...unitBid,
      mediaTypes: adUnit.mediaTypes,
      adUnitCode: adUnit.code,
      sizes: adUnit.sizes,

      bidderRequestId: getUniqueIdentifierStr(),
      bidId: getUniqueIdentifierStr(),
      transactionId: generateUUID(),
      auctionId: generateUUID(),
      crumbs: {
        pubcid: generateUUID(),
      },
    }
  ];
  bids = bids.filter((bid) => filterNonValid(bid, spec));

  return bids;
}

function getBidderRequest(bidRequests, config) {
  if (!bidRequests || bidRequests.length == 0) {
    return null;
  }
  const domain = (config && config.domain) || window.location.href;
  const bid = bidRequests[0];
  const bidderRequest = {
    bidderCode: bid.bidder,
    auctionId: bid.auctionId,
    bidderRequestId: bid.bidderRequestId,
    bids: [
      bid,
    ],
    // 'auctionStart': 1551439885900,
    timeout: 700,
    start: Date.now(),
    refererInfo: {
      referer: domain,
      reachedTop: true,
      numIframes: 0,
      stack: [domain],
    },
  };

  return bidderRequest;
}

function processRequest(request) {
  let requestUrl = request.url;
  const requestInit = {
    method: request.method,
    mode: 'cors', // no-cors, cors, *same-origin
    // headers: {
    //   contentType: 'text/plain',
    // },
  };
  if (request.data) {
    if (request.method == 'POST') {
      requestInit.body = typeof request.data == 'string' ? request.data : JSON.stringify(request.data);
    } else {
      requestUrl += `?${typeof request.data === 'object' ? parseQueryStringParameters(request.data) : request.data}`;
    }
  }
  return fetch(requestUrl, requestInit).then(response => response.text()).then(data => {
    try {
      data = JSON.parse(data);
    } catch (e) {}
    return data;
  });
}

function triggerUserSync(bidder, responses, spec) {
  if (!spec.getUserSyncs) {
    return;
  }
  if (adapterUserSyncsDone.indexOf(bidder) != -1) {
    return;
  }

  let userSyncs = spec.getUserSyncs({
    iframeEnabled: true,
    pixelEnabled: true,
  }, responses);

  shuffleArray(userSyncs).forEach(({ type, url }) => {
    if (type == 'iframe') {
      insertUserSyncIframe(url);
    }
    if (type == 'image') {
      triggerPixel(url);
    }
  });
  adapterUserSyncsDone.push(bidder);
}
