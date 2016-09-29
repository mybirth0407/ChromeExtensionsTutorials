// <iframe src="toolbar.html"> // chrme-extension://...//...toolbar

var url = chrome.extension.getURL("toolbar.html");
var height = "35px";
var iframe = "<iframe src='"
           + url
           + "' id='myOwnCustomFirstToolbar' style='height:"
           + height
           + "'></iframe>";

// $("body").append(iframe);
$("html").append(iframe);

$("body").css({
  "-webkit-transform": "translateY(" + hegith + ')'
});