$(document).ready(function(){
  console.log("script2");
  $('a[href]').each(function(){
    var $url = $(this).attr("href");
    if ($url.indexOf("/redirector.googlevideo.com/") == -1)
      return true;
	if ($(this).text().indexOf("mp4") == -1)
		return true;
	var split = location.href.split("/");
	split = split[5].split("?");
	var $filename = split[0] + ".mp4";
	console.log($filename);
	console.log($(this).text());
    console.log($url);
  chrome.runtime.sendMessage({command: "download", url: $url, filename: $filename}, null);
	return false;
  });
  nextPage();
});

