$(document).ready(function(){
   
    let scrolling
    let scroll_top //header 고정 시작 값
    let window_w
    let mobile_size = 1024
    let pc_mobile

    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 50
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
       //console.log(scroll_top)
    }

    function resize_chk(){
        window_w = $(window).width()
        //console.log(window_w)
        if(window_w > mobile_size){ //pc 일때
            pc_mobile = 'pc'
        }else{ // mobile 일때
            pc_mobile = 'mobile'
        }
        //console.log(pc_mobile)
    }
    resize_chk()// 로딩될때 한번
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk() //로딩되었을때 1번실행
    $(window).scroll(function(){
        scroll_chk() //스크롤할때마다 1번 실행
    })

   
   
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).removeClass('on')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).removeClass('on')
    })

    $('header .gnb .gnb_wrap .depth1 > li > a ').on('click', function(e){
        if(pc_mobile == 'mobile'){ //모바일에서만 작동
            e.preventDefault(); //1차의 href 값을 무력화 (클릭해도 해당페이지를 이동되지 않게 함)
            $(this).parent().toggleClass('open')
        }
    })

    $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        //스크롤금지
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        //스크롤금지 해제
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    $('.show_event .se_borad ul li').on('mouseover', function(){
        $('.show_event .se_borad ul li').removeClass('on')
        $(this).addClass('on')
    })
    $('.show_event .se_borad ul li').on('mouseleave', function(){
        $('.show_event .se_borad ul li').removeClass('on')
        $(this).removeClass('on')
    })

    $('.theme .theme_cnt ul li ').on('mouseover', function(){
        $('.theme .theme_cnt ul li ').removeClass('on')
        $(this).addClass('on')
    })
    $('.theme .theme_cnt ul li ').on('mouseleave', function(){
        $('.theme .theme_cnt ul li ').removeClass('on')
        $(this).removeClass('on')
    })

})