$(document).ready(function(){
    let tab_btn = $('.board .tap_area .tap_btn ul li') 
    let tab_name
    let tab_cnt = $('.board .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt_prant = $('.board .tap_area .tap_cnt')
    
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
        visual_swiper.autoplay.stop();  
        $(this).hide()
        $('.visual .btn_wrap .btn_play').show()
    })
    $('.visual .btn_wrap .btn_play').on('click', function(){
        visual_swiper.autoplay.start();  
        $(this).hide()
        $('.visual .btn_wrap .btn_stop').show()
    })
    


    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')

        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')

        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+ tab_name 
        console.log(tab_name)

        tab_cnt.removeClass('active')
        tab_cnt_prant.find(tab_name).addClass('active')
        
     })

     const excellence_swiper = new Swiper('.excellence .swiper', {
        slidesPerView: 1, 
        spaceBetween: 16, 
        breakpoints: {
            500: {  
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {  
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1300: {  
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        centeredSlides: true, 
        loop: true, 
    });

    const foundation_news_swiper = new Swiper('.foundation_news .swiper', { 

        slidesPerView: 1, 
        spaceBetween: 16, 
        centeredSlides: true, 
        loop: true, 

        navigation: { 
            nextEl: '.foundation_news .btn_next',  
            prevEl: '.foundation_news .btn_prev',  
        },

    });


})