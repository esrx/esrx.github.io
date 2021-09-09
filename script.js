/*
index.html最下部のjsタグからこれが続いて処理が発生する
varの変数は被っても良くてその場合クリックした方が優先される
prev()、nextAll(),siblings()
*/

$('#mode').on('click',function() {
$(this).siblings('#light,#dark').toggle();
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

$.fn.clickToggle = function (a,b) {
  return this.each(function () {
    var clicked = false;
    $(this).on('click',function () {
      clicked = !clicked;
      if(clicked) {
        return a.apply(this,arguments);
      }
    return b.apply(this,arguments);
    });
  });
};

var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('iPad') > 0){
    return 'sp';
    }else if(ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
    return 'tab';
    }else{
    return 'other';
    }
})();
if(getDevice == 'sp'){
    apps = '+iOS';
}else if(getDevice == 'tab'){
    apps = '+Android';
}else if(getDevice == 'other'){
    apps = '+PC';
}

var sour = "+-source:twittbot.net+-source:botbird_tweets+-source:Cubi.so+-source:Cheap_Bots_Done_Quick";
var repl = "+-filter:replies";
var card = "+-card_name:animated_gif";
var name = "+OR+@i+-@i";
var choi = "";
var lang = "";
var quot = "";
var link = "";
var hash = "";
var vide = "";
var langs = "";
var timeg = "";
var timet = "";

$('#bot').clickToggle(function (){
   $(this).next('.target');
   $("#bot").html('📘bot');
   sour = "";
}, function (){
   $(this).next('.target');
   $("#bot").html('📕bot');
   sour = "+-source:twittbot.net+-source:botbird_tweets+-source:Cubi.so+-source:Cheap_Bots_Done_Quick";
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
   hash = "+-filter:hashtags";
}, function (){
   $(this).next('.target');
   $("#hashtags").html('📘hashtags');
   hash = "";
});

$('#video').clickToggle(function (){
   $(this).next('.target');
   $("#video").html('📕video');
   vide = "+-url:video";
}, function (){
   $(this).next('.target');
   $("#video").html('📘video');
   vide = "";
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
   langs = "+lang:";
}, function (){
   $(this).next('.target');
   $("#language").html('📕lang');
   var select = $("#lang").val();
   langs = "+-lang:";
});

$('#time').clickToggle(function (){
   $(this).next('.target');
   $("#time").html('📘until');
   var gets = new Date($('#date').val());
   var day = gets.getDate().toString();
   var month = gets.getMonth() + 1;
   var month = month.toString();
   var year = gets.getFullYear().toString();
   timeg = '&tbs=cdr%3A1%2Ccd_max%3A' + month + '%2F' + day + '%2F' + year;
   timet = '+until:' + year + '-' + month + '-' + day;
}, function (){
   $(this).next('.target');
   $("#time").html('📕since');
   var gets = new Date($('#date').val());
   var day = gets.getDate().toString();
   var month = gets.getMonth() + 1;
   var month = month.toString();
   var year = gets.getFullYear().toString();
   timeg = '&tbs=cdr%3A1%2Ccd_min%3A' + month + '%2F' + day + '%2F' + year;
   timet = '+since:' + year + '-' + month + '-' + day;
});

$('#search').click( sample );
function sample() {
var target = $('#texta').val();
$('#output').html('<i class="fa fa-twitter"></i>検索結果：' + target);
var target = target.replace(/%/g,'%25');
var target = target.replace(/\s\s/g,'+');
var target = target.replace(/\s/g,'+');
var target = target.replace(/#/g,'%23');
var target = target.replace(/&/g,'%26');
var select = $("#lang").val();
var lang = langs + select;
if (lang === 'und') {
    var lang = "";
}
var exesearch = target + lang + vide + repl + quot + card + link + hash + choi + timet + sour + name;
$('#output').attr('href', 'https://twitter.com/search?q=' + exesearch +'&src=typed_query&f=live');
var starget = exesearch.replace(/\+/g,' ');
var result = unescape( starget );
$('#input_copyoutput').text( result );
$('#btn_copy').text('content_paste');
$('#googlelight').attr('href', 'https://www.google.co.jp/search?q=' + target + '+' + timeg);
$('#googledark').attr('href', '/google/#gsc.tab=0&gsc.q=' + target );
$('#lightdack').attr('href', 'https://start.duckduckgo.com/?q=' + target + '&k9=1558d5');
$('#darkdack').attr('href', 'https://start.duckduckgo.com/?q=' + target + '&kl=jp-jp&kae=d&k7=23282f&k21=2a3139&kj=353535&k9=51a5fe&kaa=4285f4&kx=36b685&ka=n&ko=s&ks=m&kp=-2');
document.getElementById('input_copyoutput').style.visibility = "hidden";
return false;
}

function txtCopy() {
    document.getElementById('input_copyoutput').style.visibility = "visible";
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
    document.getElementById("btn_copy").innerText = "done";
    document.getElementById('input_copyoutput').style.visibility = "hidden";
    setTimeout(()=> {
    document.getElementById("btn_copy").innerText = "content_paste";
    },1250);
}
const trg = document.getElementById('btn_copy');
trg.addEventListener('click',txtCopy);

$('#tweet').click( tensio );
function tensio() {
var target = $('#texta').val();
$('#output').text(target);
var target = target.replace(/%/g,'%25');
var target = target.replace(/#/g,'%23');
var target = target.replace(/&/g,'%26');
var target = target.replace(/\n/g,'%0A');
var target = target.replace(/\s/g,'+');
$('#output').attr('href', 'https://twitter.com/intent/tweet?text=' + target);
return false;
}

$('#App').click( evolve );
function evolve() {
var target = $('#texta').val();
$('#output').text('検索App：' + target);
var target = target.replace('%','%25');
var target = target.replace('+','%20');
var target = target.replace('#','%23');
var target = target.replace('&','%26');
$('#output').attr('href', 'https://www.google.com/search?q=' + target + apps + '+App#fpstate=aig');
return false;
}
