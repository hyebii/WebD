$(function(){
    //헤더 슬라이드 아래로
    $('.depth01 > a').mouseenter(function(){
        $('.depth02').stop().slideUp();
        $(this).next('.depth02').stop().slideDown();
    });
    $('.depth01').mouseleave(function(){
        $('.depth02').slideUp();
    });

    //메인비주얼 좌우 슬라이드
    setInterval(function(){
        $('.slide_wrap').animate({
            'margin-left':'-100%'}, function(){
                $('.slide:first').appendTo('.slide_wrap')
                $('.slide_wrap').css({
                    'margin-left':'0'
                })
            })
    }, 3000);

    //팝업창
    $('.news li.click').click(function(){
        $('.popup').css({
            'display':'block'
        })
    });
    $('.popup .btn').click(function(){
        $('.popup').css({
            'display':'none'
        })
    });




    
});