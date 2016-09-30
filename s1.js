 var options = {
  type: "basic",
  // type: "image",
  // type: "list",
  // type: "progress",
  title: "Bill Gates just replied to your tweet!",
  message: "Mehul you are doing a very nice job teaching people" +
         + " how to code chrome extensions!",
  iconUrl: "icon.png",
  // imageUrl: "icon.png",
  // items: [{title: "Popup 1", message: "This is item 1."},
  //         {title: "Popup 2", message: "This is item 2."},
  //         {title: "Popup 3", message: "This is item 3."}]
  // progress: 30
};

chrome.notifications.create(options);
// chrome.notifications.create(options, callback);

// console.log("Popup Done?");

// function callback() {
//   console.log("Popup Done!");
// }
