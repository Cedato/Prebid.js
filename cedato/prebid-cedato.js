/* eslint-disable no-unused-vars */
import { spec } from '../modules/appnexusBidAdapter';

console.log('spec', spec);

window.requestBid = function (videoAdUnit) {
  console.log('videoAdUnit', videoAdUnit);
  const bidRequests = getBidRequests();
  const bidderRequest = getBidderRequest();
  const request = spec.buildRequests(bidRequests, bidderRequest);
  console.log('request', request);
  processRequest(request).then(response => {
    console.log('response', response);
    const bids = spec.interpretResponse({ body: response }, { bidderRequest });
    console.log('bids', bids);
  });
}

// generated bid requests
function getBidRequests() {
  return [
    {
      'bidder': 'appnexus',
      'params': {
        'placementId': '9333431',
        'video': {
          'skipppable': false,
          'playback_methods': [
            'auto_play_sound_off'
          ]
        }
      },
      'crumbs': {
        'pubcid': 'c572e8b7-8252-44b3-a6ac-f85db2430455'
      },
      'mediaTypes': {
        'video': {
          'context': 'instream'
        }
      },
      'adUnitCode': 'video1',
      'transactionId': '5cb91f11-3181-4c87-81bf-0cfa6f23696a',
      'sizes': [
        640,
        480
      ],
      'bidId': '2f307fc9cf206f',
      'bidderRequestId': '125cfd48fefe06',
      'auctionId': '5b41e1ea-8c7f-4ed0-b6f4-5530789cf58f'
    }
  ];
}

function getBidderRequest() {
  return {
    'bidderCode': 'appnexus',
    'auctionId': '5b41e1ea-8c7f-4ed0-b6f4-5530789cf58f',
    'bidderRequestId': '125cfd48fefe06',
    'bids': [
      {
        'bidder': 'appnexus',
        'params': {
          'placementId': '9333431',
          'video': {
            'skipppable': false,
            'playback_methods': [
              'auto_play_sound_off'
            ]
          }
        },
        'crumbs': {
          'pubcid': 'c572e8b7-8252-44b3-a6ac-f85db2430455'
        },
        'mediaTypes': {
          'video': {
            'context': 'instream'
          }
        },
        'adUnitCode': 'video1',
        'transactionId': '5cb91f11-3181-4c87-81bf-0cfa6f23696a',
        'sizes': [
          640,
          480
        ],
        'bidId': '2f307fc9cf206f',
        'bidderRequestId': '125cfd48fefe06',
        'auctionId': '5b41e1ea-8c7f-4ed0-b6f4-5530789cf58f'
      }
    ],
    'auctionStart': 1551439885900,
    'timeout': 700,
    'start': 1551439885902,
    'doneCbCallCount': 0
  };
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

//   pbjs.requestBids({
//     timeout : 700,
//     bidsBackHandler : function(bids) {
//       var videoUrl = pbjs.adServers.dfp.buildVideoUrl({
//         adUnit: videoAdUnit,
//         params: {
//           iu: '/19968336/prebid_cache_video_adunit'
//         }
//       });

//       invokeVideoPlayer(videoUrl);
//     }
//   });
