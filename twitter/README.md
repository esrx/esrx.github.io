概念設計
https://esrx.github.io/twitter/

ボタンを押した時にボタンを上書きして、二重タップ以降のボタンを作る

block

limit

tweet

TwitterAPI
```
<select id='select'></select>
<script>
var Element = document.getElementById("select");
for (var i=0; i<=100; i++) {
   var option = document.createElement("option");
   option.value = i;
   option.innerText = i;
   Element.appendChild(option);
}
</script>
```
```
var numbers = $('#select').val();
```
```
document.getElementById("text-button").onclick = function() {
document.getElementById("myimage").setAttribute("src", "/image2.png")
};
```
```
var each = document.getElementsByClassName('twitter-timeline');
for(i=0; i<1; i++){
var element = each[i];
element.setAttribute('href','https://twitter.com/' + user + '/lists/' + list);
};
```
