var params = new URLSearchParams(window.location.search);
var link = params.get("link");

var links = decodeURIComponent(link);

regex = new RegExp('\\[[0-9].*\\]');

var match = links.match(regex);

document.getElementById().src = links
