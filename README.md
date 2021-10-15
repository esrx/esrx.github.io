##  github.io <a href="https://esrx.github.io"><img src="https://docs.github.com/assets/images/site/favicon.svg">
https://esrx.github.io/script.js
https://esrx.github.io/style.css

```
<!DOCTYPE html>
<html>
<link rel="stylesheet" href="style.css">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,user-scalable=no">
<title>GitHub</title>
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<meta http-equiv="refresh" content="0;URL=https://github.com/login?return_to=/search?q=user:esrx%26s=updated">
<meta name="twitter:title" content="GitHub">
<meta name="twitter:card" content="summary">
<meta name="twitter:image" content="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/logos/htc-summary-card.jpg">
<script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
</body>
</html>
```

```
.google {
text-align: center;
margin: auto;
}
```
```
<iframe style="display:none;" src="https://translate.google.com/translate?sl=auto&tl=jp&u=https://github.com/fluidicon.png"></iframe>
```
```
<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CBNYvcbAydX/embed/" allowtransparency="true" allowfullscreen="true" frameborder="0" height="538" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="max-width: 540px; width: calc(100% - 2px); background-color: white; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>
<script src="//www.instagram.com/embed.js"></script>
```
```
.scs {
   border-top:solid 1px #dadada;
   border-left:solid 1px #dadada;
   border-right:solid 1px #dadada;
   border-bottom:solid 1px #dadada;
   background-position: left bottom 50%;
   border-color: #dadada;
}
//github.githubassets.com/pinned-octocat.svg  
//github.com/fluidicon.png


//www.jaea.go.jp/04/horonobe/assets/images/index/hakase01.svg
<br>
<img width="100%" src="//www.metoc.navy.mil/jtwc/products/abpwsair.jpg">
<br>
<img width="100%" src="//swc.nict.go.jp/data/latest/plots/latest_electron_fluence.png">
```
document.getElementById('input_copyoutput');

```
<script>
if(window.matchMedia('(prefers-color-scheme: light)').matches == true) {
$('#dark').hide();
}
if(window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
$('#light').hide();
}
</script>
```
```
$('#mode').on('click',()=>{
$('[id=light]').toggle();
$('[id=dark]').toggle();
});

   $('#light').toggle();
   $('#dark').toggle();

      $(this).nextAll('[id=dark]').toggle();
```
```
if(window.matchMedia('(prefers-color-scheme: light)').matches == true){
   $('[id=dark]').each(function(){
   $(this).hide();
   });
}
if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
   $('[id=light]').each(function(){
   $(this).hide();
   });
}
```
```
var each = document.getElementsByTagName('a');
for(var i=0; i<each.length; i++){
    var element = each[i];
    element.setAttribute('rel','noreferrer');
}
```
```
$('a').each(function(){
   $(this).attr('rel','noreferrer');
});
```
```
var list = document.querySelectorAll('p,blockquote');
for(var i=0; i<list.length; i++){
    var element = list[i].innerHTML;
    list[i].innerHTML = element.replace(/\n/g,'<br>');
}
```
```
<input type=hidden id="hidari" value="(">
<input type=hidden id="migi" value=")">
<button type="button" class="ja" onclick="hidaris();">(　)</button>
```
```
function hidaris() {
var areas = document.getElementById('hidari').value;
var aread = document.getElementById('texta');
aread.value = areas + " " + aread.value;
var area = document.getElementById('migi').value;document.getElementById('texta').value += " " + area ;
}
```
```
var request = new XMLHttpRequest();
request.open('GET','https://httpbin.org/ip',true);
request.responseType = 'json';
request.send();
request.addEventListener('load',function() {
   var data = this.response;
   console.log(data["origin"]);
   });

```
