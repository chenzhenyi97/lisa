# css3动画

>## [ransform、transition、translate、animation]

（这里是应用chrome浏览器的例子，如果泛指则去掉前缀-webkit-）

>>### 简单介绍：

**transform属性**：向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜

例如：
```css
transform:rotate(7deg); 
transform:translate(x,y);
```
**translate属性值**：是transform的值，定义 2D 转换，表示对当前元素的位移和rotate(angle)旋转，scale(x,y)缩放等并列 ，同为transform的值。

**transition属性**：允许CSS属性值在一定的时间区间内平滑的过渡，需要事件的触发，例如单击、获取焦点、失去焦点等

例如：
```css
transition(border-radius  2s); 
```
表示在两秒时间内过渡border-radius属性的变化状态

**animation属性**：通过帧动画对当前元素的某些属性进行帧动画的播放，功能相似于transition，但更加的精确、可控

例如：
```css
animation:mymove 5s infinite;（mymove是帧动画的名称）
```
>>### 详细内容

1. >transform介绍

*旋转*：rotate() 顺时针旋转给定的角度，允许负值：rotate(30deg) 

*扭曲*：skew() 元素翻转给定的角度,根据给定的水平线（X 轴）和垂直线（Y 轴）参数：skew(50deg,20deg) 

*缩放*：scale() 放大或缩小，根据给定的宽度（X 轴）和高度（Y 轴）参数： scale(2,4) 

*移动*：translate()平移，传进 x,y值，代表沿x轴和y轴平移的距离

2. >translate介绍：

translate(x, y)只是transform的一部分，主管位移功能。

还有：translate3d(x, y, z)和translateX(x)、translateY(y)、translateZ(z)。

3. >transition介绍

transition属性是个复合属性，她包括以下几个子属性：

transition-property ：规定设置过渡效果的css属性名称

transition-duration ：规定完成过渡效果需要多少秒或毫秒

transition-timing-function ：指定过渡函数，规定速度效果的速度曲线

transition-delay ：指定开始出现的延迟时间

默认值分别为：all 0 ease 0 

**注：transition-duration 时长为0，不会产生过渡效果**

### **改变多个css属性的过渡效果时：**
```css
a{ 
    transition: 
    background 0.8s ease-in 0.3s,
    color 0.6s ease-out 0.3s;
    }
```

下述的代码表示：在2s内对元素进行宽度从100px到300px的变化过渡；

```css
div{
width:100px;
height:100px;
background:blue;
transition:width 2s;
-moz-transition:width 2s; /* Firefox 4 */
-webkit-transition:width 2s; /* Safari and Chrome */
-o-transition:width 2s; /* Opera */
}

div:hover{
width:300px; /* 也可以对颜色进行过渡，比如background: red;*/
}
```

**注意**：CSS属性值在一定的时间区间内平滑的过渡，*需要事件的触发，例如单击、获取焦点、失去焦点等*

4. >animation和@keyframes关键帧的介绍

animation属性是个复合属性，她包括以下几个子属性：

animation-name 规定需要绑定到选择器的 keyframe 名称。

animation-duration 规定完成动画所花费的时间，以秒或毫秒计。 

animation-timing-function 规定动画的速度曲线。 

animation-delay 规定在动画开始之前的延迟。 

animation-iteration-count 规定动画应该播放的次数。 

animation-direction 规定是否应该轮流反向播放动画。

animation需要在@-webkit-keyframes{ }中进行帧动画的定义。
```css
div{
width:100px;
height:100px;
background:red;
position:relative;
animation:move 5s infinite;
-webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
}

@keyframes move{
from {top:0px;}
to {top:200px;}
}

@-webkit-keyframes mymove{
from {top:0px;}
to {top:200px;} 
}
```
注意：div中的keyframes的帧动画名称必须与后面的@keyframes调用一致；div中的-webkit-keyframes必须与后面的@-webkit-keyframes调用一致，否则没有相应的帧动画效果显示。

***！！！transition和animation的区别：！！！***

animation可以控制到每一帧，高版本的浏览器还支持css或者JS控制停止动画 以及获取动画当前状态等；

translation只是一个过渡 只能设置 初始值和结束值。


