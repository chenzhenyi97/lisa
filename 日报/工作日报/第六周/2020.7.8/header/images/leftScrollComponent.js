class leftScrollComponent{

    constructor(parentElId,options){
        this.parentElId = parentElId;
        this.parentEl = document.querySelector(`.${parentElId}`);
        this.ItemClassName = options.ItemClassName;
        this.leftScrollItem = options.leftScrollItem;
        this.topfixedHeight = options.topfixedHeight || 500;
        
        //节流
        window.throttle = function (func, delay) {
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

        this.initTemplateStyle()
        this.setLeftScrollComponentTemplate();
        this.initLeftScrollComponent()
    }

    initLeftScrollComponent(){
        let self = this;
        $(window).load(function(){
            var left = (window.innerWidth - 1280) / 2 - 220;
            $('.left_scroll').css({
                'left': left + 'px'
            })
            var s_height = $('.left_scroll').height();
            var w_height = $(document).height();
            var proportion = s_height / w_height;
            var itemTopArr = [];
            $(`.${self.ItemClassName}`).each(function () {
                var top = $(this).offset().top -150;
                var index = $(`.${self.ItemClassName}`).index($(this))
                itemTopArr.push(top)
                $('.left_scroll>div').eq(index).css({
                    'top': top * proportion + 'px'
                })
            })
    
            function scroll() {
                if ($(document).scrollTop() > Number(self.topfixedHeight) ) {
                    $('.left_scroll').addClass('fixed')
                } else {
                    $('.left_scroll').removeClass('fixed')
                }
    
                itemTopArr.forEach((item, index) => {
                    if ($(document).scrollTop() - item > -20) {
                        $('.left_scroll>div').removeClass('scrollActive')
                        $('.left_scroll>div').eq(index).addClass('scrollActive')
                    }
                    if ($(document).scrollTop() < 10) {
                        $('.left_scroll>div').removeClass('scrollActive')
                    }
                })
    
    
                var scrollTop = $(document).scrollTop() > w_height ? w_height - 100 : $(document).scrollTop();
                var top = scrollTop * proportion;
                $('.left_scroll .buoy').css({
                    'top': top + 'px'
                })
    
            }
    
            $(document).bind('scroll', throttle(scroll, 100))
    
    
            $('.left_scroll>div').bind('click', function () {
                //debugger
                var index = $('.left_scroll>div').index($(this))
                $(document).scrollTop(itemTopArr[index]) 
            })

            $(`.${self.parentElId} .left_scroll`).show()
        })
    }

    //设置样式
    initTemplateStyle(){
        let styleInner = ` 
        @media screen and (max-width: 1919px) {
            .${this.parentElId} .left_scroll {
                display: none !important;
            }
        }
        @media screen and (min-width: 1919px) {
            .${this.parentElId} .left_scroll {
                z-index: 1111;
                display: none;
                position: absolute;
                height: 216px;
                border-right: 2px solid rgba(0, 0, 0, 0.1);
                top: 603px;
                width: 180px;
            }
            .${this.parentElId} .left_scroll.fixed {
                position: fixed !important;
                top: 100px;
             }
            .${this.parentElId} .left_scroll .buoy {
                position: absolute;
                width: 4px;
                height: 16px;
                background: #1d9900;
                content: ' ';
                top: 0;
                right: -3px;
                display: block;
            }
            .${this.parentElId} .left_scroll > div {
                position: absolute;
                font-size: 16px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 24px;
                text-align: right;
                right: 15px;
                cursor: pointer;
            }
            .${this.parentElId} .left_scroll > div.scrollActive {
                font-weight: bold;
                color: #1d9900;
            }
            .${this.parentElId} .left_scroll > div.scrollActive img {
                display: block;
            }
            .${this.parentElId} .left_scroll > div img {
                width: 24px;
                display: none;
                float: right;
                margin-left: 7px;
                margin-top: 2px;
            }
          }`;
        this.style = document.createElement("style");
        this.style.innerHTML = styleInner;
        document.body.appendChild(this.style);
    }

    //设置template
    setLeftScrollComponentTemplate(){
        let template = `
        <div class="left_scroll">
            <span class="buoy"></span>
            ${(()=>{
                return this.leftScrollItem.map((item)=>{
                    return  `<div class="ResearchAreaBuoy">
                                <span>${item}</span>
                                <img src="./images/home_opportunity_icon_next_green.png" alt="">
                             </div>`
                }).join("")
            })()}
        </div>`;
        $(`.${this.parentElId}`).append(template)
    }

}