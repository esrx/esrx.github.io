```
<Variable name="blockquote.font" description="Blockquote font"
   type="font"
   default="$(robotoLightItalic15)"  value="italic 300 15px Roboto, sans-serif"/>
```
>value部分のitalicをnormalに変更で斜体を元に戻す
```
blockquote{
color:$(blockquote.color);
font:$(blockquote.font);
font-size:x-large;
text-align:center
}
```
>x-largeを消してmediumにする。centerも消す
