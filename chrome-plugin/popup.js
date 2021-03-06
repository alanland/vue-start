// Generated by CoffeeScript 1.9.2

/**
 * Get the current URL.
#
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
var getCurrentTabUrl, getImageUrl, renderStatus;

getCurrentTabUrl = function(callback) {
  var queryInfo;
  queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab, url;
    tab = tabs[0];
    url = tab.url;
    console.assert(typeof url === 'string', 'tab.url should be a string');
    callback(url);
  });
};


/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

getImageUrl = function(searchTerm, callback, errorCallback) {
  var searchUrl, x;
  searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' + '?v=1.0&q=' + encodeURIComponent(searchTerm);
  x = new XMLHttpRequest;
  x.open('GET', searchUrl);
  x.responseType = 'json';
  x.onload = function() {
    var firstResult, height, imageUrl, response, width;
    response = x.response;
    if (!response || !response.responseData || !response.responseData.results || response.responseData.results.length === 0) {
      errorCallback('No response from Google Image search!');
      return;
    }
    firstResult = response.responseData.results[0];
    imageUrl = firstResult.tbUrl;
    width = parseInt(firstResult.tbWidth);
    height = parseInt(firstResult.tbHeight);
    console.assert(typeof imageUrl === 'string' && !isNaN(width) && !isNaN(height), 'Unexpected respose from the Google Image Search API!');
    callback(imageUrl, width, height);
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
};

renderStatus = function(statusText) {
  document.getElementById('status').textContent = statusText;
};

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    setInterval(function() {
      return window.local;
    });
    renderStatus('Performing Google Image search for ' + url);
    getImageUrl(url, (function(imageUrl, width, height) {
      var imageResult;
      renderStatus('Search term: ' + url + '\n' + 'Google image search result: ' + imageUrl);
      imageResult = document.getElementById('image-result');
      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;
    }), function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
  });
});

//# sourceMappingURL=popup.js.map
