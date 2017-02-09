function nextPage() {
  chrome.runtime.sendMessage({command: "get url"}, function(response) {
	if (response.ret == "null")
		return;
    var split = location.href.split("/");
    var url = split[0] + "//" + split[2] + response.ret;
    console.log(url);
	window.location.href = url;
  });
}

