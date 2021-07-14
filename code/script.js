$('#inputid').click( sample );
function sample() {
    var tex1 = $('#texta1').val();
    var tex2 = $('#texta2').val();
    var tex3 = $('#texta3').val();
    var tex4 = tex2 + 'submit';
    $('#output').text( '\n' + '<input id="' + tex1 + '" placeholder="' + tex2 + '" style="' + tex3 + '"></input>' + '\n' + '<button  id="' + tex4 + '">送信</button>');
    var tex5 = tex1 + '0';
    var tex6 = tex1 + '1';
    $('#autoput').text('$(\'#' + text4 + '.click( ' + text5 + ' );' + '\n' + 'function ' + tex5 + '() {' + '\n' + '    var ' + 'tex6' + ' = $(\'' + tex1 + '\').val();' + '\n}');
}
