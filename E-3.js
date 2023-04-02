$(function(){
    //헤더 슬라이드 오른쪽
    $('.depth01 > a').mouseenter(function(){
        $('.depth02').css({
            'display':'none'
        })
        $(this).next('.depth02').css({
            'display':'block'
        })
    });
    $('.depth01').mouseleave(function(){
        $('.depth02').css({
            'display':'none'
        })
    });

    //메인비주얼 슬라이드 위아래
    setInterval(function(){
        $('.slide_wrap').animate({'margin-top':'-800px'}, function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({
                'margin-top':'0'
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




});//end