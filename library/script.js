var params = new URLSearchParams(window.location.search);
var link = params.get("link");
var links = decodeURIComponent(link);

regex = new RegExp('\\[[0-9].*\\]');
var matchs = links.match(regex);
var matches = matchs.match(new RegExp('[0-9].*'));
var matchex = links.replace(regex,matches);

alert(matchex);
