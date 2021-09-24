var link = window.location.search;
var links = window.location.hostname;
var params = new URLSearchParams(link);
var user = params.get("user");
var lists = params.get("lists");
var list = params.get("list");
var timline = document.getElementsByClassName('twitter-timeline');
var height = window.screen.height;
var frame = document.getElementsByClassName('frm');
var homeweb = document.getElementsByClassName('web');
var youtube = document.getElementsByClassName('ybe');

var each = document.getElementsByTagName('iframe');
for(var i=0; i<each.length; i++){
    var element = each[i];
    element.setAttribute('width','100%');
    element.setAttribute('frameborder','0');
}

if(window.matchMedia('(prefers-color-scheme:light)').matches==true){
   for(i=0; i<1; i++){
   var timelines = timline[i];
   timelines.setAttribute('href','https://twitter.com/' + user + '/lists/' + lists);
   var frames = frame[i];
   frames.setAttribute('height',height);
   frames.setAttribute('src','https://tweet.lambda.dance/search');
   var homewebs = homeweb[i];
   homewebs.setAttribute('height',height);
   homewebs.setAttribute('src','https://' + links);
   var youtubes = youtube[i];
   youtubes.setAttribute('src','https://www.youtube.com/embed/?playsinline=1&modestbranding=1&loop=1&list=' + list);
   };
}

if(window.matchMedia('(prefers-color-scheme:dark)').matches==true){
   for(i=0; i<1; i++){
   var timelines = timline[i];
   timelines.setAttribute('href','https://twitter.com/' + user + '/lists/' + lists);
   timelines.setAttribute('data-theme','dark');
   var frames = frame[i];
   frames.setAttribute('height',height);
   frames.setAttribute('src','https://nitter.moomoo.me/search');
   var homewebs = homeweb[i];
   homewebs.setAttribute('height',height);
   homewebs.setAttribute('src','https://' + links);
   var youtubes = youtube[i];
   youtubes.setAttribute('src','https://www.youtube.com/embed/?playsinline=1&modestbranding=1&loop=1&list=' + list);
   };
}

var each = document.getElementsByTagName('a');
for(var i=0; i<each.length; i++){
    var element = each[i];
    element.setAttribute('rel','noopener noreferrer');
}

const homes = document.getElementById('homes').getAttribute("d");
const homesd = document.getElementById('homesd').getAttribute("d");
const explores = document.getElementById('explores').getAttribute("d");
const notifications = document.getElementById('notifications').getAttribute("d");
const messages = document.getElementById('messages').getAttribute("d");
const messagesd = document.getElementById('messagesd').getAttribute("d");

document.getElementById('home').onclick = function() {
document.getElementById('homeg').setAttribute("style", "fill:#1da1f2;");
document.getElementById('homes').setAttribute("d", "M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z");
document.getElementById('homesd').setAttribute("d", "");
document.getElementById('exploreg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('explores').setAttribute("d", explores);
document.getElementById('notificationg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('notifications').setAttribute("d", notifications);
document.getElementById('messages').setAttribute("d", messages);
document.getElementById('messagesd').setAttribute("d", messagesd);
document.getElementById('timeline').style.display = "block";
document.getElementById('search').style.display = "none";
document.getElementById('video').style.display = "none";
return false;
};

document.getElementById('explore').onclick = function() {
document.getElementById('homeg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('homes').setAttribute("d", homes);
document.getElementById('homesd').setAttribute("d", homesd);
document.getElementById('exploreg').setAttribute("style", "fill:#1da1f2;");
document.getElementById('explores').setAttribute("d", "M22.06 19.94l-3.73-3.73C19.38 14.737 20 12.942 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c1.943 0 3.738-.622 5.21-1.67l3.73 3.73c.292.294.676.44 1.06.44s.768-.146 1.06-.44c.586-.585.586-1.535 0-2.12zM11 17c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6z");
document.getElementById('notificationg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('notifications').setAttribute("d", notifications);
document.getElementById('messages').setAttribute("d", messages);
document.getElementById('messagesd').setAttribute("d", messagesd);
document.getElementById('timeline').style.display = "none";
document.getElementById('search').style.display = "block";
document.getElementById('video').style.display = "none";
return false;
};

document.getElementById('notification').onclick = function() {
document.getElementById('homeg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('homes').setAttribute("d", homes);
document.getElementById('homesd').setAttribute("d", homesd);
document.getElementById('exploreg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('explores').setAttribute("d", explores);
document.getElementById('notificationg').setAttribute("style", "fill:#1da1f2;");
document.getElementById('notifications').setAttribute("d", "M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z");
document.getElementById('messages').setAttribute("d", messages);
document.getElementById('messagesd').setAttribute("d", messagesd);
document.getElementById('timeline').style.display = "none";
document.getElementById('search').style.display = "none";
document.getElementById('video').style.display = "block";
return false;
};

document.getElementById('message').onclick = function() {
document.getElementById('homeg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('homes').setAttribute("d", homes);
document.getElementById('homesd').setAttribute("d", homesd);
document.getElementById('exploreg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('explores').setAttribute("d", explores);
document.getElementById('notificationg').setAttribute("style", "fill:#9da3ab;");
document.getElementById('notifications').setAttribute("d", notifications);
document.getElementById('messages').setAttribute("d", "M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z");
document.getElementById('messagesd').setAttribute("d", "M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z");
var element = document.documentElement;
var bottom = element.scrollHeight - element.clientHeight;
window.scrollTo({top:bottom,left:0,behavior:'smooth'});
return false;
};
