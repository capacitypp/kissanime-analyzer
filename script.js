$(document).ready(function(){
  console.log('test');
  console.log(location.href);
  result = location.href.split("/");
  animename = result[result.length - 1];
  $('a[href]').each(function(){
	  var $url = $(this).attr("href");
	  if ($url.indexOf("/Anime/" + animename) == -1)
		  return true;
	  if ($url.indexOf("id") == -1)
		  return true;
	  console.log($url);
  });
});

