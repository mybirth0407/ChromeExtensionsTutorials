var contextsList = ["selection", "link", "image", "page"];

chrome.contextMenus.create({
  title: "",
  contexts: ["selection"],
  onclick: myfunction
});

for (var i = 0; i < contextsList.length; i++) {
  var context = contextsList[i];
  var titleX =  "Twitter Toolkit: Share this "
             + context
             + " on your twitter profile";
  chrome.contextMenus.create({
    title: titleX,
    contexts: [context],
    onclick: myfunction,
    id: context
  });
}

// selection, link, image, page 

function myfunction(data, tab) {
  // alert("you just click me!");
  // alert(selectedText.selectionText);
  switch (data.menuItemId) {
    case "selection":
      // chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="
      //                        + data.selectionText});
      chrome.windows.create({url: "https://twitter.com/intent/tweet?text="
                             + encodeURIComponent(data.selectionText),
                             type: "panel"});
      break;
    case "link":
      chrome.windows.create({url: "https://twitter.com/intent/tweet?url="
                             + encodeURIComponent(data.linkUrl),
                             type: "panel"});
      break;
    case "image":
      chrome.windows.create({url: "https://twitter.com/intent/tweet?url="
                             + encodeURIComponent(data.srcUrl),
                             type: "panel"});
      break;
    // case "page":
    //   chrome.tabs.create({
    //     url: "https://twitter.com/intent/tweet?text=MyPage"});
    case "page":
      chrome.windows.create({url: "https://twitter.com/intent/tweet?text="
                             + encodeURIComponent(tab.title)
                             + "&url="
                             + data.pageUrl,
                             type: "panel"});
      break;
  } 
  // chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="
  //                        + selectedText.selectionText});
}