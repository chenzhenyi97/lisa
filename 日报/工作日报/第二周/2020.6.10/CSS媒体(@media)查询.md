# CSS3 @media查询
```css
@media mediatype and|not|only (media feature) {CSS code}

@media 媒体类型 and (媒体特性) {你的样式}

/*针对不同媒体*/
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```
注意：媒体查询必须要以@media开头，媒体特性分为两个部分：媒体特性和媒体特性所指定的值，两个部分之间用":"分隔。’

媒体特性是通过min/max来表示大于等于或小于做为逻辑判断，而不是使用小于（<）和大于（>）这样的符号来判断。

>现在仍旧在用的媒体类型：

1. all 用于所有设备
2. print 用于打印机和打印预览
3. screen 用于电脑屏幕、平板电脑、智能手机等
4. speech 应用于屏幕阅读器等发声设备

>常用的媒体功能

1. **max-width 最大宽度**

“max-width”是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。如：
```css
@media screen and (max-width:480px){
 .ads {
   display:none;
  }
}
```
上面表示的是：当屏幕小于或等于480px时,页面中的广告区块（.ads）都将被隐藏。
2. **min-width 最小宽度**

3. **多个媒体特性使用**

Media Queries可以使用关键词"and"将多个媒体特性结合在一起。也就是说，一个Media Query中可以包含0到多个表达式，表达式又可以包含0到多个关键字，以及一种媒体类型。

当屏幕在600px~900px之间时，body的背景色渲染为“#f5f5f5”，如下所示。
```css
@media screen and (min-width:600px) and (max-width:900px){
  body {background-color:#f5f5f5;}
}
```
4. **设备屏幕的输出宽度Device Width**

在智能设备上，例如iPhone、iPad等，还可以根据屏幕设备的尺寸来设置相应的样式（或者调用相应的样式文件）。同样的，对于屏幕设备同样可以使用“min/max”对应参数，如“min-device-width”或者“max-device-width”。
```css
<link rel="stylesheet" media="screen and (max-device-width:480px)" href="iphone.css" />
```
上面的代码指的是“iphone.css”样式适用于最大设备宽度为480px的设备，比如说iPhone上的显示，这里的“max-device-width”所指的是设备的实际分辨率，也就是指可视面积分辨率。

***device-width:用于判断所要使用的样式在那种宽度分辨率的设备。***

5. **not关键词**

使用关键词“not”是用来排除某种制定的媒体类型，也就是用来排除符合表达式的设备。换句话说，not关键词表示对后面的表达式执行取反操作，如：
```css
@media not print and (max-width: 1200px){样式代码}
```
上面代码表示的是：样式代码将被使用在除打印设备和设备宽度小于1200px下所有设备中。

6. **only关键词**

only用来指定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query但却支持Media Type的设备隐藏样式表的。

其主要有：支持媒体特性的设备，正常调用样式，此时就当only不存在；表示不支持媒体特性但又支持媒体类型的设备，这样就会不读样式，因为其先会读取only而不是screen；另外不支持Media Queries的浏览器，不论是否支持only，样式都不会被采用。如
```css
<link rel="stylesheet" media="only screen and (max-device-width:240px)" href="android240.css" />
```
在Media Query中如果没有明确指定Media Type，那么其默认为all，如：
```css
<link rel="stylesheet" media="(min-width:701px) and (max-width:900px)" href="mediu.css" /></pre>
```
另外在样式中，还可以使用多条语句来将同一个样式应用于不同的媒体类型和媒体特性中，指定方式如下所示。
```css
<link rel="stylesheet" type="text/css" href="style.css" media="handheld and (max-width:480px), screen and (min-width:960px)" />
```
上面代码中style.css样式被用在宽度小于或等于480px的手持设备上，或者被用于屏幕宽度大于或等于960px的设备上。

到目前为止，CSS3 Media Queries得到了众多浏览器支持，除了IE6-8浏览器不支持之外，在所有现代浏览器中都可以完美支持。还有一个与众不同的是，Media Queries在其他浏览器中不要像其他CSS3属性一样在不同的浏览器中添加前缀

---------------------------------------
## 补充

>CSS多类选择器：

在 HTML 中，一个 class 值中可能包含一个词列表，各个词之间用空格分隔。例如，如果希望将一个特定的元素同时标记为重要（important）和警告（warning），就可以写作：
```css
<p class="important warning">

 This paragraph is a very important warning.

</p>
```
这两个词的顺序无关紧要，写成 warning important 也可以。

我们假设 class 为 important 的所有元素都是粗体，而 class 为 warning 的所有元素为斜体，class 中同时包含 important 和 warning 的所有元素还有一个银色的背景 。就可以写作：
```css
.important {font-weight:bold;}

.warning {font-style:italic;}

.important.warning {background:silver;}
```
通过把两个类选择器链接在一起，仅可以选择同时包含这些类名的元素（类名的顺序不限）。

如果一个多类选择器包含类名列表中有一个类名没有，匹配就会失败。请看下面的规则：
```css
.important.urgent {background:silver;}
```
不出所料，这个选择器将只匹配 class 属性中包含词 important 和 urgent 的 p 元素。因此，如果一个 p 元素的 class 属性中只有词 important 和 warning，将不能匹配。不过，它能匹配以下元素：
 ```css
<p class="important urgent warning">
 
  This paragraph is a very important and urgent warning.

</p>
```
重要事项：在 IE7 之前的版本中，不同平台的 Internet Explorer 都不能正确地处理多类选择器。



https://www.runoob.com/cssref/css3-pr-mediaquery.html