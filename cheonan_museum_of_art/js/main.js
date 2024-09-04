$(document).ready(function(){

	setTimeout(function(){
		$('.visual strong').addClass('mr')
	}, 1000);
	setTimeout(function(){
		$('.visual h1 strong:nth-child(1).mr').removeClass('mr')
	}, 3000);

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {    /* 768px 이상일때 적용 */
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

})