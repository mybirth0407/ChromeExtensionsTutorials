chrome.browserAction.onClicked.addListener(function() {
  /* chrome-extension://blahblahblah.file-name.html */
  chrome.tabs.create({url: chrome.extension.getURL("yedarm.html")}, callback);
});

// function callback(data) {
//   console.log(data.url);
// }
