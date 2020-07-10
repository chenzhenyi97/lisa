var MechanismArray = [{
    title: 'A Research Mechanism Targeting Core Technologies and Cutting-edge Outcomes',
    imgUrl: './images/icon_about_overview_1@2x.png',
    list: [
        'Type',
        'Collaborative implementation supported by large research groups',
        'Systematic and standardized supportive services',
        'Professional transference system for research outcomes'
    ]
},{
    title: 'An Efficient and Flexible Talent Recruitment Mechanism',
    imgUrl: './images/icon_about_overview_2@2x.png',
    list: [
        'Build the world’s best task-based teams with both long-term and short-term researcher',
        'Explore diversiﬁed employment mechanisms oﬀering both full-time and temporary position',
        'Select chief scientists and principal investigators for research projects',
        'Establish the Zhejiang Lab Fellow System for Talent Training'
    ]
}];
$('.aboutOverview .mechanism .display-page .broadcast ul li').click(function(){
    $(this).addClass('highlight').siblings().removeClass('highlight');
    let index = $(this).index();
    $('.aboutOverview .mechanism .display-page .details .content').eq(index).addClass('show').siblings().removeClass('show');
    $('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').text(function(){
        return index+1;
    })
});
$('.aboutOverview .mechanism .display-page .broadcast .right .down').click(function(){
    let index = $('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').text();
    index = parseInt(index);
    if(index == 4){
        return ;
    }
    $('.aboutOverview .mechanism .display-page .broadcast ul li').eq(index).addClass('highlight').siblings().removeClass('highlight');
    $('.aboutOverview .mechanism .display-page .details .content').eq(index).addClass('show').siblings().removeClass('show');
    $('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').text(function(){
        return index + 1;
    });
});
$('.aboutOverview .mechanism .display-page .broadcast .right .up').click(function(){
    let index = $('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').text();
    index = parseInt(index);
    if(index == 1){
        return ;
    }
    $('.aboutOverview .mechanism .display-page .broadcast ul li').eq(index - 2).addClass('highlight').siblings().removeClass('highlight');
    $('.aboutOverview .mechanism .display-page .details .content').eq(index - 2).addClass('show').siblings().removeClass('show');
    $('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').text(function(){
        return index - 1;
    });
});
$('.aboutOverview .mechanism .display-page .broadcast .page .left span:first-child').bind("DOMNodeInserted", function(){
    let text = $(this).text();
    text = parseInt(text);
    if(text == 1){
        $('.aboutOverview .mechanism .display-page .broadcast .right .up').removeClass('can-click');
        if(!$('.aboutOverview .mechanism .display-page .broadcast .right .down').hasClass('can-click')){
            $('.aboutOverview .mechanism .display-page .broadcast .right .down').addClass('can-click');
        }
    }
    else if(text == 4){
        $('.aboutOverview .mechanism .display-page .broadcast .right .down').removeClass('can-click');
        if(!$('.aboutOverview .mechanism .display-page .broadcast .right .up').hasClass('can-click')){
            $('.aboutOverview .mechanism .display-page .broadcast .right .up').addClass('can-click');
        }
    }
    else{
        if(!$('.aboutOverview .mechanism .display-page .broadcast .right .up').hasClass('can-click')){
            $('.aboutOverview .mechanism .display-page .broadcast .right .up').addClass('can-click');
        }
        if(!$('.aboutOverview .mechanism .display-page .broadcast .right .down').hasClass('can-click')){
            $('.aboutOverview .mechanism .display-page .broadcast .right .down').addClass('can-click');
        }
    }

});
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

if(window.innerWidth>1367){
    var broadcastHeight = $('.aboutOverview .mechanism .display-page .broadcast').height();
    $('.aboutOverview .mechanism .display-page .details').height(broadcastHeight + 48);
}

$(window).load(function(){//在图片加载后运算
    if(window.innerWidth>=1920){
        (function(){
            var left = (window.innerWidth - 1280) / 2 - 220;
            $('.aboutOverview .nav-list').css({
                'left': left + 'px'
            });
            var s_height = $('.aboutOverview .nav-list').height();
            var w_height = $('.aboutOverview').height();
            var proportion = s_height / w_height;
            let itemTopArr = [];
            $('.show-module').each(function(){
                var top = $(this).offset().top - 100;//header条的宽度
                var index = $('.show-module').index($(this))
                itemTopArr.push(top)
                $('.aboutOverview .nav-list>div').eq(index).css({
                    'top': top * proportion + 'px'
                })
            })
            function scroll() {
                if ($(document).scrollTop() > 500) {
                    $('.aboutOverview .nav-list').addClass('fixed')
                } else {
                    $('.aboutOverview .nav-list').removeClass('fixed')
                }
                itemTopArr.forEach((item, index) => {
                    if ($(document).scrollTop() - item > -100) {
                        $('.aboutOverview .nav-list>div').removeClass('curr')
                        $('.aboutOverview .nav-list>div').eq(index).addClass('curr')
                    }
                    if ($(document).scrollTop() < 10) {
                        $('.aboutOverview .nav-list>div').removeClass('curr')
                    }
                })
        
        
                var scrollTop = $(document).scrollTop() > w_height ? w_height - 100 : $(document).scrollTop();
                var top = scrollTop * proportion;
                $('.aboutOverview .nav-list .buoy').css({
                    'top': top + 'px'
                })
        
            }
    
            $(document).bind('scroll', throttle(scroll, 100))
    
    
            $('.aboutOverview .nav-list>div').click(function () {
                var index = $('.aboutOverview .nav-list>div').index($(this))
                $(document).scrollTop(itemTopArr[index])
            })
        })();
    }
})