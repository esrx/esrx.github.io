https://esrx.github.io/code
https://raw.githubusercontent.com/esrx/esrx.github.io/main/code/index.html
https://esrx.github.io/code/style.css
https://esrx.github.io/code/script.js
```
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous" rel="stylesheet">
```
https://fontawesome.com/v4.7/icons
https://teratail.com/questions/33470
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
```
```
<script defer src="https://use.fontawesome.com/releases/v5.9.0/js/all.js"></script>
```

```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
```
```
var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function(e) {
        //処理内容
        $(".btn").text('copy');
    });
    clipboard.on('error', function(e) {
        //エラー時の処理
    });
```
https://clipboardjs.com/#events


```
<input id="input_copy"></input>
<button id="input_copysubmit">送信</button>
<p id="input_copyoutput">あ</p>
<button id="btn_copy">Copy</button>
```
```
$('#input_copysubmit').click( inpu );
function inpu() {
    var inp1 = $('#input_copy').val();
$('#input_copyoutput').text( inp1 );
}

function txtCopy() {
    const target = document.getElementById('input_copyoutput');
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        target.readOnly = false;
        const range = document.createRange();
        range.selectNode(target);
        window.getSelection().addRange(range);
        document.execCommand('copy');
    } else {
        target.select();
        document.execCommand('copy');
    }
    alert("text copied!!");
}
const trg = document.getElementById('btn_copy');
trg.addEventListener('click',txtCopy);
```
バブリングフェーズ
```
navigator.clipboard.writeText("");
```

コピペCDNと出力HTMLでコード自動生成
