$('#inputid').click( sample );
function sample() {
    var tex1 = $('#texta1').val();
    var tex2 = $('#texta2').val();
    var tex3 = $('#texta3').val();
    $('#output').text( '\n' + '<input id="' + tex1 + '" placeholder="' + tex2 + '" style="' + tex3 + '"></input>' + '\n ');
}
