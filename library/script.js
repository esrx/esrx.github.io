var params = new URLSearchParams(window.location.search);
var link = params.get("link");

var links = decodeURIComponent(link);

regex = new RegExp('\\[[0-9].*\\]');

var matchs = links.match(regex);

var match = matchs.match(new RegExp('[0-9].*'));

var match = links.replace(regex,'');



document.getElementById().src = links
