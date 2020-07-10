// 瀑布流效果
// 这里有一个坑（已经修复）：
// 因为是动态加载远程图片，在未加载完全无法获取图片宽高
// 未加载完全就无法设定每一个 item(包裹图片)的 top。

// item 的 top 值：第一行：top 为 0
//            其他行：必须算出图片宽度在 item 宽度的缩小比例，与获取的图片高度相乘，从而获得 item 的高度
//                   就可以设置每张图片在瀑布流中每块 item 的 top 值（每一行中最小的 item 高度，数组查找）
// item 的 left 值：第一行：按照每块 item 的宽度值*块数
//            其他行：与自身上面一块的 left 值相等


window.waterFall = function () {
    // 1- 确定图片的宽度 - 滚动条宽度
    if (window.innerWidth <= 768) return
    var mar_left = 20;
    var pageWidth = getClient().width;
    var columns = 3;
    var itemWidth = parseInt(pageWidth / columns) - mar_left; // 得到item的宽度
    $(".masonry .masonry_item").width(itemWidth); // 设置到item的宽度

    var arr = [];
    var maxTop = 0;

    $(".masonry .masonry_item").each(function (i) {
        var height = $(this).height();
        var width = $(this).width();
        var bi = (itemWidth / width); // 获取缩小的比值
        var boxheight = height; //parseInt(height * bi); // 图片的高度*比值 = item的高度

        if (i < columns) {
            // 2- 确定第一行
            $(this).css({
                top: 0,
                left: (itemWidth + mar_left + mar_left) * i
            });
            arr.push(boxheight);

        } else {
            // 其他行
            // 3- 找到数组中最小高度  和 它的索引
            var minHeight = arr[0];
            var index = 0;
            for (var j = 0; j < arr.length; j++) {
                if (minHeight > arr[j]) {
                    minHeight = arr[j];
                    index = j;
                }
            }
            // 4- 设置下一行的第一个盒子位置
            // top值就是最小列的高度 
            $(this).css({
                top: arr[index],
                left: $(".masonry .masonry_item").eq(index).css("left"),
            });

            // 5- 修改最小列的高度 
            // 最小列的高度 = 当前自己的高度 + 拼接过来的高度
            arr[index] = arr[index] + boxheight;
            maxTop = arr[index] > maxTop ? arr[index] : maxTop;

        }
    });
    $('.footer').show()
    $('.masonry').css({
        'height': maxTop + 'px'
    })

    function getClient() {
        return {
            width: $('.content').width() - 30,
            height: $(window).height()
        }
    }
}

if (window.innerWidth > 768) {
    // 页面尺寸改变时实时触发
    window.onresize = function () {
        // 重新定义瀑布流
        waterFall();
    };

    // 初始化
    window.onload = function () {
        // 实现瀑布流
        waterFall();
    }
}
