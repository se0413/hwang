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

	$('header .gnb .btn_open').on('click', function(){
		$('header').addClass('menu_open')
	})
    $('header .gnb .btn_close').on('click', function(){
		$('header').removeClass('menu_open')
	})
})