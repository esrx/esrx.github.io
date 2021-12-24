var params = new URLSearchParams(window.location.search);
var link = params.get("link");

var links = decodeURIComponent(link);

regex = new RegExp('\\[[0-9].*\\]');

if(regex.test(links)){

}

document.getElementById().src = links
