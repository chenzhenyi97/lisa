## 选择器

>类选择器

样式类定义，结构类class调用，一个或多个

多类名使用方式：
```css
.red{
    color: red;
}
.fontsize35{
    front-size: 35px;
}
------------------------------
<div class="red fontsize35">刘德华</div>
```
中间使用空格。

>id选择器

样式通过#定义，id调用，并且！！！只能调用一次

```css
#pink{
    color: pink;
}
-------------------------------
<div id="pink">李德华</div>
<div id="pink">李德华</div> /*不显示pink*/
```

>通配符选择器

用*定义，将页面中所有格式进行修改。

