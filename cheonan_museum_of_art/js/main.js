$(document).ready(function(){

    const news_swiper = new Swiper('.news .swiper', { 
        slidesPerView: 'auto', 
        spaceBetween: 16, 
        breakpoints: {
            768: {   
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {    
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        scrollbar: {
            el: ".news .swiper-scrollbar",
            hide: false,
			dragSize: 24,
            draggable: true,
        },
    });

    const exhibition_swiper = new Swiper('.exhibition .swiper', { 
        slidesPerView: 2, 
        spaceBetween: 35, 
        breakpoints: {
            768: {  
                slidesPerView: 3,
                spaceBetween: 24, 
            },
            1150: {  
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        centeredSlides: true, 
        loop: true,  
        autoplay: {  
            delay: 2500,
            disableOnInteraction: true,
        },
    });

    const program_swiper = new Swiper('.program .swiper', { 

        slidesPerView: 1, 
        spaceBetween: 14, 
        breakpoints: {
            768: {  
                slidesPerView: 1,
                spaceBetween: 24, 
            },
        },
		autoplay: { 
			delay: 6000,
			disableOnInteraction: true,
		},
		loop: true,  

		pagination: {  
			el: '.program .paging', 
			clickable: true, 
			renderBullet: function (index, className) {   
				return '<div class="item '+className+'"><span class="txt' + (index + 1) + '"></span></div>';
			},
		},
        navigation: {  
            nextEl: '.program .btn_next',  
            prevEl: '.program .btn_prev',  
        },

	});

    var cultural_swiper = new Swiper(".cultural .swiper", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 0,
        speed: 500,
        loop: true,
        rotate: true,
        mousewheel: false,

      pagination: {  
            el: '.cultural .paging', 
            clickable: true, 

        },
        navigation: {  
            nextEl: '.cultural .btn_next',  
            prevEl: '.cultural .btn_prev',  
        },
    });

    let info_top
    let news_top
    let exhibition_top
    let program_top
    let collection_top
    let cultural_top
    let window_h
    let scrolling
    let life_w
    let goldfish_h2

    function scroll_chk(){
        window_h = $(window).height() //브라우저높이
        scrolling = $(window).scrollTop() //스크롤된 값
        info_top =$('.info').offset().top
        news_top = $('.news').offset().top
        exhibition_top = $('.exhibition').offset().top
        program_top = $('.program').offset().top
        collection_top = $('.collection').offset().top
        cultural_top = $('.cultural').offset().top


        if(scrolling > (info_top - window_h + (window_h / 2))){
            $('body').addClass('w_bg')
        }else{
            $('body').removeClass('w_bg')
        }

    }

    scroll_chk() 
    $(window).scroll(function(){ 
        scroll_chk()
    })
    $(window).resize(function(){
        scroll_chk()
    })

	setTimeout(function(){
		$('.visual strong').addClass('mr')
	}, 1000);
	setTimeout(function(){
		$('.visual h1 strong:nth-child(1).mr').removeClass('mr')
	}, 3000);


})
