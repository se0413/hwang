$(document).ready(function(){
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
})
