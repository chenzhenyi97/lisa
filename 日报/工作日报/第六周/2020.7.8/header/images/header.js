;
(() => {
    var w_height = window.innerHeight;
    $('.mobile.header >.mobile_header_hover_box').css({ 'height': w_height - 48 + 'px' });


    $('.mobile_header_hover_box .mobile_header_hover_box_main>.list>.list_head').bind('click', function() {
        if ($(this).parent().hasClass('mobile_nav_active')) {
            $(this).parent().removeClass('mobile_nav_active')
        } else {
            $(this).parent().addClass('mobile_nav_active').siblings().removeClass('mobile_nav_active')
        }
    })

    $('.mobile_header_hover_box .mobile_header_hover_box_main>.list>.list_head> span').bind('click', function(e) {
        e.stopPropagation()
    })

    $('.list_child_box .child_list_head').bind('click', function() {
        if ($(this).parent().hasClass('child_list_active')) {
            $(this).parent().removeClass('child_list_active')
        } else {
            $(this).parent().addClass('child_list_active').siblings().removeClass('child_list_active')
        }
    })

    $('.header>.header_head>.selectShowIco').bind('click', function() {
        var $header = $(this).parent().parent();
        if ($header.hasClass('showSelect')) {
            $header.removeClass('showSelect')
        } else {
            $header.addClass('showSelect')
        }
    })
    $('.mobile_header_hover_box').bind('click', function() {
        $('.header').removeClass('showSelect')
    })
    $('.mobile_header_hover_box_main').bind('click', function(e) {
        e.stopPropagation()
    });
    let hideTimer;
    $(".nav_item").bind("mouseenter", function(e) {
        if (hideTimer) {
            clearTimeout(hideTimer);
        }
        $(".header_hover_block").show();
    }).bind("mouseleave", function(e) {
        hideTimer = setTimeout(() => {
            $(".header_hover_block").hide();
        }, 500);
    });
    $(".hover_main").bind("mouseenter", function(e) {
        if (hideTimer) {
            clearTimeout(hideTimer);
        }
        $(".header_hover_block").show();
    }).bind("mouseleave", function(e) {
        hideTimer = setTimeout(() => {
            $(".header_hover_block").hide();
        }, 500);
    });
})();