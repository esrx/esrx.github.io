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
text-align:left;
font-size:medium;
margin-left:2%;
margin-right:2%;
padding-left:2%;
padding-right:2%;
border-radius:5px;
background-color:#dcdcdc;
}
```
>x-largeを消してmediumにする。centerも消す
