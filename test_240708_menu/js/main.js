$(document).ready(function(){
    /* 1025이상 px, 1024이하 mobile */
    let pc_mobile
    let window_w /*브라우저의 넓이*/

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //1025 이상 pc버전
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }

    resize_chk() /*html 이 로딩된 이후 단 한번 실행*/
    $(window).resize(function(){ /*브라우저가 리사이즈 될때마다*/
        resize_chk()
    })

    /*
        pc에서 메뉴에 마우스를 오버하면
        header 한테 menu_over 클래스
        오버한 li 에 ( header .gnb .gnb_wrap ul.depth1 > li ) 에 menu_open 클래스
    */
   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        /*pc 일때만 작동되어야함, on 명령은 이벤트 헨들러(감시)로 pc에서만 작동되게 못함*/
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
   })

   $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child ').on('focusout',function(){
        /*1차메뉴 li 중 마지막 li의 하위 메뉴 li중 마지막 li*/
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
})
