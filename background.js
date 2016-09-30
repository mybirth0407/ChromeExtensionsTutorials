/*
 * user to be logged in to site manually everytime for this plugin to work.
 * ajax request to /i/notifications
 * grab the data
 * filter out all the data
 */

var messages = [];
var ids = [];
var latestId;

$(function() {
  setInterval(engine, 20000);
});

function engine() {
  var newTweets = [];
  $.get("https://twitter.com/i/notifications", function(data) {
    // console.log(data);
    var htmlData = data;

    // $("body").append(htmlData);
    // $("body").append($(htmlData).find("#stream itmes id  "));

    $data = $(htmlData).find("#stream-items-id").eq(0);
    $data.find(".activity-truncated-tweet").remove();
    $data.find(".activity-supplement").remove();
    $("body").append($data);

    for (i = 0; i < $data.find("li.stream-item").length ; i++) {
      messages[i] = ($($data).find("li.stream-item").eq(i)
                             .find("div.-item-activity-line").text())
                             .replace(/\s+/g, '').trim();
    }
    // latestId = ids[0];
    if (latestId == ids[0]) {
      // no update
    }
    else if (latestId === undefined) {
      // first run browser session
      var firstRun = {
        type: "basic",
        title: "Twitter Notifier",
        message: "You may like to check your witter account"
               + " for latest notifications",
        iconUrl: "icon.png",
      };

      chrome.notifications.create(firstRun);
      latestId = ids[0];
    }
    /* there is some neew activity on user's account */
    else if (latestId != ids[0]) {
      /* finding all the new notifications happend for user in 20000 ms */
      for (i = 0; latestId != ids.length; i++) {
        if (latestId == ids[i]) {
          break;
        }
        else {
          if (messages[i] != "") {
            newTweets[i] = messages[i];
          }
        }
      }
      latestId = ids[0];
    }

    if (newTweets.length == 0) {
      // nothing
    }
    else {
      for (i = 0; i < newTweets.length; i++) {
        var myTweet = {
          type: "basic",
          title: "You Got A new Notification On Twitter - Twitter Notifier",
          message: newTweets[i],
          contextMessage: "Twitter Notifier",
          iconUrl: "icon.png",
          buttons: [{
            title: "Open Link",
          }],
        }
        chrome.notifications.onButtonClicked.addListener(function() {

        });
        chrome.notifications.create(myTweet);
      }
    }
    console.log(latestId);
    console.log(newTweets);
  });
}