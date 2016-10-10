chrome.browserAction.onClicked.addListener(function() {
  // chrome.tabs.executeScript(null, {
    // code: "console.log('WOW THIS ACTUALLY WORKS');"
  //   code: "document.body.style.background='green';"
  // });
  var information = "12345";
  chrome.tabs.executeScript(null, {
    code: "var information = " + information +';'
  }, function() {
    chrome.tabs.executeScript(null, {file: "script.js"});
  });
});
