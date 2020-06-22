# 简单查找DOM元素和修改

console.log()通过调用该console对象的log()函数，可以在控制台中打印信息。

## 注意

>和style的异同

getComputedStyle和element.style的相同点就是二者返回的都是CSS StyleDeclaration对象，取相应属性值得时候都是采用的CSS驼峰式写法，均需要注意float属性。

而不同点就是：

element.style 读取的只是元素的内联样式，即写在元素的 style 属性上的样式；

而 getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。

element.style 既支持读也支持写，我们通过 element.style 即可改写元素的样式。

而getComputedStyle仅支持读并不支持写入。

我们可以通过使用getComputedStyle读取样式，通过element.style修改样式
我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式。

>原生js和jquery的入口函数加载模式不同

1.

原生js会等dom元素加载完毕并且图片也加载完毕后才会执行

而jquery会等到动漫元素加载完毕但不会等到图片元素也加载完毕就执行

2.

原生js如果编写了多个入口函数，后面编写的会覆盖前面编写的

而jquery如果编写了多个入口函数，后写的不会覆盖先写的

>解决冲突的写法

**释放$的使用权**
```
jQuery.noConflict();
```
防止$符号被自己编写的js代码占用，从而在自己代码中不使用$，而用jQuery代替，释放jQuery对于$的使用权。

注意点：释放操作必须在编写其他jQuery代码之前编写，并且编写之后不能再使用$，而改为使用jQuery

简化代码办法：自定义访问代码符号
```
var nj = jQuery.noConflict();
----------------------------------
nj(function(){
            alert("hello");
        });
```
>jQuery核心函数

$();就代表了调用jQuery的核心函数

作用：

1、接收一个函数
2、接收一个字符串
    接收一个字符串选择器、接收一个字符串代码片段
3、接收一个dom元素

>jquery对象

jQuery对象就是一个伪数组。有0-length-1的属性并且有length属性。
