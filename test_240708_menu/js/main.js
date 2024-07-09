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


    /* 모바일 하위 메뉴 열고 닫기
        모바일에서 1차 메뉴를 클릭하면 (다만 pc에서는 작동되어야함)
            - 1차메뉴에 걸려있는 링크가 작동되면 안됨
            - 하위 메뉴가 열려 있음(li에 opem 클래스 추가)
            닫힌 1차메뉴를 클리하면 열리고 열린 1차 메뉴를 클릭하면 닫힘 동시에 여러개의 1차메뉴가 열릴 수 있음
    */
    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open') /*toggleClass 클래스를 눌렀을때 줬다 뺐다 함*/
        }     
    });

    /* 모바일 메뉴 버튼 작동
        메뉴 열기를 클릭하면 header 에 menu_open 클래스가 추가, header .gnb button.btn_open
        메뉴 닫기를 클리하면 header에 menu_open 클래스 삭제 , header .gnb button.btn_close
    */
   $('header .gnb button.btn_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
   })
   $('header .gnb button.btn_close').on('click', function(){
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        $('header').removeClass('menu_open')
    })
})
