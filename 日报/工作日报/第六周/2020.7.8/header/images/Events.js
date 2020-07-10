function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
if(!!placeholderSupport()){
    $('.NewsAndEvents.Events .search_bar .placeholder').addClass('hidden');
}
else{
    $('.NewsAndEvents.Events .search_bar .input').focus(function(){
        $(this).parent().children('.placeholder').addClass('hidden');
    }).blur(function(){
        if($(this).val().length == 0)
            $(this).parent().children('.placeholder').removeClass('hidden');
    })
}
if(window.innerWidth<1367 && window.innerWidth>768){
    $('.NewsAndEvents.Events .items-area .item').each(function(){
        let height = $(this).children('.item_right').height();
        console.log(height);
        $(this).height(height + 64);
    });
}