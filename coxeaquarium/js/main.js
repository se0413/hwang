$(document).ready(function(){

	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['COEX', 'INFORMATION', 'Show & Event', 'Stamp Zone', 'Photo review', 'Theme Zone', 'Location'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			
		},

		responsiveWidth: 1025
	});

	const visual_swiper = new Swiper('.visual .swiper', { 

		autoplay: { 
			delay: 5000,
			disableOnInteraction: true,
		},
		effect: "fade", 
		loop: true,  

		pagination: {  
			el: '.visual .paging', 
			clickable: true, 
			renderBullet: function (index, className) {   
				return '<div class="item '+className+'"><span class="txt' + (index + 1) + '"></span></div>';
			},
		},

	});

	$('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  
   })

   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start(); 
    })

	const photo_review_swiper = new Swiper('.photo_review .swiper', { 
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1280: {    /* 1280px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 26,
			},
		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 2500,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});

})