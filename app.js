document.getElementById("startRecording")
          .addEventListener("click", recordClick, false);
function recordClick() {
  chrome.desktopCapture.chooseDesktopMedia(["screen", "window"],
                                           accessToRecord);
}

function accessToRecord(id) {
  // console.log(id);
  navigator.webkitGetUserMedia( {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: "desktop",
        chromeMediaSourceId : id
      }
    }
  }, startStream, failedStream);
}

function startStream(stream) {
  console.log("receiving Data From User..");
  var video = document.getElementById("screenMain");
  video.src = URL.createObjectURL(stream);
  stream.onended = function() { // Remove onended attribute
    console.log("video Recording Session Ended");
    console.log(stream);
  }
}

function failedStream() {
  console.log("some sort of error, who cares!");
}