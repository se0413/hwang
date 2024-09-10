$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { 

        effect: "fade", 
        autoplay: {  
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  

        pagination: {  
            el: '.visual .paging', 
            clickable: true,  
        },
        

        navigation: { 
            nextEl: '.visual .btn_next',  
            prevEl: '.visual .btn_prev',  
        },

    });

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
    
})