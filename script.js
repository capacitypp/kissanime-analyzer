$(document).ready(function(){
  console.log('test');
  console.log(location.href);
  result = location.href.split("/");
  animename = result[result.length - 1];
  chrome.runtime.sendMessage({command: "clear urls"}, null);
  $('a[href]').each(function(){
    var $url = $(this).attr("href");
    if ($url.indexOf("/Anime/" + animename) == -1)
      return true;
    if ($url.indexOf("id") == -1)
      return true;
    chrome.runtime.sendMessage({command: "add url", url: $url}, null);
    console.log($url);
  });
  chrome.runtime.sendMessage({command: "get url num"}, function(response) {
    console.log(String(response.ret));
  });
  chrome.runtime.sendMessage({command: "get idx"}, function(response) {
    console.log(String(response.ret));
  });
  chrome.runtime.sendMessage({command: "get url"}, function(response) {
    console.log(response.ret);
  });
});

