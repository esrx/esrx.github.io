```
<Variable name="blockquote.font" description="Blockquote font"
    type="font"
    default="$(robotoLightItalic15)"  value="normal 300 3px Roboto, sans-serif"/>
<Variable name="blockquote.color" description="Blockquote color"
    type="color"
    default="#444444"  value="#444444"/>
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
```
<Variable name="posts.text.color" description="Post text color"
   type="color"
   default="$(body.text.color)"  value="#000000"/>
```
>本文の色を決めている
