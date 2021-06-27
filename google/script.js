document.addEventListener("DOMFocusIn", function(event) {

var anc = location.hash
if (anc == "#gsc.tab=1"){
$('#offd').show();
  }
else if (anc == "#gsc.tab=0"){
$('#offd').show();
  }
else if (anc == "#"){
$('#offd').show();
  }
else{
$('#offd').hide();
  }

}, false);

document.addEventListener("DOMFocusOut", function(event) {

var anc = location.hash
if (anc == "#gsc.tab=1"){
$('#offd').show();
  }
else if (anc == "#gsc.tab=0"){
$('#offd').show();
  }
else if (anc == "#"){
$('#offd').show();
  }
else{
$('#offd').hide();
  }

}, false);
