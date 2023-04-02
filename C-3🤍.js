$(function(){
    //🤍
    //헤더 메뉴 hover 나타나기(오른쪽)
    $('.depth01 > a').mouseenter(function(){
        $('.depth02').css({
            'display':'none'
        })
        $(this).next('.depth02').css({
            'display':'block'
        })
    })
    $('.depth01').mouseleave(function(){
        $('.depth02').css({
            'display':'none'
        })
    })


    //메인비주얼 슬라이드$
    setInterval(function(){
        $('.slide_wrap').animate({'margin-left':'-100%'},function(){
            $('.slide:first').appendTo('.slide_wrap')
            $('.slide_wrap').css({'margin-left':'0'})
        })
    }, 3000);


    
});//end
