# 定位

position属性允许你定位一个元素，通过使用top，left，bottom，right属改变位置。

常用的position的值有：``static``，``relative``，``absolute``，``fixed``。

#### static
默认值。没有定位，元素出现在标准文档流中（忽略 top, bottom, left, right 或者 z-index 声明）。

#### relative
生成相对定位的元素，相对于其正常位置进行定位。已经脱离标准文档流，但是标准文档流里会留有一个和它一样大小‘影子’，为其占据位置。这时候，z-index是有效的。如果设置了left:20px，就是以这个影子为基准，向右偏移20px。如果设置了left:-20px，就是以这个影子为基准，向左偏移20px。

#### absolute
+ 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
+ 如果一个元素设置了``position:absolute;``，它会脱离标准文档流。在标准文档流中不占位置。
+ 它会向上查找父元素，直到找到第一个定位不是 static 的父元素。它的定位（left，top等值）就是根据这个找到的元素确定的。如果在向上没有找到定位不是 static 的父元素，那就是根据html元素定位。
+ z-idnex有效

#### fixed
生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。