# jQuery中DOM向观众操作难点

## 关于this的指向和选择器sele

举例说明：
```javascript
$("div").remove(".box"); 
//找到body中所有div下的class为box的标签并删除它
------------------------------------------------------
//jQuery中的实现
remove: function (sele) {
            if(arguments.length === 0){
                // 1.遍历指定的元素
                this.each(function (key, value) {
                    // 根据遍历到的元素找到对应的父元素
                    var parent = value.parentNode;
                    // 通过父元素删除指定的元素
                    parent.removeChild(value);
                });
            }else{
                var $this = this;
                // 1.根据传入的选择器找到对应的元素
                $(sele).each(function (key, value) {
                    // 2.遍历找到的元素, 获取对应的类型
                    var type = value.tagName;
                    // 3.遍历指定的元素
                    $this.each(function (k, v) {
                        // 4.获取指定元素的类型
                        var t = v.tagName;
                        // 5.判断找到元素的类型和指定元素的类型
                        if(t === type){
                            // 根据遍历到的元素找到对应的父元素
                            var parent = value.parentNode;
                            // 通过父元素删除指定的元素
                            parent.removeChild(value);
                        }
                    });
                })
            }
            return this;
}
```
其中this指的是$("div")保存的jQuery对象，sele指的是$("div").remove(".box");这一句中传入remove()这个函数的所有div下class为box的标签保存的jQuery对象