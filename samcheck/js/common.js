$(document).ready(function(){
    let win_w 
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })


    $('header').on('mouseenter focusin', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        //마우스를 아웃했을때 fixed 클래스를 삭제하는 건 맨 상단에 있을때만 가능
        if(scrolling <= 0){
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }   
        // console.log(scrolling)
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('.header_sub').addClass('fixed')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
            $('.header_sub').removeClass('fixed')
        }
    })

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });
    

    //header .gnb .gnb_open, header .gnb .gnb_close
    $('header .gnb .gnb_open').on('click', function(e){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    //footer famillysite
    $('footer .famillysite button.btn_open').on('click', function(){
        $('footer .famillysite').addClass('open')
        $('footer .famillysite ul').slideDown()
    })
    $('footer .famillysite button.btn_close').on('click', function(){
        $('footer .famillysite').removeClass('open')
        $('footer .famillysite ul').slideUp()
    })
})