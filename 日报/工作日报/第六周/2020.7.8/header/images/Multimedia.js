function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
if(!!placeholderSupport()){
    $('.NewsAndEvents.Multimedia .search_bar .placeholder').addClass('hidden');
}
else{
    $('.NewsAndEvents.Multimedia .search_bar .input').focus(function(){
        $(this).parent().children('.placeholder').addClass('hidden');
    }).blur(function(){
        if($(this).val().length == 0)
            $(this).parent().children('.placeholder').removeClass('hidden');
    })
}

if(window.innerWidth > 1366){
    $('.NewsAndEvents.Multimedia .items-area .item').click(function(){
        $('.multimedia_detail').addClass('show');
        if($(this).hasClass('photo')){
            $('.multimedia_detail_main.photo').removeClass('hidden');
        }
        if($(this).hasClass('video')){
            $('.arrow_left').addClass('hidden');
            $('.arrow_right').addClass('hidden');
            $('.multimedia_detail_main.video').removeClass('hidden');
        }
    })

    $('.multimedia_detail .close').click(function(){
        $('.multimedia_detail').removeClass('show');
        $('.arrow_left').addClass('hidden');
        $('.arrow_right').removeClass('hidden');
        $('.multimedia_detail_main').addClass('hidden');
    })
    $('.arrow_left').click(function(){
        let index = $('.multimedia_detail_main .img-item').index($('.multimedia_detail_main .img-item.active'))
        if(index == 0)
            return;
        chooseImg(index-1);
    })

    $('.arrow_right').click(function(){
        let index = $('.multimedia_detail_main .img-item').index($('.multimedia_detail_main .img-item.active'))
        console.log(index);
        if(index == $('.multimedia_detail_main .img-item').length - 1)
            return;
        chooseImg(index+1);
    })
    $('.multimedia_detail_main .img-item').click(function(){
        chooseImg($(this).index());
    })
    function chooseImg(index){
        if(index == 0){
            $('.arrow_left').addClass('hidden');
        }
        else{
            $('.arrow_left').removeClass('hidden');
        }
        if(index == $('.multimedia_detail_main .img-item').length - 1)
            $('.arrow_right').addClass('hidden');
        else{
            $('.arrow_right').removeClass('hidden');
        }
        let src = $('.multimedia_detail_main .img-item').eq(index).children('img').src;
        $('.multimedia_detail_main .img-item').eq(index).addClass('active').siblings().removeClass('active');
        $('.multimedia_detail_main .big-image img').attr('src', src);
    }
}