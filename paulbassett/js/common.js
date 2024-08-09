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
    $('header .header_sub .gnb .gnb_wrap .depth2 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .header_sub .gnb .gnb_wrap .depth1 > li').removeClass('over')
    })
})