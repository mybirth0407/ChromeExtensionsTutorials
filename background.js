chrome.app.runtime.onLaunched.addListener(function() {
  // console.log("Link Clicked");
  chrome.app.window.create("index.html", {
    bounds: {
      // width: 500,
      // height: 500
      width: 800,
      height: 800
    }
  });
});