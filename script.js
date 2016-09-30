window.onload = function() {
  document.getElementById("save").onclick = function() {
    var value = document.getElementById("saveLine").value;
    // alert(value);

    // chrome.storage.sync.set(ARG1, ARG2[Optional]){}
    // chrome.storage.sync.get({"myLine": value}, function() {
    chrome.storage.sync.set({"myLine": value}, function() {
      alert("sucess");
    });

    // chrome.storage.sync.set({
    //   "KEYNAME": "KEYVALUE"
    // })
    document.getElementById("get").onclick = function() {
      // chrome.storage.sync.get("value of your key");
      chrome.storage.sync.get("myLine", function(data) {
        // alert(data);
        console.log(data);
      });
    }
  }
}