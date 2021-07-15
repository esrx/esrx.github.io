//index.HTML最下部のjsタグからこれが続いて処理が発生する

$(function () {
$('#mode').on('click',()=>{
$('#light').toggle();
$('#dark').toggle();
});
});

function hidaris() {
var areas = document.getElementById('hidari').value;
var aread = document.getElementById('texta');
aread.value = areas + " " + aread.value;
var area = document.getElementById('migi').value;document.getElementById('texta').value += " " + area ;
}

function ors() {
var area = document.getElementById('or').value;document.getElementById('texta').value += " " + area + " ";
}
function ands() {
var area = document.getElementById('and').value;document.getElementById('texta').value += " " + area + " ";
}

function clearTextarea() {
var textclear = document.getElementById("texta");
textclear.value = '';
$('#output').text('');
$('#input_copyoutput').text('');
navigator.clipboard.writeText("");
}

$.fn.clickToggle = function (a, b) {
return this.each(function () {
var clicked = false;
$(this).on('click', function () {
clicked = !clicked;
if (clicked) {
return a.apply(this, arguments);
}
return b.apply(this, arguments);
});
});
};




var butt = "+-source:twittbot.net+-source:botbird_tweets+-source:Cubi.so+-source:Cheap_Bots_Done_Quick";
var repl = "+-filter:replies";
var card = "+-card_name:animated_gif";
var name = "+OR+@i+-@i";
var choi = "";
var lang = "";
var quot = "";
var link = "";
var hash = "";
var sour = "";

$('#bot').clickToggle(function (){
   $(this).next('.target');
   $("#bot").html('📘bot');
   butt = "";
}, function (){
   $(this).next('.target');
   $("#bot").html('📕bot');
   butt = "+-source:twittbot.net+-source:botbird_tweets+-source:Cubi.so+-source:Cheap_Bots_Done_Quick";
});

$('#links').clickToggle(function (){
   $(this).next('.target');
   $("#links").html('📕links');
   link = "+-filter:links";
}, function (){
   $(this).next('.target');
   $("#links").html('📘links');
   link = "";
});

$('#gif').clickToggle(function (){
   $(this).next('.target');
   $("#gif").html('📘gif');
   card = "";
}, function (){
   $(this).next('.target');
   $("#gif").html('📕gif');
   card = "+-card_name:animated_gif";
});

$('#replies').clickToggle(function (){
   $(this).next('.target');
   $("#replies").html('📘replies');
   repl = "";
}, function (){
   $(this).next('.target');
   $("#replies").html('📕replies');
   repl = "+-filter:replies";
});

$('#name').clickToggle(function (){
   $(this).next('.target');
   $("#name").html('📘Name');
   name = "";
}, function (){
   $(this).next('.target');
   $("#name").html('📕Name');
   name = "+OR+@i+-@i";
});

$('#choice').clickToggle(function (){
   $(this).next('.target');
   $("#choice").html('📕choice');
   choi = "+-card_name:poll2choice_text_only+-card_name:poll3choice_text_only+-card_name:poll4choice_text_only";
}, function (){
   $(this).next('.target');
   $("#choice").html('📘choice');
   choi = "";
});

$('#quote').clickToggle(function (){
   $(this).next('.target');
   $("#quote").html('📕quote');
   quot = "+-filter:quote";
}, function (){
   $(this).next('.target');
   $("#quote").html('📘quote');
   quot = "";
});

$('#hashtags').clickToggle(function (){
   $(this).next('.target');
   $("#hashtags").html('📕hashtags');
   quot = "+-filter:hashtags";
}, function (){
   $(this).next('.target');
   $("#hashtags").html('📘hashtags');
   quot = "";
});

$('#source').clickToggle(function (){
   $(this).next('.target');
   $("#source").html('📕source');
   sour = "+(source:Twitter_for_iPhone+OR+source:Twitter_for_iPad+OR+source:Twitter_for_Android+OR+source:Twitter_for_Mac+OR+source:Twitter_Web_App+OR+Twitter_Web_Client+OR+source:TweetDeck)";
}, function (){
   $(this).next('.target');
   $("#source").html('📘source');
   sour = "";
});

$('#language').clickToggle(function (){
   $(this).next('.target');
   $("#language").html('📘lang');
   var select = $("#lang").val();
   lang = "+lang:" + select;
}, function (){
   $(this).next('.target');
   $("#language").html('📕lang');
   var select = $("#lang").val();
   lang = "+-lang:" + select;
});

document.getElementById("today").onchange = function() { 
    var date = document.getElementById("today").value;
    alert(date);
};


$('#search').click( sample );
function sample() {
var target = $('#texta').val();
$('#output').text('検索結果：' + target);
var target = target.replace(/%/g,'%25');
var target = target.replace(/\s\s/g,'+');
var target = target.replace(/\s/g,'+');
var target = target.replace(/#/g,'%23');
var target = target.replace(/&/g,'%26');
var exesearch = target + lang + repl + quot + card + link + hash + choi + butt + sour + name;
$('#output').attr('href', 'https://twitter.com/search?q=' + exesearch +'&src=typed_query&f=live');
var result = unescape( exesearch );
var result = result.replace(/+/g,' ');
$('#input_copyoutput').text(result);
return false;
}

function txtCopy() {
    const etarget = document.getElementById('input_copyoutput');
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        etarget.readOnly = false;
        const range = document.createRange();
        range.selectNode(etarget);
        window.getSelection().addRange(range);
        document.execCommand('copy');
    } else {
        etarget.select();
        document.execCommand('copy');
    }
    document.getElementById("btn_copy").innerText = "End";
    setTimeout(()=> {
    document.getElementById("btn_copy").innerText = "Copy";
    },1500);
}
const trg = document.getElementById('btn_copy');
trg.addEventListener('click',txtCopy);

$('#tweet').click( tensio );
function tensio() {
var target = $('#texta').val();
$('#output').text('ツイート：' + target);
var target = target.replace(/%/g,'%25');
var target = target.replace(/#/g,'%23');
var target = target.replace(/&/g,'%26');
var target = target.replace(/\n/g,'%0A');
var target = target.replace(/\s/g,'+');
$('#output').attr('href', 'https://twitter.com/intent/tweet?text=' + target);
return false;
}

$('#iOS').click( evolve );
function evolve() {
var target = $('#texta').val();
$('#output').text('検索結果：' + target);
var target = target.replace('%','%25');
var target = target.replace('+','%20');
var target = target.replace('#','%23');
var target = target.replace('&','%26');
$('#output').attr('href', 'https://www.google.com/search?q=' + target + '+ios&gl=us&hl=en#fpstate=aig');
return false;
}
