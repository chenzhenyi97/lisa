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
$(document).ready(function(){
    $('.switch-bar ul li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.about-organization').eq($(this).index()).addClass('show').siblings().removeClass('show');
    });
    $('.about-organization .module .xiala').click(function(){
        $(this).addClass('open');
        $('.organization-modal').addClass('show');
        $('html').addClass('not-scroll');
    });
    $('.organization-modal').click(function(){
        $('.about-organization .module .xiala').removeClass('open');
        $('.organization-modal').removeClass('show');
        $('html').removeClass('not-scroll');

    })
    $('.organization-modal .pop ul li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.about-organization').eq($(this).index()).addClass('show').siblings().removeClass('show');
        $('.title-background .title div').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })
    $('.more').click(function(){
        $('.more-modal').addClass('expanded');
        $('html').addClass('not-scroll');
    })
    //更多弹窗-后三项皆有more，分为上面详细展示的more和下面列表中的more
    /**executive-council */
    $('.executive-council .introduction .more').click(function(){
        $('.more-modal .executive-council .introduction').addClass('show');
        moreScrollControll()
    });
    $('.executive-council .members ul li .more').click(function(){
        let index = $('.executive-council .members ul li .more').index(this);
        $('.more-modal .left .executive-council .members').eq(index).addClass('show');
        $('.more-modal .right .executive-council .members').eq(index).addClass('show');
        moreScrollControll()

    });
    /**academic-advisory-committee */
    $('.academic-advisory-committee .introduction .more').click(function(){
        $('.more-modal .academic-advisory-committee .introduction').addClass('show');
        moreScrollControll()

    });
    $('.academic-advisory-committee .members ul li .more').click(function(){
        let index = $('.academic-advisory-committee .members ul li .more').index(this);
        $('.more-modal .left .academic-advisory-committee .members').eq(index).addClass('show');
        $('.more-modal .right .academic-advisory-committee .members').eq(index).addClass('show');
        moreScrollControll()

    });
    /**management-structure */
    $('.management-structure .introduction .more').click(function(){
        $('.more-modal .management-structure .introduction').addClass('show');
        moreScrollControll()
    });
    $('.management-structure .members ul li .more').click(function(){
        let index = $('.management-structure .members ul li .more').index(this);
        $('.more-modal .left .management-structure .members').eq(index).addClass('show');
        $('.more-modal .right .management-structure .members').eq(index).addClass('show');
        moreScrollControll()
    });
    $('.more-modal .close').click(function(){
        $('.more-modal').removeClass('expanded');
        $('.more-modal .introduction').each(function(){
            $(this).removeClass('show');
        });
        $('.more-modal .members').each(function(){
            $(this).removeClass('show');
        });
        $('html').removeClass('not-scroll');
    });
    function moreScrollControll(){
        let itemTopArr = [];
        let modalTop = $('.more-modal').offset().top;//弹窗本身的offset.top
        $('.more-modal .right .show .moreDetail').each(function(){
            let top = $(this).offset().top;
            itemTopArr.push(top - modalTop - 88);
        });
        function scroll() {
            itemTopArr.forEach((item, index) => {
                if ($('.more-modal .right').scrollTop() - item > -10) {
                    $('.more-modal .right .more-header>div').removeClass('active')
                    $('.more-modal .right .more-header>div').eq(index).addClass('active')
                }
                if ($(document).scrollTop() < 10) {
                    $('.more-modal .right .more-header>div').removeClass('active')
                }
            })
    
        }
        $('.more-modal .right').bind('scroll', throttle(scroll, 100));

        $('.more-modal .right .more-header>div').click(function(){
            let index = $('.more-modal .right .more-header>div').index($(this));
            $('.more-modal .right').scrollTop(itemTopArr[index]);
        })
    }
})