(() => {
    var scroH, viewH, contentH;
    var W_width = window.innerWidth;
    var canScrollFlag = false;//false; //页面是否可以上下滚动
    var w_height = window.innerHeight;
    if(W_width>768){
        $('.homePage>.main>.banner').css({
            'height': w_height + 'px'
        })
        $('.homePage>.main>.banner .re_img_item').css({
            'height': w_height + 'px'
        })
    }
    var myrRESwiperImg, index, slideLen;
    var swiperClass = W_width > 768 ? '.swiper-container-banner': '.swiper-container-banner_mobile'
    initSwiperImg(swiperClass)

    /**
     * [initSwiperImg description] 初始化图片swiper
     * @return {[type]} [description]
     */
    function initSwiperImg(className) {
        slideLen = $('.swiper-container-banner .swiper-slide').length;
        //构造swiper
        myrRESwiperImg = new Swiper(className, {
            speed: 1500,
            loop: true,
            spaceBetween: 100,
            autoplay: 4500,
            pagination : '.pagination',
            paginationClickable :true,
            onSlideChangeStart: function () {
                if (index == slideLen - 1 && W_width>768) {
                    $('.header').addClass('swiperLastWhiteBg')
                    if(!canScrollFlag){
                        setTimeout(() => {
                            showLastSwiperItem()
                        }, 50)
                    }
                } else {
                    $('.header').removeClass('swiperLastWhiteBg')
                }
            },
            onSlideChangeEnd() {
                index = myrRESwiperImg.activeIndex;
                if (index == slideLen) {
                    canScrollFlag = true;
                }
                if (index == slideLen + 1) {
                    index = 1;
                }
                console.log(index)
            }
        });
    }
    
    function addeEventShow($items,i,length){
        $($items[i]).addClass('eventShow');
        i++;
        if(i>length) return
        setTimeout(()=>{
            addeEventShow($items,i)
        },500)
    }

    //swiper最后一页，动画
    function showLastSwiperItem() {
        var $items = $('#lastSwiper_item_box .item');
        var length = $items.length;
        addeEventShow($items,0,length)
    }

    //页面不让滚动的时候，鼠标上下，触发swiper
    $('.homePage .banner').bind('mousewheel', function (event, delta, deltaX, deltaY) {
        if (canScrollFlag) $('.banner').unbind('mousewheel')
        if (delta > 0) {
            if (index > 1 && !canScrollFlag) myrRESwiperImg.swipePrev()
        } else {
            if(!canScrollFlag) myrRESwiperImg.swipeNext()
        }
    });

    //页面不让滚动的时候，scroll事件
    $(document).bind('scroll', function (e) {
        if (canScrollFlag) {
            selecteventShow()
            if ((scroH + viewH) / contentH >= 0.95) { //取消滚动
                $(document).unbind('scroll');
            }
        } else {
            $(this).scrollTop(0)
        }
    })

    //research模块show方法
    function selecteventShow(){
        let child = $('.eventHide');
        EventShow(child);
    }

    /**
     * [eventShow description] 显示元素
     * @param  {[type]}  [description]
     * @return {[type]} [description]
     */
    function EventShow(child) {
        var len = child.length;
        scroH = $(window).scrollTop(); //滚动高度
        viewH = $(window).height(); //可见高度 
        contentH = $(document).height(); //内容高度
        for (var i = 0; i < len; i++) {
            var Etop = $(child[i]).offset().top;
            if (((Etop - scroH - viewH) / viewH) < -0.1) {
                $(child[i]).addClass('eventShow')
            }
        }
    }

})();