$(function(){
    //메인슬라이드
    setInterval(function(){
        $('.slide_wrap').animate({'margin-top':'-400px'}, function(){
            $('.slide:first').appendTo('.slide_wrap');
            $('.slide_wrap').css({'margin-top':'0'});
        })
    }, 3000);


    //탭메뉴
    $('.tab_menu li').click(function(){
        $('.tab_menu li').removeClass('active');
        $(this).addClass('active');

        $('.tab_box > div').removeClass('active');
        $('.tab_box > div').eq($(this).index()).addClass('active');
    });


});