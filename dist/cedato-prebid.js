/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return internal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (immutable) */ __webpack_exports__["replaceTokenInString"] = replaceTokenInString;
/* harmony export (immutable) */ __webpack_exports__["getUniqueIdentifierStr"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["generateUUID"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["getBidIdParameter"] = getBidIdParameter;
/* harmony export (immutable) */ __webpack_exports__["tryAppendQueryString"] = tryAppendQueryString;
/* harmony export (immutable) */ __webpack_exports__["parseQueryStringParameters"] = parseQueryStringParameters;
/* harmony export (immutable) */ __webpack_exports__["transformAdServerTargetingObj"] = transformAdServerTargetingObj;
/* harmony export (immutable) */ __webpack_exports__["getAdUnitSizes"] = getAdUnitSizes;
/* harmony export (immutable) */ __webpack_exports__["parseSizesInput"] = parseSizesInput;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArray"] = parseGPTSingleSizeArray;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowLocation"] = getTopWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["getTopFrameReferrer"] = getTopFrameReferrer;
/* harmony export (immutable) */ __webpack_exports__["getAncestorOrigins"] = getAncestorOrigins;
/* harmony export (immutable) */ __webpack_exports__["getWindowTop"] = getWindowTop;
/* harmony export (immutable) */ __webpack_exports__["getWindowSelf"] = getWindowSelf;
/* harmony export (immutable) */ __webpack_exports__["getWindowLocation"] = getWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowUrl"] = getTopWindowUrl;
/* harmony export (immutable) */ __webpack_exports__["getTopWindowReferrer"] = getTopWindowReferrer;
/* harmony export (immutable) */ __webpack_exports__["logMessage"] = logMessage;
/* harmony export (immutable) */ __webpack_exports__["logInfo"] = logInfo;
/* harmony export (immutable) */ __webpack_exports__["logWarn"] = logWarn;
/* harmony export (immutable) */ __webpack_exports__["logError"] = logError;
/* harmony export (immutable) */ __webpack_exports__["hasConsoleLogger"] = hasConsoleLogger;
/* harmony export (immutable) */ __webpack_exports__["debugTurnedOn"] = debugTurnedOn;
/* harmony export (immutable) */ __webpack_exports__["createInvisibleIframe"] = createInvisibleIframe;
/* harmony export (immutable) */ __webpack_exports__["getParameterByName"] = getParameterByName;
/* harmony export (immutable) */ __webpack_exports__["hasValidBidRequest"] = hasValidBidRequest;
/* harmony export (immutable) */ __webpack_exports__["addEventHandler"] = addEventHandler;
/* harmony export (immutable) */ __webpack_exports__["isA"] = isA;
/* harmony export (immutable) */ __webpack_exports__["isFn"] = isFn;
/* harmony export (immutable) */ __webpack_exports__["isStr"] = isStr;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isPlainObject"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["isEmptyStr"] = isEmptyStr;
/* harmony export (immutable) */ __webpack_exports__["_each"] = _each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (immutable) */ __webpack_exports__["_map"] = _map;
/* harmony export (immutable) */ __webpack_exports__["insertElement"] = insertElement;
/* harmony export (immutable) */ __webpack_exports__["triggerPixel"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["callBurl"] = callBurl;
/* harmony export (immutable) */ __webpack_exports__["insertHtmlIntoIframe"] = insertHtmlIntoIframe;
/* harmony export (immutable) */ __webpack_exports__["insertUserSyncIframe"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelHtml"] = createTrackPixelHtml;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelIframeHtml"] = createTrackPixelIframeHtml;
/* harmony export (immutable) */ __webpack_exports__["getIframeDocument"] = getIframeDocument;
/* harmony export (immutable) */ __webpack_exports__["getValueString"] = getValueString;
/* harmony export (immutable) */ __webpack_exports__["uniques"] = uniques;
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["getBidRequest"] = getBidRequest;
/* harmony export (immutable) */ __webpack_exports__["getKeys"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["getKeyByValue"] = getKeyByValue;
/* harmony export (immutable) */ __webpack_exports__["getBidderCodes"] = getBidderCodes;
/* harmony export (immutable) */ __webpack_exports__["isGptPubadsDefined"] = isGptPubadsDefined;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCpm", function() { return getHighestCpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldestHighestCpmBid", function() { return getOldestHighestCpmBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestHighestCpmBid", function() { return getLatestHighestCpmBid; });
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["adUnitsFilter"] = adUnitsFilter;
/* harmony export (immutable) */ __webpack_exports__["isSrcdocSupported"] = isSrcdocSupported;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["inIframe"] = inIframe;
/* harmony export (immutable) */ __webpack_exports__["isSafariBrowser"] = isSafariBrowser;
/* harmony export (immutable) */ __webpack_exports__["replaceAuctionPrice"] = replaceAuctionPrice;
/* harmony export (immutable) */ __webpack_exports__["timestamp"] = timestamp;
/* harmony export (immutable) */ __webpack_exports__["checkCookieSupport"] = checkCookieSupport;
/* harmony export (immutable) */ __webpack_exports__["cookiesAreEnabled"] = cookiesAreEnabled;
/* harmony export (immutable) */ __webpack_exports__["getCookie"] = getCookie;
/* harmony export (immutable) */ __webpack_exports__["delayExecution"] = delayExecution;
/* harmony export (immutable) */ __webpack_exports__["groupBy"] = groupBy;
/* harmony export (immutable) */ __webpack_exports__["deepAccess"] = deepAccess;
/* harmony export (immutable) */ __webpack_exports__["createContentToExecuteExtScriptInFriendlyFrame"] = createContentToExecuteExtScriptInFriendlyFrame;
/* harmony export (immutable) */ __webpack_exports__["getDefinedParams"] = getDefinedParams;
/* harmony export (immutable) */ __webpack_exports__["isValidMediaTypes"] = isValidMediaTypes;
/* harmony export (immutable) */ __webpack_exports__["getBidderRequest"] = getBidderRequest;
/* harmony export (immutable) */ __webpack_exports__["getUserConfiguredParams"] = getUserConfiguredParams;
/* harmony export (immutable) */ __webpack_exports__["getOrigin"] = getOrigin;
/* harmony export (immutable) */ __webpack_exports__["getDNT"] = getDNT;
/* harmony export (immutable) */ __webpack_exports__["isAdUnitCodeMatchingSlot"] = isAdUnitCodeMatchingSlot;
/* harmony export (immutable) */ __webpack_exports__["isSlotMatchingAdUnitCode"] = isSlotMatchingAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["unsupportedBidderMessage"] = unsupportedBidderMessage;
/* harmony export (immutable) */ __webpack_exports__["deletePropertyFromObject"] = deletePropertyFromObject;
/* harmony export (immutable) */ __webpack_exports__["removeRequestId"] = removeRequestId;
/* harmony export (immutable) */ __webpack_exports__["isInteger"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["convertCamelToUnderscore"] = convertCamelToUnderscore;
/* harmony export (immutable) */ __webpack_exports__["transformBidderParamKeywords"] = transformBidderParamKeywords;
/* harmony export (immutable) */ __webpack_exports__["convertTypes"] = convertTypes;
/* harmony export (immutable) */ __webpack_exports__["setDataInLocalStorage"] = setDataInLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["getDataFromLocalStorage"] = getDataFromLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["hasLocalStorage"] = hasLocalStorage;
/* harmony export (immutable) */ __webpack_exports__["isArrayOfNums"] = isArrayOfNums;
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;
/* harmony export (immutable) */ __webpack_exports__["chunk"] = chunk;
/* harmony export (immutable) */ __webpack_exports__["getMinValueFromArray"] = getMinValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["getMaxValueFromArray"] = getMaxValueFromArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url__ = __webpack_require__(51);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var CONSTANTS = __webpack_require__(19);

var _loggingChecked = false;
var tArr = 'Array';
var tStr = 'String';
var tFn = 'Function';
var tNumb = 'Number';
var tObject = 'Object';
var tBoolean = 'Boolean';
var toString = Object.prototype.toString;
var consoleExists = Boolean(window.console);
var consoleLogExists = Boolean(consoleExists && window.console.log);
var consoleInfoExists = Boolean(consoleExists && window.console.info);
var consoleWarnExists = Boolean(consoleExists && window.console.warn);
var consoleErrorExists = Boolean(consoleExists && window.console.error); // this allows stubbing of utility functions that are used internally by other utility functions

var internal = {
  checkCookieSupport: checkCookieSupport,
  createTrackPixelIframeHtml: createTrackPixelIframeHtml,
  getWindowSelf: getWindowSelf,
  getWindowTop: getWindowTop,
  getAncestorOrigins: getAncestorOrigins,
  getTopFrameReferrer: getTopFrameReferrer,
  getWindowLocation: getWindowLocation,
  getTopWindowLocation: getTopWindowLocation,
  insertUserSyncIframe: insertUserSyncIframe,
  insertElement: insertElement,
  isFn: isFn,
  triggerPixel: triggerPixel,
  logError: logError,
  logWarn: logWarn,
  logMessage: logMessage,
  logInfo: logInfo
};
var uniqueRef = {};
var bind = function (a, b) {
  return b;
}.bind(null, 1, uniqueRef)() === uniqueRef ? Function.prototype.bind : function (bind) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(bind, args.concat(Array.prototype.slice.call(arguments)));
  };
};
/*
 *   Substitutes into a string from a given map using the token
 *   Usage
 *   var str = 'text %%REPLACE%% this text with %%SOMETHING%%';
 *   var map = {};
 *   map['replace'] = 'it was subbed';
 *   map['something'] = 'something else';
 *   console.log(replaceTokenInString(str, map, '%%')); => "text it was subbed this text with something else"
 */

function replaceTokenInString(str, map, token) {
  _each(map, function (value, key) {
    value = value === undefined ? '' : value;
    var keyString = token + key.toUpperCase() + token;
    var re = new RegExp(keyString, 'g');
    str = str.replace(re, value);
  });

  return str;
}
/* utility method to get incremental integer starting from 1 */

var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}(); // generate a random string (to be used as a dynamic JSONP callback)


function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */

function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
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

function getBidIdParameter(key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
}
function tryAppendQueryString(existingUrl, key, value) {
  if (value) {
    return existingUrl += key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
} // parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}

function parseQueryStringParameters(queryObj) {
  var result = '';

  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  return result;
} // transform an AdServer targeting bids into a query string to send to the adserver

function transformAdServerTargetingObj(targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map(function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(getValue(targeting, key)));
    }).join('&');
  } else {
    return '';
  }
}
/**
 * Read an adUnit object and return the sizes used in an [[728, 90]] format (even if they had [728, 90] defined)
 * Preference is given to the `adUnit.mediaTypes.banner.sizes` object over the `adUnit.sizes`
 * @param {object} adUnit one adUnit object from the normal list of adUnits
 * @returns {Array.<number[]>} array of arrays containing numeric sizes
 */

function getAdUnitSizes(adUnit) {
  if (!adUnit) {
    return;
  }

  var sizes = [];

  if (adUnit.mediaTypes && adUnit.mediaTypes.banner && Array.isArray(adUnit.mediaTypes.banner.sizes)) {
    var bannerSizes = adUnit.mediaTypes.banner.sizes;

    if (Array.isArray(bannerSizes[0])) {
      sizes = bannerSizes;
    } else {
      sizes.push(bannerSizes);
    }
  } else if (Array.isArray(adUnit.sizes)) {
    if (Array.isArray(adUnit.sizes[0])) {
      sizes = adUnit.sizes;
    } else {
      sizes.push(adUnit.sizes);
    }
  }

  return sizes;
}
/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {(Array.<number[]>|Array.<number>)} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {Array.<string>}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */

function parseSizesInput(sizeObj) {
  var parsedSizes = []; // if a string for now we can assume it is a single size, like "300x250"

  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(','); // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line

    var sizeRegex = /^(\d)+x(\d)+$/i;

    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if (_typeof(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length; // don't process empty array

    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
} // parse a GPT style sigle size array, (i.e [300,250])
// into an AppNexus style string, (i.e. 300x250)

function parseGPTSingleSizeArray(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  if (isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1])) {
    return singleSize[0] + 'x' + singleSize[1];
  }
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowLocation() {
  if (inIframe()) {
    var loc;

    try {
      loc = internal.getAncestorOrigins() || internal.getTopFrameReferrer();
    } catch (e) {
      logInfo('could not obtain top window location', e);
    }

    if (loc) return Object(__WEBPACK_IMPORTED_MODULE_4__url__["a" /* parse */])(loc, {
      'decodeSearchAsString': true
    });
  }

  return internal.getWindowLocation();
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopFrameReferrer() {
  try {
    // force an exception in x-domain environments. #1509
    window.top.location.toString();
    var referrerLoc = '';
    var currentWindow;

    do {
      currentWindow = currentWindow ? currentWindow.parent : window;

      if (currentWindow.document && currentWindow.document.referrer) {
        referrerLoc = currentWindow.document.referrer;
      }
    } while (currentWindow !== window.top);

    return referrerLoc;
  } catch (e) {
    return window.document.referrer;
  }
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getAncestorOrigins() {
  if (window.document.location && window.document.location.ancestorOrigins && window.document.location.ancestorOrigins.length >= 1) {
    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
  }
}
function getWindowTop() {
  return window.top;
}
function getWindowSelf() {
  return window.self;
}
function getWindowLocation() {
  return window.location;
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowUrl() {
  var href;

  try {
    href = internal.getTopWindowLocation().href;
  } catch (e) {
    href = '';
  }

  return href;
}
/**
 * @deprecated This function will be removed soon. Use http://prebid.org/dev-docs/bidder-adaptor.html#referrers
 */

function getTopWindowReferrer() {
  try {
    return window.top.document.referrer;
  } catch (e) {
    return document.referrer;
  }
}
/**
 * Wrappers to console.(log | info | warn | error). Takes N arguments, the same as the native methods
 */

function logMessage() {
  if (debugTurnedOn() && consoleLogExists) {
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }
}

function decorateLog(args, prefix) {
  args = [].slice.call(args);
  prefix && args.unshift(prefix);
  args.unshift('display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;');
  args.unshift('%cPrebid');
  return args;
}

function hasConsoleLogger() {
  return consoleLogExists;
}
function debugTurnedOn() {
  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].getConfig('debug') === false && _loggingChecked === false) {
    var debug = getParameterByName(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
    __WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].setConfig({
      debug: debug
    });
    _loggingChecked = true;
  }

  return !!__WEBPACK_IMPORTED_MODULE_0__config__["a" /* config */].getConfig('debug');
}
function createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
}
/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */

function getParameterByName(name) {
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);

  if (results === null) {
    return '';
  }

  return decodeURIComponent(results[1].replace(/\+/g, ' '));
}
/**
 * This function validates paramaters.
 * @param  {Object} paramObj          [description]
 * @param  {string[]} requiredParamsArr [description]
 * @return {boolean}                   Bool if paramaters are valid
 */

function hasValidBidRequest(paramObj, requiredParamsArr, adapter) {
  var found = false;

  function findParam(value, key) {
    if (key === requiredParamsArr[i]) {
      found = true;
    }
  }

  for (var i = 0; i < requiredParamsArr.length; i++) {
    found = false;

    _each(paramObj, findParam);

    if (!found) {
      logError('Params are missing for bid request. One of these required paramaters are missing: ' + requiredParamsArr, adapter);
      return false;
    }
  }

  return true;
} // Handle addEventListener gracefully in older browsers

function addEventHandler(element, event, func) {
  if (element.addEventListener) {
    element.addEventListener(event, func, true);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, func);
  }
}
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */

function isA(object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
}
function isFn(object) {
  return isA(object, tFn);
}
function isStr(object) {
  return isA(object, tStr);
}
function isArray(object) {
  return isA(object, tArr);
}
function isNumber(object) {
  return isA(object, tNumb);
}
function isPlainObject(object) {
  return isA(object, tObject);
}
function isBoolean(object) {
  return isA(object, tBoolean);
}
/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */

function isEmpty(object) {
  if (!object) return true;

  if (isArray(object) || isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
}
/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */

function isEmptyStr(str) {
  return isStr(str) && (!str || str.length === 0);
}
/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */

function _each(object, fn) {
  if (isEmpty(object)) return;
  if (isFn(object.forEach)) return object.forEach(fn, this);
  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
}
function contains(a, obj) {
  if (isEmpty(a)) {
    return false;
  }

  if (isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;

  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
}
var indexOf = function () {
  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf;
  } // ie8 no longer supported
  // return polyfills.indexOf;

}();
/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */

function _map(object, callback) {
  if (isEmpty(object)) return [];
  if (isFn(object.map)) return object.map(callback);
  var output = [];

  _each(object, function (value, key) {
    output.push(callback(value, key, object));
  });

  return output;
}

var hasOwn = function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
};
/*
* Inserts an element(elm) as targets child, by default as first child
* @param {HTMLElement} elm
* @param {HTMLElement} [doc]
* @param {HTMLElement} [target]
* @param {Boolean} [asLastChildChild]
* @return {HTMLElement}
*/


function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}
/**
 * Inserts an image pixel with the specified `url` for cookie sync
 * @param {string} url URL string of the image pixel to load
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function triggerPixel(url, done) {
  var img = new Image();

  if (done && internal.isFn(done)) {
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  }

  img.src = url;
}
function callBurl(_ref) {
  var source = _ref.source,
      burl = _ref.burl;

  if (source === CONSTANTS.S2S.SRC && burl) {
    internal.triggerPixel(burl);
  }
}
/**
 * Inserts an empty iframe with the specified `html`, primarily used for tracking purposes
 * (though could be for other purposes)
 * @param {string} htmlCode snippet of HTML code used for tracking purposes
 */

function insertHtmlIntoIframe(htmlCode) {
  if (!htmlCode) {
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.id = getUniqueIdentifierStr();
  iframe.width = 0;
  iframe.height = 0;
  iframe.hspace = '0';
  iframe.vspace = '0';
  iframe.marginWidth = '0';
  iframe.marginHeight = '0';
  iframe.style.display = 'none';
  iframe.style.height = '0px';
  iframe.style.width = '0px';
  iframe.scrolling = 'no';
  iframe.frameBorder = '0';
  iframe.allowtransparency = 'true';
  internal.insertElement(iframe, document, 'body');
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(htmlCode);
  iframe.contentWindow.document.close();
}
/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function insertUserSyncIframe(url, done) {
  var iframeHtml = internal.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    iframe.addEventListener('load', done);
    iframe.addEventListener('error', done);
  }

  internal.insertElement(iframe, document, 'html', true);
}
;
/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */

function createTrackPixelHtml(url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
}
;
/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}
/**
 * Returns iframe document in a browser agnostic way
 * @param  {Object} iframe reference
 * @return {Object}        iframe `document` reference
 */

function getIframeDocument(iframe) {
  if (!iframe) {
    return;
  }

  var doc;

  try {
    if (iframe.contentWindow) {
      doc = iframe.contentWindow.document;
    } else if (iframe.contentDocument.document) {
      doc = iframe.contentDocument.document;
    } else {
      doc = iframe.contentDocument;
    }
  } catch (e) {
    internal.logError('Cannot get iframe document', e);
  }

  return doc;
}
function getValueString(param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }

  if (isStr(val)) {
    return val;
  }

  if (isNumber(val)) {
    return val.toString();
  }

  internal.logWarn('Unsuported type for param: ' + param + ' required type: String');
}
function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}
function flatten(a, b) {
  return a.concat(b);
}
function getBidRequest(id, bidderRequests) {
  if (!id) {
    return;
  }

  var bidRequest;
  bidderRequests.some(function (bidderRequest) {
    var result = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(bidderRequest.bids, function (bid) {
      return ['bidId', 'adId', 'bid_id'].some(function (type) {
        return bid[type] === id;
      });
    });

    if (result) {
      bidRequest = result;
    }

    return result;
  });
  return bidRequest;
}
function getKeys(obj) {
  return Object.keys(obj);
}
function getValue(obj, key) {
  return obj[key];
}
/**
 * Get the key of an object for a given value
 */

function getKeyByValue(obj, value) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
}
function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pbjs.adUnits;
  // this could memoize adUnits
  return adUnits.map(function (unit) {
    return unit.bids.map(function (bid) {
      return bid.bidder;
    }).reduce(flatten, []);
  }).reduce(flatten).filter(uniques);
}
function isGptPubadsDefined() {
  if (window.googletag && isFn(window.googletag.pubads) && isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
} // This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond

var getHighestCpm = getHighestCpmCallback('timeToRespond', function (previous, current) {
  return previous > current;
}); // This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448

var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous > current;
}); // This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2539

var getLatestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous < current;
});

function getHighestCpmCallback(useTieBreakerProperty, tieBreakerCallback) {
  return function (previous, current) {
    if (previous.cpm === current.cpm) {
      return tieBreakerCallback(previous[useTieBreakerProperty], current[useTieBreakerProperty]) ? current : previous;
    }

    return previous.cpm < current.cpm ? current : previous;
  };
}
/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */


function shuffle(array) {
  var counter = array.length; // while there are elements in the array

  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter); // decrease counter by 1

    counter--; // and swap the last element with it

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
function adUnitsFilter(filter, bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(filter, bid && bid.adUnitCode);
}
/**
 * Check if parent iframe of passed document supports content rendering via 'srcdoc' property
 * @param {HTMLDocument} doc document to check support of 'srcdoc'
 */

function isSrcdocSupported(doc) {
  // Firefox is excluded due to https://bugzilla.mozilla.org/show_bug.cgi?id=1265961
  return doc.defaultView && doc.defaultView.frameElement && 'srcdoc' in doc.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
}
function deepClone(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_just_clone___default()(obj);
}
function inIframe() {
  try {
    return internal.getWindowSelf() !== internal.getWindowTop();
  } catch (e) {
    return true;
  }
}
function isSafariBrowser() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}
function timestamp() {
  return new Date().getTime();
}
function checkCookieSupport() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
}
function cookiesAreEnabled() {
  if (internal.checkCookieSupport()) {
    return true;
  }

  window.document.cookie = 'prebid.cookieTest';
  return window.document.cookie.indexOf('prebid.cookieTest') != -1;
}
function getCookie(name) {
  var m = window.document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]*)\\s*(;|$)');
  return m ? decodeURIComponent(m[2]) : null;
}
/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */

function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error("numRequiredCalls must be a positive number. Got ".concat(numRequiredCalls));
  }

  var numCalls = 0;
  return function () {
    numCalls++;

    if (numCalls === numRequiredCalls) {
      func.apply(null, arguments);
    }
  };
}
/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {Object} {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
/**
 * deepAccess utility function useful for doing safe access (will not throw exceptions) of deep object paths.
 * @param {Object} obj The object containing the values you would like to access.
 * @param {string|number} path Object path to the value you would like to access.  Non-strings are coerced to strings.
 * @returns {*} The value found at the specified object path, or undefined if path is not found.
 */

function deepAccess(obj, path) {
  if (!obj) {
    return;
  }

  path = String(path).split('.');

  for (var i = 0; i < path.length; i++) {
    obj = obj[path[i]];

    if (typeof obj === 'undefined') {
      return;
    }
  }

  return obj;
}
/**
 * Returns content for a friendly iframe to execute a URL in script tag
 * @param {string} url URL to be executed in a script tag in a friendly iframe
 * <!--PRE_SCRIPT_TAG_MACRO--> and <!--POST_SCRIPT_TAG_MACRO--> are macros left to be replaced if required
 */

function createContentToExecuteExtScriptInFriendlyFrame(url) {
  if (!url) {
    return '';
  }

  return "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\"><html><head><base target=\"_top\" /><script>inDapIF=true;</script></head><body><!--PRE_SCRIPT_TAG_MACRO--><script src=\"".concat(url, "\"></script><!--POST_SCRIPT_TAG_MACRO--></body></html>");
}
/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {Object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {Object} An object containing all the specified values that are defined
 */

function getDefinedParams(object, params) {
  return params.filter(function (param) {
    return object[param];
  }).reduce(function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }, {});
}
/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */

function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream', 'adpod'];
  var types = Object.keys(mediaTypes);

  if (!types.every(function (type) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(SUPPORTED_MEDIA_TYPES, type);
  })) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes___default()(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
  }

  return true;
}
function getBidderRequest(bidRequests, bidder, adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find___default()(bidRequests, function (request) {
    return request.bids.filter(function (bid) {
      return bid.bidder === bidder && bid.adUnitCode === adUnitCode;
    }).length > 0;
  }) || {
    start: null,
    auctionId: null
  };
}
/**
 * Returns user configured bidder params from adunit
 * @param {Object} adUnits
 * @param {string} adUnitCode code
 * @param {string} bidder code
 * @return {Array} user configured param for the given bidder adunit configuration
 */

function getUserConfiguredParams(adUnits, adUnitCode, bidder) {
  return adUnits.filter(function (adUnit) {
    return adUnit.code === adUnitCode;
  }).map(function (adUnit) {
    return adUnit.bids;
  }).reduce(flatten, []).filter(function (bidderData) {
    return bidderData.bidder === bidder;
  }).map(function (bidderData) {
    return bidderData.params || {};
  });
}
/**
 * Returns the origin
 */

function getOrigin() {
  // IE10 does not have this property. https://gist.github.com/hbogs/7908703
  if (!window.location.origin) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  } else {
    return window.location.origin;
  }
}
/**
 * Returns Do Not Track state
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1' || navigator.doNotTrack === 'yes';
}

var compareCodeAndSlot = function compareCodeAndSlot(slot, adUnitCode) {
  return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
};
/**
 * Returns filter function to match adUnitCode in slot
 * @param {Object} slot GoogleTag slot
 * @return {function} filter function
 */


function isAdUnitCodeMatchingSlot(slot) {
  return function (adUnitCode) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Returns filter function to match adUnitCode in slot
 * @param {string} adUnitCode AdUnit code
 * @return {function} filter function
 */

function isSlotMatchingAdUnitCode(adUnitCode) {
  return function (slot) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {string} bidder bidder code that is not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */

function unsupportedBidderMessage(adUnit, bidder) {
  var mediaType = Object.keys(adUnit.mediaTypes || {
    'banner': 'banner'
  }).join(', ');
  return "\n    ".concat(adUnit.code, " is a ").concat(mediaType, " ad unit\n    containing bidders that don't support ").concat(mediaType, ": ").concat(bidder, ".\n    This bidder won't fetch demand.\n  ");
}
/**
 * Delete property from object
 * @param {Object} object
 * @param {string} prop
 * @return {Object} object
 */

function deletePropertyFromObject(object, prop) {
  var result = _extends({}, object);

  delete result[prop];
  return result;
}
/**
 * Delete requestId from external bid object.
 * @param {Object} bid
 * @return {Object} bid
 */

function removeRequestId(bid) {
  return deletePropertyFromObject(bid, 'requestId');
}
/**
 * Checks input is integer or not
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value
 */

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
}
/**
 * Converts a string value in camel-case to underscore eg 'placementId' becomes 'placement_id'
 * @param {string} value string value to convert
 */

function convertCamelToUnderscore(value) {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
    return '_' + y.toLowerCase();
  }).replace(/^_/, '');
}
/**
 * Converts an object of arrays (either strings or numbers) into an array of objects containing key and value properties
 * normally read from bidder params
 * eg { foo: ['bar', 'baz'], fizz: ['buzz'] }
 * becomes [{ key: 'foo', value: ['bar', 'baz']}, {key: 'fizz', value: ['buzz']}]
 * @param {Object} keywords object of arrays representing keyvalue pairs
 * @param {string} paramName name of parent object (eg 'keywords') containing keyword data, used in error handling
 */

function transformBidderParamKeywords(keywords) {
  var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keywords';
  var arrs = [];

  _each(keywords, function (v, k) {
    if (isArray(v)) {
      var values = [];

      _each(v, function (val) {
        val = getValueString(paramName + '.' + k, val);

        if (val || val === '') {
          values.push(val);
        }
      });

      v = values;
    } else {
      v = getValueString(paramName + '.' + k, v);

      if (isStr(v)) {
        v = [v];
      } else {
        return;
      } // unsuported types - don't send a key

    }

    arrs.push({
      key: k,
      value: v
    });
  });

  return arrs;
}
/**
 * Try to convert a value to a type.
 * If it can't be done, the value will be returned.
 *
 * @param {string} typeToConvert The target type. e.g. "string", "number", etc.
 * @param {*} value The value to be converted into typeToConvert.
 */

function tryConvertType(typeToConvert, value) {
  if (typeToConvert === 'string') {
    return value && value.toString();
  } else if (typeToConvert === 'number') {
    return Number(value);
  } else {
    return value;
  }
}

function convertTypes(types, params) {
  Object.keys(types).forEach(function (key) {
    if (params[key]) {
      if (isFn(types[key])) {
        params[key] = types[key](params[key]);
      } else {
        params[key] = tryConvertType(types[key], params[key]);
      } // don't send invalid values


      if (isNaN(params[key])) {
        delete params.key;
      }
    }
  });
  return params;
}
function setDataInLocalStorage(key, value) {
  if (hasLocalStorage()) {
    window.localStorage.setItem(key, value);
  }
}
function getDataFromLocalStorage(key) {
  if (hasLocalStorage()) {
    return window.localStorage.getItem(key);
  }
}
function hasLocalStorage() {
  try {
    return !!window.localStorage;
  } catch (e) {
    logError('Local storage api disabled');
  }
}
function isArrayOfNums(val, size) {
  return isArray(val) && (size ? val.length === size : true) && val.every(function (v) {
    return isInteger(v);
  });
}
/**
 * Creates an array of n length and fills each item with the given value
 */

function fill(value, length) {
  var newArray = [];

  for (var i = 0; i < length; i++) {
    var valueToPush = isPlainObject(value) ? deepClone(value) : value;
    newArray.push(valueToPush);
  }

  return newArray;
}
/**
 * http://npm.im/chunk
 * Returns an array with *size* chunks from given array
 *
 * Example:
 * ['a', 'b', 'c', 'd', 'e'] chunked by 2 =>
 * [['a', 'b'], ['c', 'd'], ['e']]
 */

function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    var start = i * size;
    var end = start + size;
    newArray.push(array.slice(start, end));
  }

  return newArray;
}
function getMinValueFromArray(array) {
  return Math.min.apply(Math, _toConsumableArray(array));
}
function getMaxValueFromArray(array) {
  return Math.max.apply(Math, _toConsumableArray(array));
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = registerBidder;
/* harmony export (immutable) */ __webpack_exports__["a"] = getAdapter;
/* harmony export (immutable) */ __webpack_exports__["b"] = getIabSubCategory;
var adapters = [];
function registerBidder(spec) {
  var aliases = Array.isArray(spec.aliases) ? spec.aliases : [];
  aliases.push(spec.code);
  aliases.forEach(function (alias) {
    adapters.push({
      code: alias,
      spec: spec
    });
  });
}
function getAdapter(bid) {
  if (!bid || !bid.bidder) {
    return null;
  }

  var spec;

  for (var _i = 0; _i < adapters.length; _i++) {
    var adapter = adapters[_i];

    if (adapter.code == bid.bidder) {
      spec = adapter.spec;
      break;
    }
  }

  return spec;
}
function getIabSubCategory() {
  return '';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
module.exports = __webpack_require__(4).Array.find;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADPOD; });
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 * @typedef {('adpod')} VideoContext
 */

/** @type MediaType */
var NATIVE = 'native';
/** @type MediaType */

var VIDEO = 'video';
/** @type MediaType */

var BANNER = 'banner';
/** @type VideoContext */

var ADPOD = 'adpod';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(4).Array.includes;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Renderer; });
var Renderer = {
  install: function install() {
    return {
      setRender: function setRender() {},
      setEventHandlers: function setEventHandlers() {}
    };
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var ctx = __webpack_require__(11);
var hide = __webpack_require__(27);
var has = __webpack_require__(34);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(26);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","SET_TARGETING":"setTargeting","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocuemnt","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format"},"NATIVE_KEYS":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered"}}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
  getConfig: function getConfig() {
    return false;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_appnexusBidAdapter__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_pubmaticBidAdapter__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_spotxBidAdapter__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_freewheel_sspBidAdapter__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_telariaBidAdapter__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bidderFactory__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // additional






var adapterUserSyncsDone = [];

window.requestBid = function (bid) {
  var spec = Object(__WEBPACK_IMPORTED_MODULE_6__bidderFactory__["a" /* getAdapter */])(bid);

  if (!spec) {
    console.warn("Unsupported bid adapter, name: ".concat(bid && bid.bidder));
    return;
  }

  var adUnit = {
    sizes: [640, 480],
    mediaTypes: {
      video: {
        playerSize: [640, 480],
        context: 'instream'
      }
    },
    bids: [bid]
  };
  var bidRequests = getBidRequests(adUnit, spec);
  var bidderRequest = getBidderRequest(bidRequests);
  var request = spec.buildRequests(bidRequests, bidderRequest);

  if (Array.isArray(request)) {
    request = request[0];
  }

  if (!adUnit.bids || adUnit.bids.length == 0) {
    return null;
  }

  return processRequest(request).then(function (response) {
    if (response && response.error) {
      throw new Error(response.error);
    }

    response = {
      body: response
    };
    var bids = spec.interpretResponse(response, request);

    if (bids && bids.length) {
      var bidder = adUnit.bids[0].bidder;
      setTimeout(function () {
        return triggerUserSync(bidder, [response], spec);
      }, 3000);
      return bids[0].vastUrl;
    }

    return null;
  });
}; // generated bid requests


function filterNonValid(bid, spec) {
  if (!spec.isBidRequestValid(bid)) {
    return false;
  }

  return true;
}

function getBidRequests(adUnit, spec) {
  var unitBid = adUnit.bids[0];
  var bids = [_objectSpread({}, unitBid, {
    mediaTypes: adUnit.mediaTypes,
    adUnitCode: adUnit.code,
    sizes: adUnit.sizes,
    bidderRequestId: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getUniqueIdentifierStr */])(),
    bidId: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getUniqueIdentifierStr */])(),
    transactionId: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* generateUUID */])(),
    auctionId: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* generateUUID */])(),
    crumbs: {
      pubcid: Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* generateUUID */])()
    }
  })];
  bids = bids.filter(function (bid) {
    return filterNonValid(bid, spec);
  });
  return bids;
}

function getBidderRequest(bidRequests) {
  if (!bidRequests || bidRequests.length == 0) {
    return null;
  }

  var bid = bidRequests[0];
  var bidderRequest = {
    bidderCode: bid.bidder,
    auctionId: bid.auctionId,
    bidderRequestId: bid.bidderRequestId,
    bids: [bid],
    // 'auctionStart': 1551439885900,
    timeout: 700,
    start: Date.now(),
    refererInfo: {
      referer: window.location.href,
      reachedTop: true,
      numIframes: 0,
      stack: [window.location.href]
    }
  };
  return bidderRequest;
}

function processRequest(request) {
  var requestUrl = request.url;
  var requestInit = {
    method: request.method,
    mode: 'cors' // no-cors, cors, *same-origin
    // headers: {
    //   contentType: 'text/plain',
    // },

  };

  if (request.data) {
    if (request.method == 'POST') {
      requestInit.body = typeof request.data == 'string' ? request.data : JSON.stringify(request.data);
    } else {
      requestUrl += "?".concat(_typeof(request.data) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* parseQueryStringParameters */])(request.data) : request.data);
    }
  }

  return fetch(requestUrl, requestInit).then(function (response) {
    return response.text();
  }).then(function (data) {
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

  var userSyncs = spec.getUserSyncs({
    iframeEnabled: true,
    pixelEnabled: true
  }, responses);
  Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* shuffleArray */])(userSyncs).forEach(function (_ref) {
    var type = _ref.type,
        url = _ref.url;

    if (type == 'iframe') {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* insertUserSyncIframe */])(url);
    }

    if (type == 'image') {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* triggerPixel */])(url);
    }
  });
  adapterUserSyncsDone.push(bidder);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Renderer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








var BIDDER_CODE = 'appnexus';
var URL = '//ib.adnxs.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'mimes', 'minduration', 'maxduration', 'startdelay', 'skippable', 'playback_method', 'frameworks'];
var USER_PARAMS = ['age', 'external_uid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately

var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var NATIVE_MAPPING = {
  body: 'description',
  body2: 'desc2',
  cta: 'ctatext',
  image: {
    serverName: 'main_image',
    requiredParams: {
      required: true
    },
    minimumParams: {
      sizes: [{}]
    }
  },
  icon: {
    serverName: 'icon',
    requiredParams: {
      required: true
    },
    minimumParams: {
      sizes: [{}]
    }
  },
  sponsoredBy: 'sponsored_by',
  privacyLink: 'privacy_link',
  salePrice: 'saleprice',
  displayUrl: 'displayurl'
};
var SOURCE = 'pbjs';
var MAX_IMPS_PER_REQUEST = 15;
var mappingFileUrl = '//acdn.adnxs.com/prebid/appnexus-mapping/mappings.json';
var spec = {
  code: BIDDER_CODE,
  aliases: ['appnexusAst', 'brealtime', 'emxdigital', 'pagescience', 'defymedia', 'gourmetads', 'matomy', 'featureforward', 'oftmedia', 'districtm'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.member && bid.params.invCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var tags = bidRequests.map(bidToTag);
    var userObjBid = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasUserInfo);
    var userObj;

    if (userObjBid) {
      userObj = {};
      Object.keys(userObjBid.params.user).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(USER_PARAMS, param);
      }).forEach(function (param) {
        return userObj[param] = userObjBid.params.user[param];
      });
    }

    var appDeviceObjBid = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;

    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(APP_DEVICE_PARAMS, param);
      }).forEach(function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      });
    }

    var appIdObjBid = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasAppId);
    var appIdObj;

    if (appIdObjBid && appIdObjBid.params && appDeviceObjBid.params.app && appDeviceObjBid.params.app.id) {
      appIdObj = {
        appid: appIdObjBid.params.app.id
      };
    }

    var debugObj = {};
    var debugObjParams = {};
    var debugCookieName = 'apn_prebid_debug';
    var debugCookie = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getCookie"](debugCookieName) || null;

    if (debugCookie) {
      try {
        debugObj = JSON.parse(debugCookie);
      } catch (e) {
        __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"]('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      var debugBidRequest = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasDebug);

      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }

    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(DEBUG_PARAMS, param);
      }).forEach(function (param) {
        debugObjParams[param] = debugObj[param];
      });
    }

    var memberIdBid = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var payload = {
      tags: _toConsumableArray(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "2.4.0"
      }
    };

    if (member > 0) {
      payload.member_id = member;
    }

    if (appDeviceObjBid) {
      payload.device = appDeviceObj;
    }

    if (appIdObjBid) {
      payload.app = appIdObj;
    }

    if (__WEBPACK_IMPORTED_MODULE_2__src_config__["a" /* config */].getConfig('adpod.brandCategoryExclusion')) {
      payload.brand_category_uniqueness = true;
    }

    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logInfo"]('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }

    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };
    }

    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.referer),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map(function (url) {
          return encodeURIComponent(url);
        }).join(',')
      };
      payload.referrer_detection = refererinfo;
    }

    var hasAdPodBid = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(bidRequests, hasAdPod);

    if (hasAdPodBid) {
      bidRequests.filter(hasAdPod).forEach(function (adPodBid) {
        var adPodTags = createAdPodRequest(tags, adPodBid); // don't need the original adpod placement because it's in adPodTags

        var nonPodTags = payload.tags.filter(function (tag) {
          return tag.uuid !== adPodBid.bidId;
        });
        payload.tags = [].concat(_toConsumableArray(nonPodTags), _toConsumableArray(adPodTags));
      });
    }

    var request = formatRequest(payload, bidderRequest);
    return request;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, _ref) {
    var _this = this;

    var bidderRequest = _ref.bidderRequest;
    serverResponse = serverResponse.body;
    var bids = [];

    if (!serverResponse || serverResponse.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (serverResponse && serverResponse.error) {
        errorMessage += ": ".concat(serverResponse.error);
      }

      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"](errorMessage);
      return bids;
    }

    if (serverResponse.tags) {
      serverResponse.tags.forEach(function (serverBid) {
        var rtbBid = getRtbBid(serverBid);

        if (rtbBid) {
          if (rtbBid.cpm !== 0 && __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(_this.supportedMediaTypes, rtbBid.ad_type)) {
            var bid = newBid(serverBid, rtbBid, bidderRequest);
            bid.mediaType = parseMediaType(rtbBid);
            bids.push(bid);
          }
        }
      });
    }

    if (serverResponse.debug && serverResponse.debug.debug_info) {
      var debugHeader = 'AppNexus Debug Auction for Prebid\n\n';
      var debugText = debugHeader + serverResponse.debug.debug_info;
      debugText = debugText.replace(/(<td>|<th>)/gm, '\t') // Tables
      .replace(/(<\/td>|<\/th>)/gm, '\n') // Tables
      .replace(/^<br>/gm, '') // Remove leading <br>
      .replace(/(<br>\n|<br>)/gm, '\n') // <br>
      .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n') // Header H1
      .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n') // Headers
      .replace(/(<([^>]+)>)/igm, ''); // Remove any other tags

      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('https://console.appnexus.com/docs/understanding-the-debug-auction');
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"](debugText);
    }

    return bids;
  },

  /**
   * @typedef {Object} mappingFileInfo
   * @property {string} url  mapping file json url
   * @property {number} refreshInDays prebid stores mapping data in localstorage so you can return in how many days you want to update value stored in localstorage.
   * @property {string} localStorageKey unique key to store your mapping json in localstorage
   */

  /**
   * Returns mapping file info. This info will be used by bidderFactory to preload mapping file and store data in local storage
   * @returns {mappingFileInfo}
   */
  getMappingFileInfo: function getMappingFileInfo() {
    return {
      url: mappingFileUrl,
      refreshInDays: 7
    };
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: '//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    params = __WEBPACK_IMPORTED_MODULE_1__src_utils__["convertTypes"]({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': __WEBPACK_IMPORTED_MODULE_1__src_utils__["transformBidderParamKeywords"]
    }, params);

    if (isOpenRtb) {
      params.use_pmt_rule = typeof params.usePaymentRule === 'boolean' ? params.usePaymentRule : false;

      if (params.usePaymentRule) {
        delete params.usePaymentRule;
      }

      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }

      Object.keys(params).forEach(function (paramKey) {
        var convertedKey = __WEBPACK_IMPORTED_MODULE_1__src_utils__["convertCamelToUnderscore"](paramKey);

        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      });
    }

    return params;
  }
};

function isPopulatedArray(arr) {
  return !!(__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](arr) && arr.length > 0);
}

function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}

function formatRequest(payload, bidderRequest) {
  var request = [];

  if (payload.tags.length > MAX_IMPS_PER_REQUEST) {
    var clonedPayload = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepClone"](payload);
    __WEBPACK_IMPORTED_MODULE_1__src_utils__["chunk"](payload.tags, MAX_IMPS_PER_REQUEST).forEach(function (tags) {
      clonedPayload.tags = tags;
      var payloadString = JSON.stringify(clonedPayload);
      request.push({
        method: 'POST',
        url: URL,
        data: payloadString,
        bidderRequest: bidderRequest
      });
    });
  } else {
    var payloadString = JSON.stringify(payload);
    request = {
      method: 'POST',
      url: URL,
      data: payloadString,
      bidderRequest: bidderRequest
    };
  }

  return request;
}

function newRenderer(adUnitCode, rtbBid) {
  var rendererOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var renderer = __WEBPACK_IMPORTED_MODULE_0__src_Renderer__["a" /* Renderer */].install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });

  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    __WEBPACK_IMPORTED_MODULE_1__src_utils__["logWarn"]('Prebid Error calling setRender on renderer', err);
  }

  renderer.setEventHandlers({
    impression: function impression() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logMessage"]('AppNexus outstream renderer video event');
      document.querySelector("#".concat(adUnitCode)).style.display = 'none';
    }
  });
  return renderer;
}
/**
 * Unpack the Server's Bid into a Prebid-compatible one.
 * @param serverBid
 * @param rtbBid
 * @param bidderRequest
 * @return Bid
 */


function newBid(serverBid, rtbBid, bidderRequest) {
  var bidRequest = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getBidRequest"](serverBid.uuid, [bidderRequest]);
  var bid = {
    requestId: serverBid.uuid,
    cpm: rtbBid.cpm,
    creativeId: rtbBid.creative_id,
    dealId: rtbBid.deal_id,
    currency: 'USD',
    netRevenue: true,
    ttl: 300,
    adUnitCode: bidRequest.adUnitCode,
    appnexus: {
      buyerMemberId: rtbBid.buyer_member_id,
      dealPriority: rtbBid.deal_priority,
      dealCode: rtbBid.deal_code
    }
  };

  if (rtbBid.rtb.video) {
    _extends(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastUrl: rtbBid.rtb.video.asset_url,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    });

    var videoContext = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bidRequest, 'mediaTypes.video.context');

    if (videoContext === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* ADPOD */]) {
      var iabSubCatId = Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory__["b" /* getIabSubCategory */])(bidRequest.bidder, rtbBid.brand_category_id);
      bid.meta = {
        iabSubCatId: iabSubCatId
      };
      bid.video = {
        context: __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* ADPOD */],
        durationSeconds: Math.floor(rtbBid.rtb.video.duration_ms / 1000)
      };
    } // This supports Outstream Video


    if (rtbBid.renderer_url) {
      var rendererOptions = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bidderRequest.bids[0], 'renderer.options');

      _extends(bid, {
        adResponse: serverBid,
        renderer: newRenderer(bid.adUnitCode, rtbBid, rendererOptions)
      });

      bid.adResponse.ad = bid.adResponse.ads[0];
      bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
    }
  } else if (rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]]) {
    var nativeAd = rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]];
    bid[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]] = {
      title: nativeAd.title,
      body: nativeAd.desc,
      body2: nativeAd.desc2,
      cta: nativeAd.ctatext,
      rating: nativeAd.rating,
      sponsoredBy: nativeAd.sponsored,
      privacyLink: nativeAd.privacy_link,
      address: nativeAd.address,
      downloads: nativeAd.downloads,
      likes: nativeAd.likes,
      phone: nativeAd.phone,
      price: nativeAd.price,
      salePrice: nativeAd.saleprice,
      clickUrl: nativeAd.link.url,
      displayUrl: nativeAd.displayurl,
      clickTrackers: nativeAd.link.click_trackers,
      impressionTrackers: nativeAd.impression_trackers,
      javascriptTrackers: nativeAd.javascript_trackers
    };

    if (nativeAd.main_img) {
      bid['native'].image = {
        url: nativeAd.main_img.url,
        height: nativeAd.main_img.height,
        width: nativeAd.main_img.width
      };
    }

    if (nativeAd.icon) {
      bid['native'].icon = {
        url: nativeAd.icon.url,
        height: nativeAd.icon.height,
        width: nativeAd.icon.width
      };
    }
  } else {
    _extends(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });

    try {
      var url = rtbBid.rtb.trackers[0].impression_urls[0];
      var tracker = __WEBPACK_IMPORTED_MODULE_1__src_utils__["createTrackPixelHtml"](url);
      bid.ad += tracker;
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_1__src_utils__["logError"]('Error appending tracking pixel', error);
    }
  }

  return bid;
}

function bidToTag(bid) {
  var tag = {};
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;

  if (bid.params.placementId) {
    tag.id = parseInt(bid.params.placementId, 10);
  } else {
    tag.code = bid.params.invCode;
  }

  tag.allow_smaller_sizes = bid.params.allowSmallerSizes || false;
  tag.use_pmt_rule = bid.params.usePaymentRule || false;
  tag.prebid = true;
  tag.disable_psa = true;

  if (bid.params.reserve) {
    tag.reserve = bid.params.reserve;
  }

  if (bid.params.position) {
    tag.position = {
      'above': 1,
      'below': 2
    }[bid.params.position] || 0;
  }

  if (bid.params.trafficSourceCode) {
    tag.traffic_source_code = bid.params.trafficSourceCode;
  }

  if (bid.params.privateSizes) {
    tag.private_sizes = transformSizes(bid.params.privateSizes);
  }

  if (bid.params.supplyType) {
    tag.supply_type = bid.params.supplyType;
  }

  if (bid.params.pubClick) {
    tag.pubclick = bid.params.pubClick;
  }

  if (bid.params.extInvCode) {
    tag.ext_inv_code = bid.params.extInvCode;
  }

  if (bid.params.externalImpId) {
    tag.external_imp_id = bid.params.externalImpId;
  }

  if (!__WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.params.keywords)) {
    var keywords = __WEBPACK_IMPORTED_MODULE_1__src_utils__["transformBidderParamKeywords"](bid.params.keywords);

    if (keywords.length > 0) {
      keywords.forEach(deleteValues);
    }

    tag.keywords = keywords;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */] || __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]))) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]);

    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]] = {
        layouts: [nativeRequest]
      };
    }
  }

  var videoMediaType = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */]));
  var context = __WEBPACK_IMPORTED_MODULE_1__src_utils__["deepAccess"](bid, 'mediaTypes.video.context');

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */] || videoMediaType) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */]);
  } // instream gets vastUrl, outstream gets vastXml


  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */] || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }

  if (bid.params.video) {
    tag.video = {}; // place any valid video params on the tag

    Object.keys(bid.params.video).filter(function (param) {
      return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(VIDEO_TARGETING, param);
    }).forEach(function (param) {
      return tag.video[param] = bid.params.video[param];
    });
  }

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.mediaType) && __WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](bid.mediaTypes) || bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["b" /* BANNER */] || bid.mediaTypes && bid.mediaTypes[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["b" /* BANNER */]]) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["b" /* BANNER */]);
  }

  return tag;
}
/* Turn bid request sizes into ut-compatible format */


function transformSizes(requestSizes) {
  var sizes = [];
  var sizeObj = {};

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](requestSizes) && requestSizes.length === 2 && !__WEBPACK_IMPORTED_MODULE_1__src_utils__["isArray"](requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if (_typeof(requestSizes) === 'object') {
    for (var i = 0; i < requestSizes.length; i++) {
      var size = requestSizes[i];
      sizeObj = {};
      sizeObj.width = parseInt(size[0], 10);
      sizeObj.height = parseInt(size[1], 10);
      sizes.push(sizeObj);
    }
  }

  return sizes;
}

function hasUserInfo(bid) {
  return !!bid.params.user;
}

function hasMemberId(bid) {
  return !!parseInt(bid.params.member, 10);
}

function hasAppDeviceInfo(bid) {
  if (bid.params) {
    return !!bid.params.app;
  }
}

function hasAppId(bid) {
  if (bid.params && bid.params.app) {
    return !!bid.params.app.id;
  }

  return !!bid.params.app;
}

function hasDebug(bid) {
  return !!bid.debug;
}

function hasAdPod(bid) {
  return bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.context === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["a" /* ADPOD */];
}
/**
 * Expand an adpod placement into a set of request objects according to the
 * total adpod duration and the range of duration seconds. Sets minduration/
 * maxduration video property according to requireExactDuration configuration
 */


function createAdPodRequest(tags, adPodBid) {
  var _adPodBid$mediaTypes$ = adPodBid.mediaTypes.video,
      durationRangeSec = _adPodBid$mediaTypes$.durationRangeSec,
      requireExactDuration = _adPodBid$mediaTypes$.requireExactDuration;
  var numberOfPlacements = getAdPodPlacementNumber(adPodBid.mediaTypes.video);
  var maxDuration = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getMaxValueFromArray"](durationRangeSec);
  var tagToDuplicate = tags.filter(function (tag) {
    return tag.uuid === adPodBid.bidId;
  });
  var request = __WEBPACK_IMPORTED_MODULE_1__src_utils__["fill"].apply(__WEBPACK_IMPORTED_MODULE_1__src_utils__, _toConsumableArray(tagToDuplicate).concat([numberOfPlacements]));

  if (requireExactDuration) {
    var divider = Math.ceil(numberOfPlacements / durationRangeSec.length);
    var chunked = __WEBPACK_IMPORTED_MODULE_1__src_utils__["chunk"](request, divider); // each configured duration is set as min/maxduration for a subset of requests

    durationRangeSec.forEach(function (duration, index) {
      chunked[index].map(function (tag) {
        setVideoProperty(tag, 'minduration', duration);
        setVideoProperty(tag, 'maxduration', duration);
      });
    });
  } else {
    // all maxdurations should be the same
    request.map(function (tag) {
      return setVideoProperty(tag, 'maxduration', maxDuration);
    });
  }

  return request;
}

function getAdPodPlacementNumber(videoParams) {
  var adPodDurationSec = videoParams.adPodDurationSec,
      durationRangeSec = videoParams.durationRangeSec,
      requireExactDuration = videoParams.requireExactDuration;
  var minAllowedDuration = __WEBPACK_IMPORTED_MODULE_1__src_utils__["getMinValueFromArray"](durationRangeSec);
  var numberOfPlacements = Math.floor(adPodDurationSec / minAllowedDuration);
  return requireExactDuration ? Math.max(numberOfPlacements, durationRangeSec.length) : numberOfPlacements;
}

function setVideoProperty(tag, key, value) {
  if (__WEBPACK_IMPORTED_MODULE_1__src_utils__["isEmpty"](tag.video)) {
    tag.video = {};
  }

  tag.video[key] = value;
}

function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find___default()(tag.ads, function (ad) {
    return ad.rtb;
  });
}

function buildNativeRequest(params) {
  var request = {}; // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}

  Object.keys(params).forEach(function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key; // required params are always passed on request

    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = _extends({}, requiredParams, params[key]); // minimum params are passed if no non-required params given on adunit

    var minimumParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].minimumParams;

    if (requiredParams && minimumParams) {
      // subtract required keys from adunit keys
      var adunitKeys = Object.keys(params[key]);
      var requiredKeys = Object.keys(requiredParams);
      var remaining = adunitKeys.filter(function (key) {
        return !__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes___default()(requiredKeys, key);
      }); // if none are left over, the minimum params needs to be sent

      if (remaining.length === 0) {
        request[requestKey] = _extends({}, request[requestKey], minimumParams);
      }
    }
  });
  return request;
}

function outstreamRender(bid) {
  // push to render queue because ANOutstreamVideo may not be loaded yet
  bid.renderer.push(function () {
    window.ANOutstreamVideo.renderAd({
      tagId: bid.adResponse.tag_id,
      sizes: [bid.getSize().split('x')],
      targetId: bid.adUnitCode,
      // target div id to render video
      uuid: bid.adResponse.uuid,
      adResponse: bid.adResponse,
      rendererOptions: bid.renderer.getConfig()
    }, handleOutstreamRendererEvents.bind(null, bid));
  });
}

function handleOutstreamRendererEvents(bid, id, eventName) {
  bid.renderer.handleVideoEvent({
    id: id,
    eventName: eventName
  });
}

function parseMediaType(rtbBid) {
  var adType = rtbBid.ad_type;

  if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["d" /* VIDEO */];
  } else if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["c" /* NATIVE */];
  } else {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes__["b" /* BANNER */];
  }
}

Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory__["c" /* registerBidder */])(spec);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RANDOM */
/* unused harmony export newConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpmBucketManager__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hook__ = __webpack_require__(48);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Module for getting and setting Prebid configuration.
 *
 * Prebid previously defined these properties directly on the global object:
 * pbjs.logging = true;
 *
 * Defining and access properties in this way is now deprecated, but these will
 * continue to work during a deprecation window.
 */





var utils = __webpack_require__(0);

var DEFAULT_DEBUG = false;
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_ENABLE_SEND_ALL_BIDS = true;
var DEFAULT_DISABLE_AJAX_TIMEOUT = false;
var DEFAULT_BID_CACHE = false;
var DEFAULT_TIMEOUTBUFFER = 400;
var RANDOM = 'random';
var FIXED = 'fixed';
var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;
var DEFAULT_BIDDER_SEQUENCE = RANDOM;
var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};
var ALL_TOPICS = '*';
/**
 * @typedef {object} PrebidConfig
 *
 * @property {string} cache.url Set a url if we should use prebid-cache to store video bids before adding
 *   bids to the auction. **NOTE** This must be set if you want to use the dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];
  var defaults;
  var config;

  function resetConfig() {
    defaults = {};
    var newConfig = {
      // `debug` is equivalent to legacy `pbjs.logging` property
      _debug: DEFAULT_DEBUG,

      get debug() {
        return this._debug;
      },

      set debug(val) {
        this._debug = val;
      },

      // default timeout for all bids
      _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,

      get bidderTimeout() {
        return this._bidderTimeout;
      },

      set bidderTimeout(val) {
        this._bidderTimeout = val;
      },

      // domain where prebid is running for cross domain iframe communication
      _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,

      get publisherDomain() {
        return this._publisherDomain;
      },

      set publisherDomain(val) {
        this._publisherDomain = val;
      },

      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,

      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if (_typeof(val) === 'object') {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            utils.logMessage('Using custom price granularity');
          }
        }
      },

      get priceGranularity() {
        return this._priceGranularity;
      },

      _customPriceBucket: {},

      get customPriceBucket() {
        return this._customPriceBucket;
      },

      _mediaTypePriceGranularity: {},

      get mediaTypePriceGranularity() {
        return this._mediaTypePriceGranularity;
      },

      set mediaTypePriceGranularity(val) {
        var _this = this;

        this._mediaTypePriceGranularity = Object.keys(val).reduce(function (aggregate, item) {
          if (validatePriceGranularity(val[item])) {
            if (typeof val === 'string') {
              aggregate[item] = hasGranularity(val[item]) ? val[item] : _this._priceGranularity;
            } else if (_typeof(val) === 'object') {
              aggregate[item] = val[item];
              utils.logMessage("Using custom price granularity for ".concat(item));
            }
          } else {
            utils.logWarn("Invalid price granularity for media type: ".concat(item));
          }

          return aggregate;
        }, {});
      },

      _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,

      get enableSendAllBids() {
        return this._sendAllBids;
      },

      set enableSendAllBids(val) {
        this._sendAllBids = val;
      },

      _useBidCache: DEFAULT_BID_CACHE,

      get useBidCache() {
        return this._useBidCache;
      },

      set useBidCache(val) {
        this._useBidCache = val;
      },

      _bidderSequence: DEFAULT_BIDDER_SEQUENCE,

      get bidderSequence() {
        return this._bidderSequence;
      },

      set bidderSequence(val) {
        if (VALID_ORDERS[val]) {
          this._bidderSequence = val;
        } else {
          utils.logWarn("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
        }
      },

      // timeout buffer to adjust for bidder CDN latency
      _timeoutBuffer: DEFAULT_TIMEOUTBUFFER,

      get timeoutBuffer() {
        return this._timeoutBuffer;
      },

      set timeoutBuffer(val) {
        this._timeoutBuffer = val;
      },

      _disableAjaxTimeout: DEFAULT_DISABLE_AJAX_TIMEOUT,

      get disableAjaxTimeout() {
        return this._disableAjaxTimeout;
      },

      set disableAjaxTimeout(val) {
        this._disableAjaxTimeout = val;
      }

    };

    if (config) {
      callSubscribers(Object.keys(config).reduce(function (memo, topic) {
        if (config[topic] !== newConfig[topic]) {
          memo[topic] = newConfig[topic] || {};
        }

        return memo;
      }, {}));
    }

    config = newConfig;

    function hasGranularity(val) {
      return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find___default()(Object.keys(GRANULARITY_OPTIONS), function (option) {
        return val === GRANULARITY_OPTIONS[option];
      });
    }

    function validatePriceGranularity(val) {
      if (!val) {
        utils.logError('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }

      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          utils.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if (_typeof(val) === 'object') {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__cpmBucketManager__["a" /* isValidPriceConfig */])(val)) {
          utils.logError('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }

      return true;
    }
  }
  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */


  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? utils.deepAccess(config, option) : config;
    }

    return subscribe.apply(void 0, arguments);
  }
  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */


  var setConfig = Object(__WEBPACK_IMPORTED_MODULE_3__hook__["a" /* hook */])('async', function setConfig(options) {
    if (_typeof(options) !== 'object') {
      utils.logError('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach(function (topic) {
      var option = options[topic];

      if (_typeof(defaults[topic]) === 'object' && _typeof(option) === 'object') {
        option = _extends({}, defaults[topic], option);
      }

      topicalConfig[topic] = config[topic] = option;
    });
    callSubscribers(topicalConfig);
  });
  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */

  function setDefaults(options) {
    if (_typeof(defaults) !== 'object') {
      utils.logError('defaults must be an object');
      return;
    }

    _extends(defaults, options); // Add default values to config as well


    _extends(config, options);
  }
  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */


  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      utils.logError('listener must be a function');
      return;
    }

    listeners.push({
      topic: topic,
      callback: callback
    }); // save and call this function to remove the listener

    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }
  /*
   * Calls listeners that were added by the `subscribe` function
   */


  function callSubscribers(options) {
    var TOPICS = Object.keys(options); // call subscribers of a specific topic, passing only that configuration

    listeners.filter(function (listener) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes___default()(TOPICS, listener.topic);
    }).forEach(function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    }); // call subscribers that didn't give a topic, passing everything that was set

    listeners.filter(function (listener) {
      return listener.topic === ALL_TOPICS;
    }).forEach(function (listener) {
      return listener.callback(options);
    });
  }

  resetConfig();
  return {
    getConfig: getConfig,
    setConfig: setConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig
  };
}
var config = newConfig();

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPriceBucketString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isValidPriceConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find__);


var utils = __webpack_require__(0);

var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 3,
    'increment': 0.01
  }, {
    'min': 3,
    'max': 8,
    'increment': 0.05
  }, {
    'min': 8,
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.05
  }, {
    'min': 5,
    'max': 10,
    'increment': 0.1
  }, {
    'min': 10,
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cpmFloat = parseFloat(cpm);

  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';

  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }

  var cap = config.buckets.reduce(function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }

    return curr;
  }, {
    'max': 0
  });
  var bucket = __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find___default()(config.buckets, function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;

      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }

      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucket.min * granularityMultiplier) {
      return bucket;
    }
  });

  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket, granularityMultiplier);
  }

  return cpmStr;
}

function isValidPriceConfig(config) {
  if (utils.isEmpty(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }

  var isValid = true;
  config.buckets.forEach(function (bucket) {
    if (typeof bucket.min === 'undefined' || !bucket.max || !bucket.increment) {
      isValid = false;
    }
  });
  return isValid;
}

function getCpmTarget(cpm, bucket, granularityMultiplier) {
  var precision = typeof bucket.precision !== 'undefined' ? bucket.precision : _defaultPrecision;
  var increment = bucket.increment * granularityMultiplier;
  var bucketMin = bucket.min * granularityMultiplier; // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.

  var pow = Math.pow(10, precision + 2);
  var cpmToFloor = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget = Math.floor(cpmToFloor) * increment + bucketMin; // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(10);
var $find = __webpack_require__(35)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(18)(KEY);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(28);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(11);
var IObject = __webpack_require__(13);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(16);
var asc = __webpack_require__(37);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(38);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(39);
var SPECIES = __webpack_require__(40)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(14);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(43);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(42) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(10);
var $includes = __webpack_require__(45)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(18)('includes');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(46);
var toLength = __webpack_require__(16);
var toAbsoluteIndex = __webpack_require__(47);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(13);
var defined = __webpack_require__(15);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hook; });
/* unused harmony export getHook */
/* unused harmony export setupBeforeHookFnOnce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fun_hooks__);

var hook = __WEBPACK_IMPORTED_MODULE_0_fun_hooks___default()({
  ready: __WEBPACK_IMPORTED_MODULE_0_fun_hooks___default.a.SYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks___default.a.ASYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks___default.a.QUEUE
});
var getHook = hook.get;
function setupBeforeHookFnOnce(baseFn, hookFn) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
  var result = baseFn.getHooks({
    hook: hookFn
  });

  if (result.length === 0) {
    baseFn.before(hookFn, priority);
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

create.SYNC = 1;
create.ASYNC = 2;
create.QUEUE = 4;

var packageName = "fun-hooks";

var hasProxy = typeof Proxy === "function";

var defaults = Object.freeze({
  useProxy: hasProxy,
  ready: 0
});

var baseObj = Object.getPrototypeOf({});

// detect incorrectly implemented reduce and if found use polyfill
// https://github.com/prebid/Prebid.js/issues/3576
// polyfill from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var reduce =
  [1]
    .reduce(function(a, b, c) {
      return [a, b, c];
    }, 2)
    .toString() === "2,1,0"
    ? Array.prototype.reduce
    : function(callback, initial) {
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (initial) {
          value = initial;
        } else {
          while (k < len && !(k in o)) {
            k++;
          }
          value = o[k++];
        }
        while (k < len) {
          if (k in o) {
            value = callback(value, o[k], k, o);
          }
          k++;
        }
        return value;
      };

// detect incorrectly implemented bind and if found use polyfill
// https://github.com/snapwich/fun-hooks/issues/1
var bind =
  function(a, b) {
    return b;
  }.bind(null, 1, 4)() === 4
    ? Function.prototype.bind
    : function(bind) {
        var self = this;
        var args = rest(arguments, 1);
        return function() {
          return self.apply(bind, args.concat(rest(arguments)));
        };
      };

function assign(target) {
  return reduce.call(
    rest(arguments, 1),
    function(target, obj) {
      if (obj) {
        Object.keys(obj).forEach(function(prop) {
          target[prop] = obj[prop];
        });
      }
      return target;
    },
    target
  );
}

function rest(args, skip) {
  return Array.prototype.slice.call(args, skip);
}

function runAll(queue) {
  var queued;
  // eslint-disable-next-line no-cond-assign
  while ((queued = queue.shift())) {
    queued();
  }
}

function create(config) {
  var hooks = {};
  var postReady = [];

  config = assign({}, defaults, config);

  function dispatch(arg1, arg2) {
    if (typeof arg1 === "function") {
      return hookFn.call(null, "sync", arg1, arg2);
    } else if (typeof arg1 === "string" && typeof arg2 === "function") {
      return hookFn.apply(null, arguments);
    } else if (typeof arg1 === "object") {
      return hookObj.apply(null, arguments);
    }
  }

  var ready;
  if (config.ready) {
    dispatch.ready = function() {
      ready = true;
      runAll(postReady);
    };
  } else {
    ready = true;
  }

  function hookObj(obj, props, objName) {
    var walk = true;
    if (typeof props === "undefined") {
      props = Object.getOwnPropertyNames(obj);
      walk = false;
    }
    var objHooks = {};
    var doNotHook = ["constructor"];
    do {
      props = props.filter(function(prop) {
        return (
          typeof obj[prop] === "function" &&
          !(doNotHook.indexOf(prop) !== -1) &&
          !prop.match(/^_/)
        );
      });
      props.forEach(function(prop) {
        var parts = prop.split(":");
        var name = parts[0];
        var type = parts[1] || "sync";
        if (!objHooks[name]) {
          var fn = obj[name];
          objHooks[name] = obj[name] = hookFn(
            type,
            fn,
            objName ? [objName, name] : undefined
          );
        }
      });
      obj = Object.getPrototypeOf(obj);
    } while (walk && obj !== baseObj);
    return objHooks;
  }

  /**
   * Navigates a string path to return a hookable function.  If not found, creates a placeholder for hooks.
   * @param {(Array<string> | string)} path
   */
  function get(path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return reduce.call(
      parts,
      function(memo, part, i) {
        var item = memo[part];
        var installed = false;
        if (item) {
          return item;
        } else if (i === parts.length - 1) {
          if (!ready) {
            postReady.push(function() {
              if (!installed) {
                // eslint-disable-next-line no-console
                console.warn(
                  packageName +
                    ": referenced '" +
                    path +
                    "' but it was never created"
                );
              }
            });
          }
          return (memo[part] = newHookable(function(fn) {
            memo[part] = fn;
            installed = true;
          }));
        }
        return (memo[part] = {});
      },
      hooks
    );
  }

  function newHookable(onInstall) {
    var before = [];
    var after = [];
    var generateTrap = function() {};

    return {
      __funHook: {
        install: function(type, fn, generate) {
          this.type = type;
          this.fn = fn;
          generateTrap = generate;
          generate(before, after);
          onInstall && onInstall(fn);
        }
      },
      before: function(hook, priority) {
        return add.call(this, before, "before", hook, priority);
      },
      after: function(hook, priority) {
        return add.call(this, after, "after", hook, priority);
      },
      getHooks: function(match) {
        var hooks = before.concat(after);
        if (typeof match === "object") {
          hooks = hooks.filter(function(entry) {
            return Object.keys(match).every(function(prop) {
              return entry[prop] === match[prop];
            });
          });
        }
        return assign(hooks, {
          remove: function() {
            hooks.forEach(function(entry) {
              entry.remove();
            });
            return this;
          }
        });
      },
      removeAll: function() {
        return this.getHooks().remove();
      }
    };

    function add(store, type, hook, priority) {
      var entry = {
        hook: hook,
        type: type,
        priority: priority || 10,
        remove: function() {
          var index = store.indexOf(entry);
          if (index !== -1) {
            store.splice(index, 1);
            generateTrap(before, after);
          }
        }
      };
      store.push(entry);
      store.sort(function(a, b) {
        return b.priority - a.priority;
      });
      generateTrap(before, after);
      return this;
    }
  }

  function hookFn(type, fn, name) {
    if (fn.__funHook) {
      if (fn.__funHook.type !== type) {
        throw packageName + ": recreated hookable with different type";
      } else {
        return fn.__funHook.fn;
      }
    }

    var hookable = name ? get(name) : newHookable();

    var trap;
    var hookedFn;
    var handlers = {
      get: function(target, prop) {
        return hookable[prop] || Reflect.get.apply(Reflect, arguments);
      }
    };

    if (!ready) {
      postReady.push(setTrap);
    }

    if (config.useProxy) {
      hookedFn = new Proxy(fn, handlers);
    } else {
      hookedFn = function() {
        return handlers.apply
          ? handlers.apply(fn, this, rest(arguments))
          : fn.apply(this, arguments);
      };
      assign(hookedFn, hookable);
    }

    hookable.__funHook.install(type, hookedFn, generateTrap);

    return hookedFn;

    function generateTrap(before, after) {
      if (before.length || after.length) {
        var code;
        if (type === "sync") {
          var beforeCode =
            "r=t.apply(h," + (before.length ? "arguments" : "g") + ")";
          var afterCode;
          if (after.length) {
            afterCode = chainHooks(after, "a", "n(function extract(s){r=s},e)");
          }
          if (before.length) {
            beforeCode = chainHooks(
              before,
              "b",
              "n(function extract(){" + beforeCode + ";" + afterCode + "},e)"
            );
            afterCode = "";
          }
          code = [
            "var r,e={bail:function(a){r=a}}",
            beforeCode,
            afterCode,
            "return r"
          ].join(";");
        } else if (type === "async") {
          code =
            "t.apply(h," +
            (before.length
              ? "Array.prototype.slice.call(arguments)" // if we're wrapped in partial, extract arguments
              : "g") + // otherwise, we can just use passed in arguments
            ".concat(" +
            chainHooks(after, "a", "z?n(z,e):[]") +
            "))";
          if (before.length) {
            code = "n(function partial(){" + code + "},e)";
          }
          code = [
            "var z",
            'typeof g[g.length-1]==="function"&&(z=i.call(g.pop(),null))',
            "var e={bail:z}",
            chainHooks(before, "b", code)
          ].join(";");
        }
        trap = bind.call(
          new Function("i,b,a,n,t,h,g", code),
          null,
          bind,
          before,
          after,
          Object.assign || assign
        );
      } else {
        trap = undefined;
      }
      setTrap();

      function chainHooks(hooks, name, code) {
        for (var i = hooks.length; i-- > 0; ) {
          if (i === 0 && !(type === "async" && name === "a")) {
            code =
              name +
              "[" +
              i +
              "].hook.apply(h,[" +
              code +
              (name === "b" ? "].concat(g))" : ",r])");
          } else {
            code = "i.call(" + name + "[" + i + "].hook, h," + code + ")";
            if (!(type === "async" && name === "a" && i === 0)) {
              code = "n(" + code + ",e)";
            }
          }
        }
        return code;
      }
    }

    function setTrap() {
      if (
        ready ||
        (type === "sync" && !(config.ready & create.SYNC)) ||
        (type === "async" && !(config.ready & create.ASYNC))
      ) {
        handlers.apply = trap;
      } else if (type === "sync" || !(config.ready & create.QUEUE)) {
        handlers.apply = function() {
          throw packageName + ": hooked function not ready";
        };
      } else {
        handlers.apply = function() {
          var args = arguments;
          postReady.push(function() {
            hookedFn.apply(args[1], args[2]);
          });
        };
      }
    }
  }

  dispatch.get = get;
  return dispatch;
}

module.exports = create;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseQS */
/* unused harmony export formatQS */
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* unused harmony export format */
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce(function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }

    return acc;
  }, {});
}
function formatQS(query) {
  return Object.keys(query).map(function (k) {
    return Array.isArray(query[k]) ? query[k].map(function (v) {
      return "".concat(k, "[]=").concat(v);
    }).join('&') : "".concat(k, "=").concat(query[k]);
  }).join('&');
}
function parse(url, options) {
  var parsed = document.createElement('a');

  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  } // in window.location 'search' is string, not object


  var qsAsString = options && 'decodeSearchAsString' in options && options.decodeSearchAsString;
  return {
    href: parsed.href,
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: qsAsString ? parsed.search : parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}
function format(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ":".concat(obj.port) : '')) + (obj.pathname || '') + (obj.search ? "?".concat(formatQS(obj.search || '')) : '') + (obj.hash ? "#".concat(obj.hash) : '');
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config__ = __webpack_require__(20);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var BIDDER_CODE = 'pubmatic';
var ENDPOINT = '//hbopenbid.pubmatic.com/translator?source=prebid-client';
var USYNCURL = '//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=';
var DEFAULT_CURRENCY = 'USD';
var AUCTION_TYPE = 1;
var PUBMATIC_DIGITRUST_KEY = 'nFIn8aLzbd';
var UNDEFINED = undefined;
var DEFAULT_WIDTH = 0;
var DEFAULT_HEIGHT = 0;
var PREBID_NATIVE_HELP_LINK = 'http://prebid.org/dev-docs/show-native-ads.html';
var CUSTOM_PARAMS = {
  'kadpageurl': '',
  // Custom page url
  'gender': '',
  // User gender
  'yob': '',
  // User year of birth
  'lat': '',
  // User location - Latitude
  'lon': '',
  // User Location - Longitude
  'wiid': '',
  // OpenWrap Wrapper Impression ID
  'profId': '',
  // OpenWrap Legacy: Profile ID
  'verId': '' // OpenWrap Legacy: version ID

};
var DATA_TYPES = {
  'NUMBER': 'number',
  'STRING': 'string',
  'BOOLEAN': 'boolean',
  'ARRAY': 'array',
  'OBJECT': 'object'
};
var VIDEO_CUSTOM_PARAMS = {
  'mimes': DATA_TYPES.ARRAY,
  'minduration': DATA_TYPES.NUMBER,
  'maxduration': DATA_TYPES.NUMBER,
  'startdelay': DATA_TYPES.NUMBER,
  'playbackmethod': DATA_TYPES.ARRAY,
  'api': DATA_TYPES.ARRAY,
  'protocols': DATA_TYPES.ARRAY,
  'w': DATA_TYPES.NUMBER,
  'h': DATA_TYPES.NUMBER,
  'battr': DATA_TYPES.ARRAY,
  'linearity': DATA_TYPES.NUMBER,
  'placement': DATA_TYPES.NUMBER,
  'minbitrate': DATA_TYPES.NUMBER,
  'maxbitrate': DATA_TYPES.NUMBER
};
var NATIVE_ASSET_ID = {
  'TITLE': 1,
  'IMAGE': 2,
  'ICON': 3,
  'SPONSOREDBY': 4,
  'BODY': 5,
  'CLICKURL': 6,
  'VIDEO': 7,
  'EXT': 8,
  'DATA': 9,
  'LOGO': 10,
  'SPONSORED': 11,
  'DESC': 12,
  'RATING': 13,
  'LIKES': 14,
  'DOWNLOADS': 15,
  'PRICE': 16,
  'SALEPRICE': 17,
  'PHONE': 18,
  'ADDRESS': 19,
  'DESC2': 20,
  'DISPLAYURL': 21,
  'CTA': 22
};
var NATIVE_ASSET_REVERSE_ID = {
  4: 'sponsoredBy',
  5: 'body',
  6: 'clickUrl',
  7: 'video',
  8: 'ext',
  9: 'data',
  10: 'logo',
  11: 'sponsored',
  12: 'desc',
  13: 'rating',
  14: 'likes',
  15: 'downloads',
  16: 'price',
  17: 'saleprice',
  18: 'phone',
  19: 'address',
  20: 'desc2',
  21: 'displayurl',
  22: 'cta'
};
var NATIVE_ASSET_KEY = {
  'TITLE': 'title',
  'IMAGE': 'image',
  'ICON': 'icon',
  'SPONSOREDBY': 'sponsoredBy',
  'BODY': 'body',
  'VIDEO': 'video',
  'EXT': 'ext',
  'DATA': 'data',
  'LOGO': 'logo',
  'DESC': 'desc',
  'RATING': 'rating',
  'LIKES': 'likes',
  'DOWNLOADS': 'downloads',
  'PRICE': 'price',
  'SALEPRICE': 'saleprice',
  'PHONE': 'phone',
  'ADDRESS': 'address',
  'DESC2': 'desc2',
  'DISPLAYURL': 'displayurl',
  'CTA': 'cta'
};
var NATIVE_ASSET_IMAGE_TYPE = {
  'ICON': 1,
  'LOGO': 2,
  'IMAGE': 3
};
var NATIVE_ASSET_DATA_TYPE = {
  'SPONSORED': 1,
  'DESC': 2,
  'RATING': 3,
  'LIKES': 4,
  'DOWNLOADS': 5,
  'PRICE': 6,
  'SALEPRICE': 7,
  'PHONE': 8,
  'ADDRESS': 9,
  'DESC2': 10,
  'DISPLAYURL': 11,
  'CTA': 12 // check if title, image can be added with mandatory field default values

};
var NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS = [{
  id: NATIVE_ASSET_ID.SPONSOREDBY,
  required: true,
  data: {
    type: 1
  }
}, {
  id: NATIVE_ASSET_ID.TITLE,
  required: true
}, {
  id: NATIVE_ASSET_ID.IMAGE,
  required: true
}];
var NET_REVENUE = false;
var dealChannelValues = {
  1: 'PMP',
  5: 'PREF',
  6: 'PMPG'
};
var publisherId = 0;
var isInvalidNativeRequest = false;

function _getDomainFromURL(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _parseSlotParam(paramName, paramValue) {
  if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](paramValue)) {
    paramValue && __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Ignoring param key: ' + paramName + ', expects string-value, found ' + _typeof(paramValue));
    return UNDEFINED;
  }

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map(function (id) {
        return id.trim();
      }).join();

    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;

    case 'yob':
      return parseInt(paramValue) || UNDEFINED;

    default:
      return paramValue;
  }
}

function _cleanSlot(slotName) {
  if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](slotName)) {
    return slotName.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }

  return '';
}

function _parseAdSlot(bid) {
  bid.params.adUnit = '';
  bid.params.adUnitIndex = '0';
  bid.params.width = 0;
  bid.params.height = 0;
  var sizesArrayExists = bid.hasOwnProperty('sizes') && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.sizes) && bid.sizes.length >= 1;
  bid.params.adSlot = _cleanSlot(bid.params.adSlot);
  var slot = bid.params.adSlot;
  var splits = slot.split(':');
  slot = splits[0];

  if (splits.length == 2) {
    bid.params.adUnitIndex = splits[1];
  } // check if size is mentioned in sizes array. in that case do not check for @ in adslot


  splits = slot.split('@');

  if (splits.length != 2) {
    if (!sizesArrayExists) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('AdSlot Error: adSlot not in required format');
      return;
    }
  }

  bid.params.adUnit = splits[0];

  if (splits.length > 1) {
    // i.e size is specified in adslot, so consider that and ignore sizes array
    splits = splits[1].split('x');

    if (splits.length != 2) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('AdSlot Error: adSlot not in required format');
      return;
    }

    bid.params.width = parseInt(splits[0]);
    bid.params.height = parseInt(splits[1]);
    delete bid.sizes;
  } else if (sizesArrayExists) {
    bid.params.width = parseInt(bid.sizes[0][0]);
    bid.params.height = parseInt(bid.sizes[0][1]);
  }
}

function _initConf(refererInfo) {
  var conf = {};
  conf.pageURL = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getTopWindowUrl"]();

  if (refererInfo && refererInfo.referer) {
    conf.refURL = refererInfo.referer;
  } else {
    conf.refURL = '';
  }

  return conf;
}

function _handleCustomParams(params, conf) {
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;

  for (key in CUSTOM_PARAMS) {
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key];

      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (_typeof(entry) === 'object') {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](value)) {
          conf[key] = value;
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Ignoring param : ' + key + ' with value : ' + CUSTOM_PARAMS[key] + ', expects string-value, found ' + _typeof(value));
        }
      }
    }
  }

  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [DEFAULT_CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
} // similar functionality as parseSlotParam. Check if the 2 functions can be clubbed.


function _checkParamDataType(key, value, datatype) {
  var errMsg = 'PubMatic: Ignoring param key: ' + key + ', expects ' + datatype + ', found ' + _typeof(value);

  switch (datatype) {
    case DATA_TYPES.BOOLEAN:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isBoolean"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.NUMBER:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.STRING:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;

    case DATA_TYPES.ARRAY:
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](value)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](errMsg);
        return UNDEFINED;
      }

      return value;
  }
}

function _createNativeRequest(params) {
  var nativeRequestObject = {
    assets: []
  };

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var assetObj = {};

      if (!(nativeRequestObject.assets && nativeRequestObject.assets.length > 0 && nativeRequestObject.assets.hasOwnProperty(key))) {
        switch (key) {
          case NATIVE_ASSET_KEY.TITLE:
            if (params[key].len || params[key].length) {
              assetObj = {
                id: NATIVE_ASSET_ID.TITLE,
                required: params[key].required ? 1 : 0,
                title: {
                  len: params[key].len || params[key].length,
                  ext: params[key].ext
                }
              };
            } else {
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Title Length is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSET_KEY.IMAGE:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSET_ID.IMAGE,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.IMAGE,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined),
                  wmin: params[key].wmin || params[key].minimumWidth || (params[key].minsizes ? params[key].minsizes[0] : undefined),
                  hmin: params[key].hmin || params[key].minimumHeight || (params[key].minsizes ? params[key].minsizes[1] : undefined),
                  mimes: params[key].mimes,
                  ext: params[key].ext
                }
              };
            } else {
              // Log Warn
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Image sizes is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSET_KEY.ICON:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSET_ID.ICON,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.ICON,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined)
                }
              };
            } else {
              // Log Warn
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Icon sizes is required for native ad: ' + JSON.stringify(params));
            }

            ;
            break;

          case NATIVE_ASSET_KEY.SPONSOREDBY:
            assetObj = {
              id: NATIVE_ASSET_ID.SPONSOREDBY,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.SPONSORED,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.BODY:
            assetObj = {
              id: NATIVE_ASSET_ID.BODY,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DESC,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.VIDEO:
            assetObj = {
              id: NATIVE_ASSET_ID.VIDEO,
              required: params[key].required ? 1 : 0,
              video: {
                minduration: params[key].minduration,
                maxduration: params[key].maxduration,
                protocols: params[key].protocols,
                mimes: params[key].mimes,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.EXT:
            assetObj = {
              id: NATIVE_ASSET_ID.EXT,
              required: params[key].required ? 1 : 0
            };
            break;

          case NATIVE_ASSET_KEY.LOGO:
            assetObj = {
              id: NATIVE_ASSET_ID.LOGO,
              required: params[key].required ? 1 : 0,
              img: {
                type: NATIVE_ASSET_IMAGE_TYPE.LOGO,
                w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined)
              }
            };
            break;

          case NATIVE_ASSET_KEY.RATING:
            assetObj = {
              id: NATIVE_ASSET_ID.RATING,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.RATING,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.LIKES:
            assetObj = {
              id: NATIVE_ASSET_ID.LIKES,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.LIKES,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DOWNLOADS:
            assetObj = {
              id: NATIVE_ASSET_ID.DOWNLOADS,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DOWNLOADS,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.PRICE:
            assetObj = {
              id: NATIVE_ASSET_ID.PRICE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.PRICE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.SALEPRICE:
            assetObj = {
              id: NATIVE_ASSET_ID.SALEPRICE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.SALEPRICE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.PHONE:
            assetObj = {
              id: NATIVE_ASSET_ID.PHONE,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.PHONE,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.ADDRESS:
            assetObj = {
              id: NATIVE_ASSET_ID.ADDRESS,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.ADDRESS,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DESC2:
            assetObj = {
              id: NATIVE_ASSET_ID.DESC2,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DESC2,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.DISPLAYURL:
            assetObj = {
              id: NATIVE_ASSET_ID.DISPLAYURL,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.DISPLAYURL,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSET_KEY.CTA:
            assetObj = {
              id: NATIVE_ASSET_ID.CTA,
              required: params[key].required ? 1 : 0,
              data: {
                type: NATIVE_ASSET_DATA_TYPE.CTA,
                len: params[key].len,
                ext: params[key].ext
              }
            };
            break;
        }
      }
    }

    if (assetObj && assetObj.id) {
      nativeRequestObject.assets[nativeRequestObject.assets.length] = assetObj;
    }
  }

  ; // for native image adtype prebid has to have few required assests i.e. title,sponsoredBy, image
  // if any of these are missing from the request then request will not be sent

  var requiredAssetCount = NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.length;
  var presentrequiredAssetCount = 0;
  NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.forEach(function (ele) {
    var lengthOfExistingAssets = nativeRequestObject.assets.length;

    for (var i = 0; i < lengthOfExistingAssets; i++) {
      if (ele.id == nativeRequestObject.assets[i].id) {
        presentrequiredAssetCount++;
        break;
      }
    }
  });

  if (requiredAssetCount == presentrequiredAssetCount) {
    isInvalidNativeRequest = false;
  } else {
    isInvalidNativeRequest = true;
  }

  return nativeRequestObject;
}

function _createImpressionObject(bid, conf) {
  var impObj = {};
  var bannerObj = {};
  var videoObj = {};
  var sizes = bid.hasOwnProperty('sizes') ? bid.sizes : [];
  impObj = {
    id: bid.bidId,
    tagid: bid.params.adUnit,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: window.location.protocol === 'https:' ? 1 : 0,
    ext: {
      pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
    },
    bidfloorcur: bid.params.currency ? _parseSlotParam('currency', bid.params.currency) : DEFAULT_CURRENCY
  };

  if (bid.params.hasOwnProperty('video')) {
    var videoData = bid.params.video;

    for (var key in VIDEO_CUSTOM_PARAMS) {
      if (videoData.hasOwnProperty(key)) {
        videoObj[key] = _checkParamDataType(key, videoData[key], VIDEO_CUSTOM_PARAMS[key]);
      }
    } // read playersize and assign to h and w.


    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0][0];
      videoObj.h = bid.mediaTypes.video.playerSize[0][1];
    } else if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0];
      videoObj.h = bid.mediaTypes.video.playerSize[1];
    }

    if (bid.params.video.hasOwnProperty('skippable')) {
      videoObj.ext = {
        'video_skippable': bid.params.video.skippable ? 1 : 0
      };
    }

    impObj.video = videoObj;
  } else if (bid.nativeParams) {
    impObj.native = {};
    impObj.native['request'] = JSON.stringify(_createNativeRequest(bid.nativeParams));
  } else {
    bannerObj = {
      pos: 0,
      w: bid.params.width,
      h: bid.params.height,
      topframe: __WEBPACK_IMPORTED_MODULE_0__src_utils__["inIframe"]() ? 0 : 1
    };

    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](sizes) && sizes.length > 1) {
      sizes = sizes.splice(1, sizes.length - 1);
      var format = [];
      sizes.forEach(function (size) {
        format.push({
          w: size[0],
          h: size[1]
        });
      });
      bannerObj.format = format;
    }

    impObj.banner = bannerObj;
  }

  if (isInvalidNativeRequest && impObj.hasOwnProperty('native')) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Call to OpenBid will not be sent for  native ad unit as it does not contain required valid native params.' + JSON.stringify(bid) + ' Refer:' + PREBID_NATIVE_HELP_LINK);
    return;
  }

  return impObj;
}

function _getDigiTrustObject(key) {
  function getDigiTrustId() {
    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_3__src_config__["a" /* config */].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: key
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return null;
  }

  return digiTrustId;
}

function _handleDigitrustId(eids) {
  var digiTrustId = _getDigiTrustObject(PUBMATIC_DIGITRUST_KEY);

  if (digiTrustId !== null) {
    eids.push({
      'source': 'digitru.st',
      'uids': [{
        'id': digiTrustId.id || '',
        'atype': 1,
        'ext': {
          'keyv': parseInt(digiTrustId.keyv) || 0
        }
      }]
    });
  }
}

function _handleTTDId(eids) {
  var adsrvrOrgId = __WEBPACK_IMPORTED_MODULE_3__src_config__["a" /* config */].getConfig('adsrvrOrgId');

  if (adsrvrOrgId && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](adsrvrOrgId.TDID)) {
    eids.push({
      'source': 'adserver.org',
      'uids': [{
        'id': adsrvrOrgId.TDID,
        'atype': 1,
        'ext': {
          'rtiPartner': 'TDID'
        }
      }]
    });
  }
}

function _handleEids(payload) {
  var eids = [];

  _handleDigitrustId(eids);

  _handleTTDId(eids);

  if (eids.length > 0) {
    payload.user.eids = eids;
  }
}

function _parseNativeResponse(bid, newBid) {
  newBid.native = {};

  if (bid.hasOwnProperty('adm')) {
    var adm = '';

    try {
      adm = JSON.parse(bid.adm.replace(/\\/g, ''));
    } catch (ex) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: Cannot parse native reponse for ad response: ' + newBid.adm);
      return;
    }

    if (adm && adm.native && adm.native.assets && adm.native.assets.length > 0) {
      newBid.mediaType = 'native';

      for (var i = 0, len = adm.native.assets.length; i < len; i++) {
        switch (adm.native.assets[i].id) {
          case NATIVE_ASSET_ID.TITLE:
            newBid.native.title = adm.native.assets[i].title && adm.native.assets[i].title.text;
            break;

          case NATIVE_ASSET_ID.IMAGE:
            newBid.native.image = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSET_ID.ICON:
            newBid.native.icon = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSET_ID.SPONSOREDBY:
          case NATIVE_ASSET_ID.BODY:
          case NATIVE_ASSET_ID.LIKES:
          case NATIVE_ASSET_ID.DOWNLOADS:
          case NATIVE_ASSET_ID.PRICE:
          case NATIVE_ASSET_ID.SALEPRICE:
          case NATIVE_ASSET_ID.PHONE:
          case NATIVE_ASSET_ID.ADDRESS:
          case NATIVE_ASSET_ID.DESC2:
          case NATIVE_ASSET_ID.CTA:
          case NATIVE_ASSET_ID.RATING:
          case NATIVE_ASSET_ID.DISPLAYURL:
            //  Remove Redundant code
            newBid.native[NATIVE_ASSET_REVERSE_ID[adm.native.assets[i].id]] = adm.native.assets[i].data && adm.native.assets[i].data.value;
            break;
        }
      }

      newBid.native.clickUrl = adm.native.link && adm.native.link.url;
      newBid.native.clickTrackers = adm.native.link && adm.native.link.clicktrackers || [];
      newBid.native.impressionTrackers = adm.native.imptrackers || [];
      newBid.native.jstracker = adm.native.jstracker || [];

      if (!newBid.width) {
        newBid.width = DEFAULT_WIDTH;
      }

      if (!newBid.height) {
        newBid.height = DEFAULT_HEIGHT;
      }
    }
  }
}

var spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes__["c" /* NATIVE */]],

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && bid.params) {
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.publisherId)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ' Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      }

      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.adSlot)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      } // video ad validation


      if (bid.params.hasOwnProperty('video')) {
        if (!bid.params.video.hasOwnProperty('mimes') || !__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](bid.params.video.mimes) || bid.params.video.mimes.length === 0) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(bid));
          return false;
        }
      }

      return true;
    }

    return false;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var refererInfo;

    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }

    var conf = _initConf(refererInfo);

    var payload = _createOrtbTemplate(conf);

    var bidCurrency = '';
    var dctr = '';
    var dctrLen;
    var dctrArr = [];
    var bid;
    validBidRequests.forEach(function (originalBid) {
      bid = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepClone"](originalBid);

      _parseAdSlot(bid);

      if (bid.params.hasOwnProperty('video')) {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      } else {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex && bid.params.width && bid.params.height)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      }

      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;

      if (bidCurrency === '') {
        bidCurrency = bid.params.currency || undefined;
      } else if (bid.params.hasOwnProperty('currency') && bidCurrency !== bid.params.currency) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Currency specifier ignored. Only one currency permitted.');
      }

      bid.params.currency = bidCurrency; // check if dctr is added to more than 1 adunit

      if (bid.params.hasOwnProperty('dctr') && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](bid.params.dctr)) {
        dctrArr.push(bid.params.dctr);
      }

      var impObj = _createImpressionObject(bid, conf);

      if (impObj) {
        payload.imp.push(impObj);
      }
    });

    if (payload.imp.length == 0) {
      return;
    }

    payload.site.publisher.id = conf.pubId.trim();
    publisherId = conf.pubId.trim();
    payload.ext.wrapper = {};
    payload.ext.wrapper.profile = parseInt(conf.profId) || UNDEFINED;
    payload.ext.wrapper.version = parseInt(conf.verId) || UNDEFINED;
    payload.ext.wrapper.wiid = conf.wiid || UNDEFINED;
    payload.ext.wrapper.wv = "prebid_prebid_2.4.0";
    payload.ext.wrapper.transactionId = conf.transactionId;
    payload.ext.wrapper.wp = 'pbjs';
    payload.user.gender = conf.gender ? conf.gender.trim() : UNDEFINED;
    payload.user.geo = {}; // Attaching GDPR Consent Params

    if (bidderRequest && bidderRequest.gdprConsent) {
      payload.user.ext = {
        consent: bidderRequest.gdprConsent.consentString
      };
      payload.regs = {
        ext: {
          gdpr: bidderRequest.gdprConsent.gdprApplies ? 1 : 0
        }
      };
    }

    payload.user.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.user.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.user.yob = _parseSlotParam('yob', conf.yob);
    payload.device.geo = {};
    payload.device.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.device.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.site.page = conf.kadpageurl.trim() || payload.site.page.trim();
    payload.site.domain = _getDomainFromURL(payload.site.page); // set dctr value in site.ext, if present in validBidRequests[0], else ignore

    if (dctrArr.length > 0) {
      if (validBidRequests[0].params.hasOwnProperty('dctr')) {
        dctr = validBidRequests[0].params.dctr;

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isStr"](dctr) && dctr.length > 0) {
          var arr = dctr.split('|');
          dctr = '';
          arr.forEach(function (val) {
            dctr += val.length > 0 ? val.trim() + '|' : '';
          });
          dctrLen = dctr.length;

          if (dctr.substring(dctrLen, dctrLen - 1) === '|') {
            dctr = dctr.substring(0, dctrLen - 1);
          }

          payload.site.ext = {
            key_val: dctr.trim()
          };
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': Ignoring param : dctr with value : ' + dctr + ', expects string-value, found empty or non-string value');
        }

        if (dctrArr.length > 1) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits');
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"](BIDDER_CODE + ': dctr value not found in 1st adunit, ignoring values from subsequent adunits');
      }
    }

    _handleEids(payload);

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload)
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} response A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(response, request) {
    var bidResponses = [];
    var respCur = DEFAULT_CURRENCY;

    try {
      if (response.body && response.body.seatbid && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](response.body.seatbid)) {
        // Supporting multiple bid responses for same adSize
        respCur = response.body.cur || respCur;
        response.body.seatbid.forEach(function (seatbidder) {
          seatbidder.bid && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](seatbidder.bid) && seatbidder.bid.forEach(function (bid) {
            var parsedRequest = JSON.parse(request.data);
            var newBid = {
              requestId: bid.impid,
              cpm: (parseFloat(bid.price) || 0).toFixed(2),
              width: bid.w,
              height: bid.h,
              creativeId: bid.crid || bid.id,
              dealId: bid.dealid,
              currency: respCur,
              netRevenue: NET_REVENUE,
              ttl: 300,
              referrer: parsedRequest.site && parsedRequest.site.ref ? parsedRequest.site.ref : '',
              ad: bid.adm
            };

            if (parsedRequest.imp && parsedRequest.imp.length > 0) {
              parsedRequest.imp.forEach(function (req) {
                if (bid.impid === req.id && req.hasOwnProperty('video')) {
                  newBid.mediaType = 'video';
                  newBid.width = bid.hasOwnProperty('w') ? bid.w : req.video.w;
                  newBid.height = bid.hasOwnProperty('h') ? bid.h : req.video.h;
                  newBid.vastXml = bid.adm;
                }

                if (bid.impid === req.id && req.hasOwnProperty('native')) {
                  _parseNativeResponse(bid, newBid);
                }
              });
            }

            if (bid.ext && bid.ext.deal_channel) {
              newBid['dealChannel'] = dealChannelValues[bid.ext.deal_channel] || null;
            }

            bidResponses.push(newBid);
          });
        });
      }
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](error);
    }

    return bidResponses;
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent) {
    var syncurl = USYNCURL + publisherId; // Attaching GDPR Consent Params in UserSync url

    if (gdprConsent) {
      syncurl += '&gdpr=' + (gdprConsent.gdprApplies ? 1 : 0);
      syncurl += '&gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || '');
    }

    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: syncurl
      }];
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PubMatic: Please enable iframe based user sync.');
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils__["convertTypes"]({
      'publisherId': 'string',
      'adSlot': 'string'
    }, params);
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["c" /* registerBidder */])(spec);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Renderer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var BIDDER_CODE = 'spotx';
var URL = '//search.spotxchange.com/openrtb/2.3/dados/';
var ORTB_VERSION = '2.3';
var spec = {
  code: BIDDER_CODE,
  aliases: ['spotx'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["d" /* VIDEO */]],

  /**
   * Determines whether or not the given bid request is valid.
   * From Prebid.js: isBidRequestValid - Verify the the AdUnits.bids, respond with true (valid) or false (invalid).
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && _typeof(bid.params) !== 'object') {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': params is not defined or is incorrect in the bidder settings.');
      return false;
    }

    if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.video')) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': mediaTypes.video is not present in the bidder settings.');
      return false;
    }

    var playerSize = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.video.playerSize');

    if (!playerSize || !__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](playerSize)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': mediaTypes.video.playerSize is not defined in the bidder settings.');
      return false;
    }

    if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('channel_id', bid.params)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': channel_id is not present in bidder params');
      return false;
    }

    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.video.context') == 'outstream' || __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'params.ad_unit') == 'outstream') {
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_function', bid.params)) {
        if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_options', bid.params)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function.');
          return false;
        }

        if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('slot', bid.params.outstream_options)) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](BIDDER_CODE + ': please define parameters slot outstream_options object in the configuration.');
          return false;
        }
      }
    }

    return true;
  },

  /**
   * Make a server request from the list of BidRequests.
   * from Prebid.js: buildRequests - Takes an array of valid bid requests, all of which are guaranteed to have passed the isBidRequestValid() test.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var page = bidderRequest.refererInfo.referer;
    var isPageSecure = !!page.match(/^https:/);
    var siteId = '';
    var spotxRequests = bidRequests.map(function (bid) {
      var channelId = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('channel_id', bid.params);
      var pubcid = null;
      var playerSize = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bid, 'mediaTypes.video.playerSize');
      var contentWidth = playerSize[0][0];
      var contentHeight = playerSize[0][1];
      var secure = isPageSecure || (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('secure', bid.params) ? 1 : 0);
      var ext = {
        sdk_name: 'Prebid 1+',
        versionOrtb: ORTB_VERSION
      };

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('ad_volume', bid.params) != '') {
        ext.ad_volume = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('ad_volume', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('ad_unit', bid.params) != '') {
        ext.ad_unit = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('ad_unit', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_options', bid.params) != '') {
        ext.outstream_options = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_options', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_function', bid.params) != '') {
        ext.outstream_function = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('outstream_function', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('custom', bid.params) != '') {
        ext.custom = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('custom', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('pre_market_bids', bid.params) != '' && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('pre_market_bids', bid.params))) {
        var preMarketBids = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('pre_market_bids', bid.params);
        ext.pre_market_bids = [];

        for (var i in preMarketBids) {
          var preMarketBid = preMarketBids[i];
          var vastStr = '';

          if (preMarketBid['vast_url']) {
            vastStr = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + preMarketBid['vast_url'] + '</VASTAdTagURI></Wrapper></Ad></VAST>';
          } else if (preMarketBid['vast_string']) {
            vastStr = preMarketBid['vast_string'];
          }

          ext.pre_market_bids.push({
            id: preMarketBid['deal_id'],
            seatbid: [{
              bid: [{
                impid: Date.now(),
                dealid: preMarketBid['deal_id'],
                price: preMarketBid['price'],
                adm: vastStr
              }]
            }],
            cur: preMarketBid['currency'],
            ext: {
              event_log: [{}]
            }
          });
        }
      }

      var mimes = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('mimes', bid.params) || ['application/javascript', 'video/mp4', 'video/webm'];
      var spotxReq = {
        id: bid.bidId,
        secure: secure,
        video: {
          w: contentWidth,
          h: contentHeight,
          ext: ext,
          mimes: mimes
        }
      };

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('price_floor', bid.params) != '') {
        spotxReq.bidfloor = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('price_floor', bid.params);
      }

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('start_delay', bid.params) != '') {
        spotxReq.video.startdelay = 0 + Boolean(__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('start_delay', bid.params));
      }

      if (bid.crumbs && bid.crumbs.pubcid) {
        pubcid = bid.crumbs.pubcid;
      }

      var language = navigator.language ? 'language' : 'userLanguage';
      var device = {
        h: screen.height,
        w: screen.width,
        dnt: __WEBPACK_IMPORTED_MODULE_0__src_utils__["getDNT"]() ? 1 : 0,
        language: navigator[language].split('-')[0],
        make: navigator.vendor ? navigator.vendor : '',
        ua: navigator.userAgent
      };
      var requestPayload = {
        id: channelId,
        imp: spotxReq,
        site: {
          id: siteId,
          page: page,
          content: 'content'
        },
        device: device,
        ext: {
          wrap_response: 1
        }
      };

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('number_of_ads', bid.params)) {
        requestPayload['ext']['number_of_ads'] = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('number_of_ads', bid.params);
      }

      var userExt = {}; // Add GDPR flag and consent string

      if (bidderRequest && bidderRequest.gdprConsent) {
        userExt.consent = bidderRequest.gdprConsent.consentString;

        if (typeof bidderRequest.gdprConsent.gdprApplies !== 'undefined') {
          requestPayload.regs = {
            ext: {
              gdpr: bidderRequest.gdprConsent.gdprApplies ? 1 : 0
            }
          };
        }
      } // Add common id if available


      if (pubcid) {
        userExt.fpc = pubcid;
      } // Only add the user object if it's not empty


      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils__["isEmpty"](userExt)) {
        requestPayload.user = {
          ext: userExt
        };
      }

      return {
        method: 'POST',
        url: URL + channelId,
        data: requestPayload,
        bidRequest: bidderRequest
      };
    });
    return spotxRequests;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidderRequest) {
    var bidResponses = [];
    var serverResponseBody = serverResponse.body;

    if (serverResponseBody && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](serverResponseBody.seatbid)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](serverResponseBody.seatbid, function (bids) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](bids.bid, function (spotxBid) {
          var currentBidRequest = {};

          for (var i in bidderRequest.bidRequest.bids) {
            if (spotxBid.impid == bidderRequest.bidRequest.bids[i].bidId) {
              currentBidRequest = bidderRequest.bidRequest.bids[i];
            }
          }
          /**
           * Make sure currency and price are the right ones
           * TODO: what about the pre_market_bid partners sizes?
           */


          __WEBPACK_IMPORTED_MODULE_0__src_utils__["_each"](currentBidRequest.params.pre_market_bids, function (pmb) {
            if (pmb.deal_id == spotxBid.id) {
              spotxBid.price = pmb.price;
              serverResponseBody.cur = pmb.currency;
            }
          });

          var bid = {
            requestId: currentBidRequest.bidId,
            currency: serverResponseBody.cur || 'USD',
            cpm: spotxBid.price,
            creativeId: spotxBid.crid || '',
            ttl: 360,
            netRevenue: true,
            channel_id: serverResponseBody.id,
            cache_key: spotxBid.ext.cache_key,
            vastUrl: '//search.spotxchange.com/ad/vast.html?key=' + spotxBid.ext.cache_key,
            mediaType: __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["d" /* VIDEO */],
            width: spotxBid.w,
            height: spotxBid.h
          };
          var context1 = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'mediaTypes.video.context');
          var context2 = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'params.ad_unit');

          if (context1 == 'outstream' || context2 == 'outstream') {
            var playersize = __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'mediaTypes.video.playerSize');
            var renderer = __WEBPACK_IMPORTED_MODULE_1__src_Renderer__["a" /* Renderer */].install({
              id: 0,
              url: '//',
              config: {
                adText: 'SpotX Outstream Video Ad via Prebid.js',
                player_width: playersize[0][0],
                player_height: playersize[0][1],
                content_page_url: __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](bidderRequest, 'data.site.page'),
                ad_mute: +!!__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'params.ad_mute'),
                hide_skin: +!!__WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'params.hide_skin'),
                outstream_options: __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'params.outstream_options'),
                outstream_function: __WEBPACK_IMPORTED_MODULE_0__src_utils__["deepAccess"](currentBidRequest, 'params.outstream_function')
              }
            });

            try {
              renderer.setRender(outstreamRender);
              renderer.setEventHandlers({
                impression: function impression() {
                  return __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('SpotX outstream video impression event');
                },
                loaded: function loaded() {
                  return __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('SpotX outstream video loaded event');
                },
                ended: function ended() {
                  __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('SpotX outstream renderer video event');
                }
              });
            } catch (err) {
              __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('Prebid Error calling setRender or setEve,tHandlers on renderer', err);
            }

            bid.renderer = renderer;
          }

          bidResponses.push(bid);
        });
      });
    }

    return bidResponses;
  }
};

function createOutstreamScript(bid) {
  var slot = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('slot', bid.renderer.config.outstream_options);
  __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('[SPOTX][renderer] Handle SpotX outstream renderer');
  var script = window.document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//js.spotx.tv/easi/v1/' + bid.channel_id + '.js';
  var dataSpotXParams = {};
  dataSpotXParams['data-spotx_channel_id'] = '' + bid.channel_id;
  dataSpotXParams['data-spotx_vast_url'] = '' + bid.vastUrl;
  dataSpotXParams['data-spotx_content_page_url'] = bid.renderer.config.content_page_url;
  dataSpotXParams['data-spotx_ad_unit'] = 'incontent';
  __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('[SPOTX][renderer] Default beahavior');

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('ad_mute', bid.renderer.config.outstream_options)) {
    dataSpotXParams['data-spotx_ad_mute'] = '0';
  }

  dataSpotXParams['data-spotx_collapse'] = '0';
  dataSpotXParams['data-spotx_autoplay'] = '1';
  dataSpotXParams['data-spotx_blocked_autoplay_override_mode'] = '1';
  dataSpotXParams['data-spotx_video_slot_can_autoplay'] = '1';
  var playersizeAutoAdapt = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('playersize_auto_adapt', bid.renderer.config.outstream_options);

  if (playersizeAutoAdapt && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isBoolean"](playersizeAutoAdapt) && playersizeAutoAdapt === true) {
    if (bid.width && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](bid.width) && bid.height && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isNumber"](bid.height)) {
      var ratio = bid.width / bid.height;
      var slotClientWidth = window.document.getElementById(slot).clientWidth;
      var playerWidth = bid.renderer.config.player_width;
      var playerHeight = bid.renderer.config.player_height;
      var contentWidth = 0;
      var contentHeight = 0;

      if (slotClientWidth < playerWidth) {
        playerWidth = slotClientWidth;
        playerHeight = playerWidth / ratio;
      }

      if (ratio <= 1) {
        contentWidth = Math.round(playerHeight * ratio);
        contentHeight = playerHeight;
      } else {
        contentWidth = playerWidth;
        contentHeight = Math.round(playerWidth / ratio);
      }

      dataSpotXParams['data-spotx_content_width'] = '' + contentWidth;
      dataSpotXParams['data-spotx_content_height'] = '' + contentHeight;
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('[SPOTX][renderer] PlayerSize auto adapt: bid.width and bid.height are incorrect');
    }
  }

  var customOverride = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('custom_override', bid.renderer.config.outstream_options);

  if (customOverride && __WEBPACK_IMPORTED_MODULE_0__src_utils__["isPlainObject"](customOverride)) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('[SPOTX][renderer] Custom beahavior.');

    for (var name in customOverride) {
      if (customOverride.hasOwnProperty(name)) {
        if (name === 'channel_id' || name === 'vast_url' || name === 'content_page_url' || name === 'ad_unit') {
          __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('[SPOTX][renderer] Custom beahavior: following option cannot be overrided: ' + name);
        } else {
          dataSpotXParams['data-spotx_' + name] = customOverride[name];
        }
      }
    }
  }

  for (var key in dataSpotXParams) {
    if (dataSpotXParams.hasOwnProperty(key)) {
      script.setAttribute(key, dataSpotXParams[key]);
    }
  }

  return script;
}

function outstreamRender(bid) {
  var script = createOutstreamScript(bid);

  if (bid.renderer.config.outstream_function != null && typeof bid.renderer.config.outstream_function === 'function') {
    bid.renderer.config.outstream_function(bid, script);
  } else {
    try {
      var inIframe = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('in_iframe', bid.renderer.config.outstream_options);

      if (inIframe && window.document.getElementById(inIframe).nodeName == 'IFRAME') {
        var rawframe = window.document.getElementById(inIframe);
        var framedoc = rawframe.contentDocument;

        if (!framedoc && rawframe.contentWindow) {
          framedoc = rawframe.contentWindow.document;
        }

        framedoc.body.appendChild(script);
      } else {
        var slot = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getBidIdParameter"]('slot', bid.renderer.config.outstream_options);

        if (slot && window.document.getElementById(slot)) {
          window.document.getElementById(slot).appendChild(script);
        } else {
          window.document.getElementsByTagName('head')[0].appendChild(script);
        }
      }
    } catch (err) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"]('[SPOTX][renderer] Error:' + err.message);
    }
  }
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__["c" /* registerBidder */])(spec);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


 // import { config } from '../src/config';

var BIDDER_CODE = 'freewheel-ssp';
var PROTOCOL = getProtocol();
var FREEWHEEL_ADSSETUP = PROTOCOL + '://ads.stickyadstv.com/www/delivery/swfIndex.php';
var MUSTANG_URL = PROTOCOL + '://cdn.stickyadstv.com/mustang/mustang.min.js';
var PRIMETIME_URL = PROTOCOL + '://cdn.stickyadstv.com/prime-time/';
var USER_SYNC_URL = PROTOCOL + '://ads.stickyadstv.com/auto-user-sync';

function getProtocol() {
  if (location.protocol && location.protocol.indexOf('https') === 0) {
    return 'https';
  } else {
    return 'http';
  }
}

function isValidUrl(str) {
  if (!str) {
    return false;
  } // regExp for url validation


  var pattern = /^(https?|ftp|file):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return pattern.test(str);
}

function getBiggerSize(array) {
  var result = [0, 0];

  for (var i = 0; i < array.length; i++) {
    if (array[i][0] * array[i][1] > result[0] * result[1]) {
      result = array[i];
    }
  }

  return result;
}
/*
* read the pricing extension with this format: <Extension type='StickyPricing'><Price currency="EUR">1.0000</Price></Extension>
* @return {object} pricing data in format: {currency: "EUR", price:"1.000"}
*/


function getPricing(xmlNode) {
  var pricingExtNode;
  var princingData = {};
  var extensions = xmlNode.querySelectorAll('Extension'); // Nodelist.forEach is not supported in IE and Edge
  // Workaround given here https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10638731/

  Array.prototype.forEach.call(extensions, function (node) {
    if (node.getAttribute('type') === 'StickyPricing') {
      pricingExtNode = node;
    }
  });

  if (pricingExtNode) {
    var priceNode = pricingExtNode.querySelector('Price');
    princingData = {
      currency: priceNode.getAttribute('currency'),
      price: priceNode.textContent || priceNode.innerText
    };
  } else {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('PREBID - ' + BIDDER_CODE + ': Can\'t get pricing data. Is price awareness enabled?');
  }

  return princingData;
}

function hashcode(inputString) {
  var hash = 0;
  var char;
  if (inputString.length == 0) return hash;

  for (var i = 0; i < inputString.length; i++) {
    char = inputString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
}

function getCreativeId(xmlNode) {
  var creaId = '';
  var adNodes = xmlNode.querySelectorAll('Ad'); // Nodelist.forEach is not supported in IE and Edge
  // Workaround given here https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10638731/

  Array.prototype.forEach.call(adNodes, function (el) {
    creaId += '[' + el.getAttribute('id') + ']';
  });
  return creaId;
}
/**
* returns the top most accessible window
*/


function getTopMostWindow() {
  var res = window;

  try {
    while (top !== res) {
      if (res.parent.location.href.length) {
        res = res.parent;
      }
    }
  } catch (e) {}

  return res;
}

function getComponentId(inputFormat) {
  var component = 'mustang'; // default component id

  if (inputFormat && inputFormat !== 'inbanner') {
    // format identifiers are equals to their component ids.
    component = inputFormat;
  }

  return component;
}

function getAPIName(componentId) {
  componentId = componentId || ''; // remove dash in componentId to get API name

  return componentId.replace('-', '');
}

function formatAdHTML(bid, size) {
  var integrationType = bid.params.format;
  var divHtml = '<div id="freewheelssp_prebid_target" style="width:' + size[0] + 'px;height:' + size[1] + 'px;"></div>';
  var script = '';
  var libUrl = '';

  if (integrationType && integrationType !== 'inbanner') {
    libUrl = PRIMETIME_URL + getComponentId(bid.params.format) + '.min.js';
    script = getOutstreamScript(bid, size);
  } else {
    libUrl = MUSTANG_URL;
    script = getInBannerScript(bid, size);
  }

  return divHtml + '<script type=\'text/javascript\'>' + '(function() {' + '  var st = document.createElement(\'script\'); st.type = \'text/javascript\'; st.async = true;' + '  st.src = \'' + libUrl + '\';' + '  st.onload = function(){' + '    var vastLoader = new window.com.stickyadstv.vast.VastLoader();' + '    var vast = vastLoader.getVast();' + // get the top most accessible window
  '    var topWindow = (function(){var res=window; try{while(top != res){if(res.parent.location.href.length)res=res.parent;}}catch(e){}return res;})();' + // inject the xml in the Vast object as string
  '    vast.setXmlString(topWindow.freewheelssp_cache["' + bid.adUnitCode + '"]);' + // force ad parsing on the given vast xml
  '    vastLoader.parseAds(vast, {' + '      onSuccess: function() {' + script + ' }' + '    });' + '  };' + '  document.head.appendChild(st);' + '})();' + '</script>';
}

var getInBannerScript = function getInBannerScript(bid, size) {
  return 'var config = {' + '      preloadedVast:vast,' + '      autoPlay:true' + '    };' + '    var ad = new window.com.stickyadstv.vpaid.Ad(document.getElementById("freewheelssp_prebid_target"),config);' + '    (new window.com.stickyadstv.tools.ASLoader(' + bid.params.zoneId + ', \'' + getComponentId(bid.params.format) + '\')).registerEvents(ad);' + '    ad.initAd(' + size[0] + ',' + size[1] + ',"",0,"","");';
};

var getOutstreamScript = function getOutstreamScript(bid) {
  var config = bid.params; // default placement if no placement is set

  if (!config.hasOwnProperty('domId') && !config.hasOwnProperty('auto') && !config.hasOwnProperty('p') && !config.hasOwnProperty('article')) {
    if (config.format === 'intext-roll') {
      config.iframeMode = 'dfp';
    } else {
      config.domId = 'freewheelssp_prebid_target';
    }
  }

  var script = 'var config = {' + '  preloadedVast:vast,' + '  ASLoader:new window.com.stickyadstv.tools.ASLoader(' + bid.params.zoneId + ', \'' + getComponentId(bid.params.format) + '\')';

  for (var key in config) {
    // dont' send format parameter
    // neither zone nor vastUrlParams value as Vast is already loaded
    if (config.hasOwnProperty(key) && key !== 'format' && key !== 'zone' && key !== 'zoneId' && key !== 'vastUrlParams') {
      script += ',' + key + ':"' + config[key] + '"';
    }
  }

  script += '};' + 'window.com.stickyadstv.' + getAPIName(bid.params.format) + '.start(config);';
  return script;
};

var spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: ['banner', 'video'],
  aliases: ['stickyadstv'],
  //  former name for freewheel-ssp

  /**
  * Determines whether or not the given bid request is valid.
  *
  * @param {object} bid The bid to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!bid.params.zoneId;
  },

  /**
  * Make a server request from the list of BidRequests.
  *
  * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
  * @return ServerRequest Info describing the request to the server.
  */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    // var currency = config.getConfig(currency);
    var currentBidRequest = bidRequests[0];

    if (bidRequests.length > 1) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logMessage"]('Prebid.JS - freewheel bid adapter: only one ad unit is required.');
    }

    var zone = currentBidRequest.params.zoneId;
    var timeInMillis = new Date().getTime();
    var keyCode = hashcode(zone + '' + timeInMillis);
    var requestParams = {
      reqType: 'AdsSetup',
      protocolVersion: '2.0',
      zoneId: zone,
      componentId: getComponentId(currentBidRequest.params.format),
      timestamp: timeInMillis,
      pKey: keyCode
    }; // Add GDPR flag and consent string

    if (bidderRequest.gdprConsent) {
      requestParams._fw_gdpr_consent = bidderRequest.gdprConsent.consentString;

      if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
        requestParams._fw_gdpr = bidderRequest.gdprConsent.gdprApplies;
      }
    }

    var vastParams = currentBidRequest.params.vastUrlParams;

    if (_typeof(vastParams) === 'object') {
      for (var key in vastParams) {
        if (vastParams.hasOwnProperty(key)) {
          requestParams[key] = vastParams[key];
        }
      }
    }

    var location = __WEBPACK_IMPORTED_MODULE_0__src_utils__["getTopWindowUrl"]();

    if (isValidUrl(location)) {
      requestParams.loc = location;
    }

    var playerSize = getBiggerSize(currentBidRequest.sizes);

    if (playerSize[0] > 0 || playerSize[1] > 0) {
      requestParams.playerSize = playerSize[0] + 'x' + playerSize[1];
    }

    return {
      method: 'GET',
      url: FREEWHEEL_ADSSETUP,
      data: requestParams,
      bidRequest: currentBidRequest
    };
  },

  /**
  * Unpack the response from the server into a list of bids.
  *
  * @param {*} serverResponse A successful response from the server.
  * @param {object} request: the built request object containing the initial bidRequest.
  * @return {Bid[]} An array of bids which were nested inside the server.
  */
  interpretResponse: function interpretResponse(serverResponse, request) {
    var bidrequest = request.bidRequest;
    var playerSize = getBiggerSize(bidrequest.sizes);

    if (_typeof(serverResponse) == 'object' && typeof serverResponse.body == 'string') {
      serverResponse = serverResponse.body;
    }

    var xmlDoc;

    try {
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString(serverResponse, 'application/xml');
    } catch (err) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('Prebid.js - ' + BIDDER_CODE + ' : ' + err);
      return;
    }

    var princingData = getPricing(xmlDoc);
    var creativeId = getCreativeId(xmlDoc);
    var topWin = getTopMostWindow();

    if (!topWin.freewheelssp_cache) {
      topWin.freewheelssp_cache = {};
    }

    topWin.freewheelssp_cache[bidrequest.adUnitCode] = serverResponse;
    var bidResponses = [];

    if (princingData.price) {
      var bidResponse = {
        requestId: bidrequest.bidId,
        cpm: princingData.price,
        width: playerSize[0],
        height: playerSize[1],
        creativeId: creativeId,
        currency: princingData.currency,
        netRevenue: true,
        ttl: 360
      };
      var mediaTypes = bidrequest.mediaTypes || {};

      if (mediaTypes.video) {
        // bidResponse.vastXml = serverResponse;
        bidResponse.mediaType = 'video';
        var blob = new Blob([serverResponse], {
          type: 'application/xml'
        });
        bidResponse.vastUrl = window.URL.createObjectURL(blob);
      } else {
        bidResponse.ad = formatAdHTML(bidrequest, playerSize);
      }

      bidResponses.push(bidResponse);
    }

    return bidResponses;
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.pixelEnabled) {
      return [{
        type: 'image',
        url: USER_SYNC_URL
      }];
    }
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory__["c" /* registerBidder */])(spec);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spec */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bidfactory__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_constants___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_constants__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var BIDDER_CODE = 'telaria';
var ENDPOINT = '.ads.tremorhub.com/ad/tag';
var spec = {
  code: BIDDER_CODE,
  aliases: ['tremor', 'tremorvideo'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes__["d" /* VIDEO */]],

  /**
   * Determines if the request is valid
   * @param bid
   * @returns {*|string}
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.adCode && bid.params.supplyCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   * @param validBidRequests list of valid bid requests that have passed isBidRequestValid check
   * @param bidderRequest
   * @returns {Array} of url objects
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var requests = [];
    validBidRequests.forEach(function (bid) {
      var url = generateUrl(bid, bidderRequest);

      if (url) {
        requests.push({
          method: 'GET',
          url: generateUrl(bid, bidderRequest),
          bidId: bid.bidId,
          vastUrl: url.split('&fmt=json')[0]
        });
      }
    });
    return requests;
  },

  /**
   * convert the server response into a list of BidObjects that prebid accepts
   * http://prebid.org/dev-docs/bidder-adaptor.html#interpreting-the-response
   * @param serverResponse
   * @param bidderRequest
   * @returns {Array}
   */
  interpretResponse: function interpretResponse(serverResponse, bidderRequest) {
    var bidResult;
    var width, height;
    var bids = [];

    try {
      bidResult = serverResponse.body;
      bidderRequest.url.split('&').forEach(function (param) {
        var lower = param.toLowerCase();

        if (lower.indexOf('player') > -1) {
          if (lower.indexOf('width') > -1) {
            width = param.split('=')[1];
          } else if (lower.indexOf('height') > -1) {
            height = param.split('=')[1];
          }
        }
      });
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](error);
      width = 0;
      height = 0;
    }

    if (!bidResult || bidResult.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (bidResult && bidResult.error) {
        errorMessage += ": ".concat(bidResult.error);
      }

      __WEBPACK_IMPORTED_MODULE_0__src_utils__["logError"](errorMessage);
    } else if (bidResult.seatbid && bidResult.seatbid.length > 0) {
      bidResult.seatbid[0].bid.forEach(function (tag) {
        bids.push(createBid(__WEBPACK_IMPORTED_MODULE_4__src_constants__["STATUS"].GOOD, bidderRequest, tag, width, height, bidResult.seatbid[0].seat.toLowerCase()));
      });
    }

    return bids;
  },

  /**
   * We support pixel syncing only at the moment. Telaria ad server returns 'ext'
   * as an optional parameter if the tag has 'incIdSync' parameter set to true
   * @param syncOptions
   * @param serverResponses
   * @returns {Array}
   */
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses) {
    var syncs = [];

    if (syncOptions.pixelEnabled && serverResponses.length) {
      try {
        serverResponses[0].body.ext.telaria.userSync.forEach(function (url) {
          return syncs.push({
            type: 'image',
            url: url
          });
        });
      } catch (e) {}
    }

    return syncs;
  }
};
/**
 * Generates the url based on the parameters given. Sizes, supplyCode & adCode are required.
 * The format is: [L,W] or [[L1,W1],...]
 * @param bid
 * @param bidderRequest
 * @returns {string}
 */

function generateUrl(bid, bidderRequest) {
  var playerSize = bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.playerSize;

  if (!playerSize) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils__["logWarn"]('Although player size isn\'t required it is highly recommended');
  }

  var width, height;

  if (playerSize) {
    if (__WEBPACK_IMPORTED_MODULE_0__src_utils__["isArray"](playerSize) && playerSize.length === 2 && !isNaN(playerSize[0]) && !isNaN(playerSize[1])) {
      width = playerSize[0];
      height = playerSize[1];
    } else if (_typeof(playerSize) === 'object') {
      width = playerSize[0][0];
      height = playerSize[0][1];
    }
  }

  if (bid.params.supplyCode && bid.params.adCode) {
    var scheme = (document.location.protocol === 'https:' ? 'https' : 'http') + '://';
    var url = scheme + bid.params.supplyCode + ENDPOINT + '?adCode=' + bid.params.adCode;

    if (width) {
      url += '&playerWidth=' + width;
    }

    if (height) {
      url += '&playerHeight=' + height;
    }

    for (var key in bid.params) {
      if (bid.params.hasOwnProperty(key) && bid.params[key]) {
        url += '&' + key + '=' + bid.params[key];
      }
    }

    if (!bid.params['srcPageUrl']) {
      url += '&srcPageUrl=' + encodeURIComponent(document.location.href);
    }

    url += '&transactionId=' + bid.transactionId + '&hb=1';
    url += '&referrer=' + encodeURIComponent(bidderRequest.refererInfo.referer);
    return url + '&fmt=json';
  }
}
/**
 * Create and return a bid object based on status and tag
 * @param status
 * @param reqBid
 * @param response
 * @param width
 * @param height
 * @param bidderCode
 */


function createBid(status, reqBid, response, width, height, bidderCode) {
  var bid = Object(__WEBPACK_IMPORTED_MODULE_1__src_bidfactory__["a" /* createBid */])(status, reqBid); // TTL 5 mins by default, future support for extended imp wait time

  if (response) {
    _extends(bid, {
      requestId: reqBid.bidId,
      cpm: response.price,
      creativeId: response.crid || '-1',
      vastXml: response.adm,
      vastUrl: reqBid.vastUrl,
      mediaType: 'video',
      width: width,
      height: height,
      bidderCode: bidderCode,
      adId: response.id,
      currency: 'USD',
      netRevenue: true,
      ttl: 300,
      ad: response.adm
    });
  }

  return bid;
}

Object(__WEBPACK_IMPORTED_MODULE_2__src_adapters_bidderFactory__["c" /* registerBidder */])(spec);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBid;
var utils = __webpack_require__(0);
/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */


function Bid(statusCode, bidRequest) {
  var _bidSrc = bidRequest && bidRequest.src || 'client';

  var _statusCode = statusCode || 0;

  this.bidderCode = bidRequest && bidRequest.bidder || '';
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = utils.getUniqueIdentifierStr();
  this.requestId = bidRequest && bidRequest.bidId;
  this.mediaType = 'banner';
  this.source = _bidSrc;

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';

      case 1:
        return 'Bid available';

      case 2:
        return 'Bid returned empty or error response';

      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  }; // returns the size of the bid creative. Concatenation of width and height by ‘x’.


  this.getSize = function () {
    return this.width + 'x' + this.height;
  };
} // Bid factory function.


function createBid(statusCode, bidRequest) {
  return new Bid(statusCode, bidRequest);
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["a"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["f"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["c"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["e"] = shuffleArray;
/* harmony export (immutable) */ __webpack_exports__["d"] = parseQueryStringParameters;
var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}();

function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
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

function triggerPixel(url, done) {
  var img = new Image();

  if (done && typeof done == 'function') {
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  }

  img.src = url;
}
function insertUserSyncIframe(url, done) {
  var iframeHtml = createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    iframe.addEventListener('load', done);
    iframe.addEventListener('error', done);
  }

  insertElement(iframe, document, 'html', true);
}

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}

function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}

function shuffleArray(list) {
  if (list.length > 1) {
    for (var i = list.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var randomElement = list[randomIndex];
      list[randomIndex] = list[i];
      list[i] = randomElement;
    }
  }

  return list;
}
function parseQueryStringParameters(queryObj) {
  var result = '';

  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  return result;
}

/***/ })
/******/ ]);
//# sourceMappingURL=cedato-prebid.js.map