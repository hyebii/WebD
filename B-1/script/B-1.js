$(function(){
    //헤더 슬라이드 스르륵
    $('.depth01').mouseenter(function(){
        $('.depth02, .bg').stop().slideDown();
    })
    $('.depth01').mouseleave(function(){
        $('.depth02, .bg').stop().slideUp();
    })

    //메인비주얼 슬라이드 좌우
    setInterval(function(){
        $('.slide_wrap').animate({'margin-left':'-100%'}, function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-left':'0'})
        })
    },3000);

    //탭메뉴
    $('.tab_menu li').click(function(){
        $('.tab_menu li').removeClass('active')
        $(this).addClass('active')

        $('.tab_box > div').removeClass('active')
        $('.tab_box > div').eq($(this).index()).addClass('active')
    });


    //팝업창

    $('.news ul li.click').click(function(){
        $('.popup').css({
            'display':'block'
        })
    });
    $('.popup .btn').click(function(){
        $('.popup').css({
            'display':'none'
        })
    });

}); // end