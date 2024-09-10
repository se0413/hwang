$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });

    /* .visual .btn_wrap .btn_stop, btn_play */
    $('.visual .btn_wrap .btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_play').show()
    })
    $('.visual .btn_wrap .btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap .btn_stop').show()
    })
    
    /*.biz .list ul li.on or off*/
    $('.biz .list ul li').on('mouseenter', function(){ //1025부터 적용
        if($(window).width() > 1024){
            $('.biz .list ul li').removeClass('on')
            $('.biz .list ul li').addClass('off')
            $(this).removeClass('off')
            $(this).addClass('on')
        }
    })
    $('.biz .list').on('mouseleave', function(){
        $('.biz .list ul li').removeClass('on')
        $('.biz .list ul li').removeClass('off')
    })

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.news .btn_next',
            prevEl: '.news .btn_prev',
        },
        scrollbar: {
            el: ".news .swiper-scrollbar",
            hide: false,
            draggable: true,
        },
    });
})