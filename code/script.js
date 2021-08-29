$('#inputid').click( sample );
function sample() {
    var tex1 = $('#texta1').val();
    var tex2 = $('#texta2').val();
    var tex3 = $('#texta3').val();
    var tex4 = tex1 + 'submit';
    var tex6 = tex1 + 'output';
    $('#output').text( '\n' + '<input id="' + tex1 + '" placeholder="' + tex2 + '" style="' + tex3 + '"></input>' + '\n' + '<button id="' + tex4 + '">送信</button>' + '\n' + '<p id="' + tex6 + '"></p>');
    var tex5 = tex1 + '0';
    var str = tex1;
    var strHead  = str.slice( 0, 3 );
    var strHead1 = strHead + '1';
    $('#autoput').text('$(\'#' + tex4 + '\').click( ' + tex5 + ' );' + '\n' + 'function ' + tex5 + '() {' + '\n' + '    var ' + strHead1 + ' = $(\'#' + tex1 + '\').val();' + '\n' + '    $(\'#' + tex6 + '\').text( ' + strHead1 + ' );' + '\n}');
}

$('#linksubmit').click( link0 );
function link0() {
    var lin1 = $('#link').val();
    $('#linkoutput').text( '@app.route("/' + lin1 + '")' + '\n' + 'def ' + lin1 + '():');
    $('span').attr('data-clipboard-text', 'uha');
}
