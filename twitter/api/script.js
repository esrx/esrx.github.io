var AT = ""
var AS = ""
var tweets = ""

$('#tweet').click( sample );
function sample() {
var AT = $('#AT').val();
var AS = $('#AS').val();
var tweets = $('#texta').val();
$('#output').text('ツイートしますか？：' + tweets);
$('#output').attr('href', 'https://tweepypost.herokuapp.com/twitter?oauth_token=' + AT + '&oauth_verifier=' + AS + '&tweets=' + tweets);
return false;
}

$('#block').click( evolve );
function evolve() {
var AT = $('#AT').val();
var AS = $('#AS').val();
var numbers = $('#select').val();
$('#autoput').text('ブロックしますか？：' + numbers + 'から');
$('#autoput').attr('href', 'https://tweepypost.herokuapp.com/twitter?oauth_token=' + AT + '&oauth_verifier=' + AS + '&number=' + numbers);
return false;
}
