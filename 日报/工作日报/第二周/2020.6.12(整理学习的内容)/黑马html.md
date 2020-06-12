## FORM表单
```html
<form action="url地址" method="提交方式" name="表单域名称">
</form>
```
radio:定义单选按钮---圆框

checkbox：定义复选框---方框

PS：只有在< >中定义了name（表单元素名字）值并且相同才能实现相应效果

value是表单默认值，如果是text则为默认文本框中字，radio中是各选项的值，CheckBox也是一样的道理，submit提交按钮value值是按钮本身上面显示的文字

checked主要用于单选按钮以及复选框，为默认是否选中值

maxlength规定输入字段最大长度

label标签中for和id的配对属性：
```html
<label for="a">男</label>
<input type="radio" id="a" value="男">
```
现在只要点“男”这个字就可以选中单选框，进行两个匹配，现在只要点击for属性所在元素就能直接跳转到选中id所在的元素

注意：for和id要匹配

select表单元素：
```html
<select>
    <option>a</option>
    <option>b</option>
    <option>c</option>
    <option>d</option>
</select>
```
selected="selected"则当前选项为默认选中项

textarea是文本域：
```html
<textarea cols=“50” rows="5">
    在这里输入默认文本
</textarea>
```
50个字一行共5行

