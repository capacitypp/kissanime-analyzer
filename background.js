function clearURLs() {
	localStorage["num"] = "0";
	localStorage["idx"] = "0";
}

function addURL(url) {
	var idx = Number(localStorage["num"]);
	localStorage[String(idx)] = url;
	idx++;
	localStorage["num"] = String(idx);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	if (request.command == "add url")
		addURL(request.url);
	if (request.command == "clear urls")
		clearURLs();
	if (request.command == "get url num")
      sendResponse({ret: Number(localStorage["num"])});
	if (request.command == "get idx")
      sendResponse({ret: Number(localStorage["idx"])});
	if (request.command == "get url") {
      var idx = Number(localStorage["idx"]);
	  var num = Number(localStorage["num"]);
	  if (idx == num) {
        sendResponse({ret: "null"});
	  } else {
        sendResponse({ret: localStorage[String(idx)]});
	    idx++;
	    localStorage["idx"] = String(idx);
	  }
	}
	if (request.command == "download")
	  chrome.downloads.download({url: request.url, filename: request.filename}, null);
  }
);

