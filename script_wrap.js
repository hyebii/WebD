$(function () {
    //2차메뉴 스르륵
    $('.depth01').mouseenter(function(){
        $('.depth02, .bg').stop().slideDown();
    });

    $('.depth01').mouseleave(function(){
        $('.depth02, .bg').stop().slideUp();
    });


     //헤더 메뉴 hover 나타나기(오른쪽)
    $('.gnb1 .depth01 > a').mouseenter(function(){
        $('.gnb1 .depth02').css({
            'display':'none'
        })

        $(this).next('.gnb1 .depth02').css({
            'display':'block'
        })
    });

    $('.gnb1').mouseleave(function(){
        $('.gnb1 .depth02').css({
            'display':'none'
        })
    });


    //1차메뉴 밑으로 2차메뉴 나타나기
    $('.gnb2 .depth01 > a').mouseenter(function(){ 
        $('.gnb2 .depth02').stop().slideUp();
        $(this).next('.gnb2 .depth02').stop().slideDown();
    });
    $('.gnb2').mouseleave(function(){
        $('.gnb2 .depth02').slideUp();
    });


    //메인비주얼 슬라이드------------------------------------
    //슬라이드 스르륵
    $('.slide:gt(0)').hide()
    setInterval(function () {
        $('.slide:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide:first').appendTo('.slide_wrap')
    }, 3000);


    //메인비주얼 슬라이드 (좌우)------------------------------------
    //setInterval 시간설정하여 반복적으로 움직이도록 함. 3초마다 돌아감/3000 = 3초
    setInterval(function(){
        $('.main_slider .slide_wrap').animate({'margin-left':'-100%'},function(){
            $('.main_slider .slide:first').appendTo('.main_slider .slide_wrap')
            //첫번째 .slide뒤에 .slide_wrap 추가
            $('.main_slider .slide_wrap').css({'margin-left':'0'})
            //추가된 .slide_wrap의 위치 0
        })
    },3000)


    //메인비주얼 슬라이드 (위아래)------------------------------------
    setInterval(function(){
        $('.main_slider2 .slide_wrap').animate({'margin-top':'-350px'},function(){
            $('.main_slider2 .slide:first').appendTo('.main_slider2 .slide_wrap')
            $('.main_slider2 .slide_wrap').css({'margin-top':'0%'})
        })
    },3000)


    //탭메뉴
    $('.tab_menu li').click(function(){
        $('.tab_menu li').removeClass('active');
        $(this).addClass('active');

        $('.tab_box > div').removeClass('active');
        $('.tab_box > div').eq($(this).index()).addClass('active');
    });


    //팝업창
    $('.tab_box .news li.click').click(function(){
        $('.popup').css({
            'display' : 'block'
        })
    });

    $('.popup .btn').click(function(){
        $('.popup').css({
            'display' : 'none'
        })
    });





}); //end