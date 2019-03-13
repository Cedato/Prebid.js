var getIncrementalInteger = (function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
})();

export function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}

export function generateUUID(placeholder) {
  return placeholder
    ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}

/**
 * Returns random data using the Crypto API if available and Math.random if not
 * Method is from https://gist.github.com/jed/982883 like generateUUID, direct link https://gist.github.com/jed/982883#gistcomment-45104
 */
function _getRandomData() {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint8Array(1))[0] % 16;
  } else {
    return Math.random() * 16;
  }
}

export function triggerPixel(url, done) {
  const img = new Image();
  if (done && typeof done == 'function') {
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  }
  img.src = url;
}

export function insertUserSyncIframe(url, done) {
  let iframeHtml = createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  let div = document.createElement('div');
  div.innerHTML = iframeHtml;
  let iframe = div.firstChild;
  if (done && internal.isFn(done)) {
    iframe.addEventListener('load', done);
    iframe.addEventListener('error', done);
  }
  insertElement(iframe, document, 'html', true);
}

function createTrackPixelIframeHtml(url, encodeUri = true, sandbox = '') {
  if (!url) {
    return '';
  }
  if (encodeUri) {
    url = encodeURI(url);
  }
  if (sandbox) {
    sandbox = `sandbox="${sandbox}"`;
  }

  return `<iframe ${sandbox} id="${getUniqueIdentifierStr()}"
      frameborder="0"
      allowtransparency="true"
      marginheight="0" marginwidth="0"
      width="0" hspace="0" vspace="0" height="0"
      style="height:0px;width:0px;display:none;"
      scrolling="no"
      src="${url}">
    </iframe>`;
}

function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  let parentEl;
  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }
  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');
    if (parentEl.length) {
      parentEl = parentEl[0];
      let insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}

export function shuffleArray(list) {
  if (list.length > 1) {
    for (let i = list.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const randomElement = list[randomIndex];
      list[randomIndex] = list[i];
      list[i] = randomElement;
    }
  }
  return list;
}

export function parseQueryStringParameters(queryObj) {
  let result = '';
  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) { result += k + '=' + encodeURIComponent(queryObj[k]) + '&'; }
  }

  return result;
}
