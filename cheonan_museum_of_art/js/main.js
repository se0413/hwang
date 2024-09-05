$(document).ready(function(){

	setTimeout(function(){
		$('.visual strong').addClass('mr')
	}, 1000);
	setTimeout(function(){
		$('.visual h1 strong:nth-child(1).mr').removeClass('mr')
	}, 3000);

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

		autoplay: { 
			delay: 5000000,
			disableOnInteraction: true,
		},
		effect: "fade", 
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

})