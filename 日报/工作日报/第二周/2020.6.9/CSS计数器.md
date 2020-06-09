# CSS计数器

实例在页面创建一个计数器(在 body 选择器中)，每个< h2 >元素的计数值都会递增，并在每个< h2 >元素前添加 "Section <计数值>:"
```css
body {
  counter-reset: section;
}
 
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```
表示每个h2的标签中的文本内容之前都添加行头“Section X：”。

## 嵌套的计数器
```css
body {
  counter-reset: section;
}
 
h1 {
  counter-reset: subsection;
}
 
h1::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}
 
h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```
上面的代码是将h1标签下的文字设置为一级列表前缀为Section X:,h2标签下的文字设置为二级列表前缀为X.1开始并依次类推的文字。

***注意***：本文中section和subsection作为一个标签名需要实际作用必须一一对应

计数器也可用于列表中，列表的子元素会自动创建。这里我们使用counters()函数在不同的嵌套层级中插入字符串:
```css
ol {
  counter-reset: section;
  list-style-type: none;
}
 
li::before {
  counter-increment: section;
  content: counters(section,".") " ";
}
-----------------------------------------
<ol>
    <li>item</li>
    <li>item</li>
    <li>item
    <ol>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ol>
    </li>
    <li>item</li>
  </ol>
  </li>
  <li>item</li>
  <li>item</li>
</ol>

<ol>
  <li>item</li>
  <li>item</li>
</ol>
```
这里的ol和li需要注意嵌套的规范。



https://www.runoob.com/css/css-counters.html