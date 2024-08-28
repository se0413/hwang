$(document).ready(function(){

	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: false, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['COEX', 'INFORMATION', 'Show & Event', 'Stamp Zone', 'Photo review', 'Theme Zone', 'Location'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		lockAnchors: true,
		anchors: ['visual', 'info', 'show_event', 'stamp', 'photo_review', 'theme', 'location'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if((destination.index == 1)||(destination.index == 3)||(destination.index == 4)){ 
				$('header').addClass('dark')
				$('.fp_nav').addClass('dark')
			}else{
       		 	$('header').removeClass('dark')
				$('.fp_nav').removeClass('dark')
      		}
			console.log(destination.index)
			$('.fp_nav ul li').removeClass('active')
			$('.fp_nav ul li').eq(destination.index).addClass('active')

			if(destination.index == 1){
				$('.tree .count span').counterUp(); /* tree페이지로 왔을때만 실행 */
			}
		},

		responsiveWidth: 768 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});

	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 3000,
		// 	disableOnInteraction: true,
		// },
		effect: "fade", /* fade 효과 */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<div class="item '+className+'"><span class="txt' + (index + 1) + '"></span></div>';
			},
		},

	});

	const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 1280px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 14,
			},
			1240: {    
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1600: {    
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// }
	});
})