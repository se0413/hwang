$(document).ready(function(){
    /*
        pc 인지 mobile 인지 구분
        1024 이하는 mobile 1025 이상은 pc

        pc 모드일때 메뉴에 마우스 오버시 / header .header_sub .gnb .gnb_wrap .depth1 > li
        1. header 에 menu_over 클래스
        2. 1차 메뉴 li에 over 클래스

        브라우저의 스크롤을 조금만 내려도 header에 fixed 클래스
        다시 맨 위로 이동하면 fixed 클래스 삭제
    */

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
        console.log(scroll_top)
        if(scrolling > 50){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    function resize_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){ //pc 일때
            pc_mobile = 'pc'
        }else{ // mobile 일때
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    resize_chk()// 로딩될때 한번
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk() //로딩되었을때 1번실행
    $(window).scroll(function(){
        scroll_chk() //스크롤할때마다 1번 실행
    })

    $('header .header_sub .gnb .gnb_wrap .depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .header_sub .gnb .gnb_wrap .depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap .depth1 > li').removeClass('over')
    })
    $('header .header_sub .gnb .gnb_wrap .depth2 > li:last-child ul.depth2 > li:last-child > a').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap .depth1 > li').removeClass('over')
    })

    /*
        mobile 버전 메뉴
        header .header_sub .gnb .gnb_wrap .depth1 > li > a 를 클릭시
        1차의 href 값을 무력화 (클릭해도 해당페이지를 이동되지 않게 함) (ex 1차메뉴 누르면 2차메뉴중 하나 골라서 이동하게 했던것)
        li 에 open 클래스를 줌
        열려있는 메뉴를 클릭하면 닫힘
        닫힌 메뉴를 클릭하면 열림
    */

        $('header .header_sub .gnb .gnb_wrap .depth1 > li > a ').on('click', function(e){
            if(pc_mobile == 'mobile'){ //모바일에서만 작동
                e.preventDefault(); //1차의 href 값을 무력화 (클릭해도 해당페이지를 이동되지 않게 함)
                $(this).parent().toggleClass('open')
            }
        })

        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        //스크롤금지
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        //스크롤금지 해제
        $('header .header_sub .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_open')
        })
        $('header .header_sub .gnb .gnb_close').on('click', function(){
            $('header').removeClass('menu_open')
        })
})