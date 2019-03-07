import { spec } from '../modules/appnexusBidAdapter';
import { getUniqueIdentifierStr, generateUUID, insertUserSyncIframe, triggerPixel, shuffleArray } from './utils';

window.requestBid = function (adUnit) {
  const bidRequests = getBidRequests(adUnit);
  const bidderRequest = getBidderRequest(bidRequests);
  const request = spec.buildRequests(bidRequests, bidderRequest);

  return processRequest(request).then(response => {
    console.log('response', response);
    if (response && response.error) {
      throw new Error(response.error);
    }

    const bids = spec.interpretResponse({ body: response }, { bidderRequest });
    if (bids && bids.length) {
      setTimeout(triggerUserSync, 3000);
      return bids[0].vastUrl;
    }
    return null;
  });
}

// generated bid requests
function filterNonValid(bid) {
  if (!spec.isBidRequestValid(bid)) {
    return false;
  }
  return true;
}

function getBidRequests(adUnit) {
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
  bids = bids.filter(filterNonValid);

  return bids;
}

function getBidderRequest(bidRequests) {
  if (!bidRequests || bidRequests.length == 0) {
    return null;
  }

  const bid = bidRequests[0];
  const bidderRequest = {
    bidderCode: bid.bidder,
    auctionId: bid.auctionId,
    bidderRequestId: bid.bidderRequestId,
    bids: [
      bid,
    ],
    // 'auctionStart': 1551439885900,
    'timeout': 700,
    'start': Date.now(),
    // 'doneCbCallCount': 0
  };

  return bidderRequest;
}

function processRequest(request) {
  return fetch(request.url, {
    method: request.method,
    headers: {
      contentType: 'text/plain',
    },
    body: request.data,
  }).then(response => response.text()).then(data => {
    return JSON.parse(data);
  });
}

function triggerUserSync() {
  if (!spec.getUserSyncs) {
    return;
  }

  let userSyncs = spec.getUserSyncs({
    iframeEnabled: true,
    pixelEnabled: true,
  });

  shuffleArray(userSyncs).forEach(({ type, url }) => {
    console.log('user syncs', { type, url });
    if (type == 'iframe') {
      insertUserSyncIframe(url);
    }
    if (type == 'image') {
      triggerPixel(url);
    }
  });
}
