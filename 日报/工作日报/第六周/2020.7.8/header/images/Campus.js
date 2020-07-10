var throttle = function (func, delay) {
    var timer = null;
    var startTime = Date.now();
    return function () {
        var curTime = Date.now();
        var remaining = delay - (curTime - startTime);
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    }
}
$(window).load(function(){
    if(window.innerWidth>=1920){
        (function(){
            var left = (window.innerWidth - 1280) / 2 - 220;
            $('.aboutCampus .scroll-switch').css({
                'left': left + 'px'
            });
            var s_height = $('.aboutCampus .scroll-switch').height();
            var w_height = $('.aboutCampus').height();
            var proportion = s_height / w_height;
            let itemTopArr = [];
            $('.aboutCampus .show .CityCulture').each(function(){
                var top = $(this).offset().top - 80;
                var index = $('.CityCulture').index($(this))
                itemTopArr.push(top)
                $('.aboutCampus .scroll-switch>div').eq(index).css({
                    'top': top * proportion + 'px'
                })
            });
            function scroll() {
                if ($(document).scrollTop() > 500) {
                    $('.aboutCampus .scroll-switch').addClass('fixed')
                } else {
                    $('.aboutCampus .scroll-switch').removeClass('fixed')
                }
                itemTopArr.forEach((item, index) => {
                    if ($(document).scrollTop() - item > -80) {
                        $('.aboutCampus .scroll-switch>div').removeClass('curr')
                        $('.aboutCampus .scroll-switch>div').eq(index).addClass('curr')
                    }
                    if ($(document).scrollTop() < 80) {
                        $('.aboutCampus .scroll-switch>div').removeClass('curr')
                    }
                })
        
        
                var scrollTop = $(document).scrollTop() > w_height - 80 ? w_height - 80 : $(document).scrollTop();
                var top = scrollTop * proportion;
                $('.aboutCampus .scroll-switch .buoy').css({
                    'top': top + 4 + 'px'//高度校准，滑块16px文字24px
                })
        
            }
    
            $(document).bind('scroll', throttle(scroll, 100))
    
    
            $('.aboutCampus .scroll-switch>div').click(function () {
                var index = $('.aboutCampus .scroll-switch>div').index($(this))
                $(document).scrollTop(itemTopArr[index])
            })
        })();
    }
    
    $('.aboutCampus .module-bar div').click(function(){
        let index = $(this).index();
        if(window.innerWidth > 1920){
            if(index == 1){
                $('.aboutCampus .scroll-switch').css({
                    'display': 'none'
                });
            }
            else{
                $('.aboutCampus .scroll-switch').css({
                    'display': 'unset'
                });
            }
        }
        $(this).addClass('curr').siblings().removeClass('curr');
        $('.aboutCampus .switchPage').eq(index).addClass('show').siblings().removeClass('show');
    });

    $('.aboutCampus .OurCampus .hover-map .item').mouseover(function(){
        $('.aboutCampus .OurCampus .hover-map .icon-pointer').each(function(){
            $(this).removeClass('animation');
        })
    })
    $('.aboutCampus .OurCampus .hover-map .item').mouseout(function(){
        $('.aboutCampus .OurCampus .hover-map .icon-pointer').each(function(){
            $(this).addClass('animation');
        })
    })
})

