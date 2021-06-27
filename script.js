//index.HTML最下部のjsタグからこれが続いて処理が発生する

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

$('#bot').clickToggle(function (){
   $(this).next('.target');
   $("#bot").html('📘BOT');
   butt = "";
}, function (){
   $(this).next('.target');
   $("#bot").html('📕BOT');
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
   $("#gif").html('📘GIF');
   card = "";
}, function (){
   $(this).next('.target');
   $("#gif").html('📕GIF');
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

$('#search').click( sample );
function sample() {
var target = $('#texta').val();
$('#output').text('検索結果：' + target);
var target = target.replace('%','%25');
var target = target.replace('+','%20');
var target = target.replace('#','%23');
var target = target.replace('&','%26');
$('#output').attr('href', 'https://twitter.com/search?q=' + target + lang + repl + quot + card + link + hash + choi + butt + name +'&src=typed_query&f=live');
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

function ors() {
var User = document.getElementById('or').value;document.getElementById('input').value += " " + User + " ";
}
function ands() {
var User = document.getElementById('and').value;document.getElementById('input').value += " " + User + " ";
}



function clearTextarea() {
var textclear = document.getElementById("texta");
textclear.value = '';
$('#output').text('');
}




//ダークモード
$(function () {
$('#mode').on('click',()=>{
$('#light').toggle();
$('#dark').toggle();
});
});

if(window.matchMedia('(prefers-color-scheme: light)').matches == true){
$('#darkd').hide();
$('#dark').hide();
}

if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
$('#lightd').hide();
$('#light').hide();
}
