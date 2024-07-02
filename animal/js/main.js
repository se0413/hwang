$(document).ready(function(){

    let pc_mobile
    let window_w

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){
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

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },
        effect: "fade",
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prv',  
        },

    });
    
    
    /*일시정지 버튼을 누르면
    팝업은 일시정지가 되고
    일시정지버튼은 사라지고 재생버튼은 나타남
    .visual .btn_wrap button.btn_stop
    */

   $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
   })

   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })

    /*스크롤되면 페이지가 header에 fixed 클래스를 추가
    맨위로 올라가면 클래스 삭제*/

    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    scroll_chk()

    $(window).scroll(function(){
        scroll_chk()

    })
    /* header .gnb .gnb_wrap ul.depth1 > li 
    메뉴에 마우스를 올리면 header 에 menu_over 클래스 추가
    마우스를 오버한 li에만 on 이라는 클래스 추가
    
    -->다른 li에 마우스를 오버하면 이전에 오버했던 메뉴의 on 클래스 삭제
        (이전에 오버했던 메뉴를 알기 어려움, 그래서 모든 메뉴의 on클래스를 삭제했다가 오버한 것만 추가)
    -->header에서 마우스를 아웃하면 그때 menu_over라는 클래스 삭제, 모든 메뉴에서 on클래스 삭제*/

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on') /*먼저 모두 삭제*/
            $(this).addClass('on') /*마우스 오버한 것만 줌*/
        }
            
    })

    $('header').on('mauseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_open').on('click', function(){
         if(pc_mobile == 'mobile'){
            $('header').addClass('mobile_open');
         }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){
           $('header').removeClass('mobile_open');
        }
    })




    /*find swiper*/

    const find1_swiper = new Swiper('.find .tab .find1 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find1 .btn_wrap .next ',
            prevEl: '.find .tab .find1 .btn_wrap .prev',
        },
    });/*find1 swiper*/

    const find2_swiper = new Swiper('.find .tab .find2 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find2 .btn_wrap .next ',
            prevEl: '.find .tab .find .btn_wrap .prev',
        },
    });/*find2 swiper*/

    /*
        find의 텝메뉴
        .find .tab > ul > li 을 클릭하면
        클릭한 li 만 on클래스 줌
        1. 원래 html에 기본적으로 하나의 li에 클래스가 있어야함 jequrey에서 누르면 바뀜
    */
   $('.find .tab > ul > li').on('click', function(){
    $('.find .tab > ul > li').removeClass('on') /*다 지웠다가*/
    $(this).addClass('on')
   })

})

