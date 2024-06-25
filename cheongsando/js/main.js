/*document.rady를 써야함*/
$(document).ready(function(){ //문서가 로딩된 이후 단 1번만 실행

    console.log('test')

    let scrolling = $(window).scrollTop()
    console.log(scrolling)

    /*브라우저가 스크롤이 조금이라도 되면 header에 fixed라는 클래스를 추가
    맨위로 올라가면 fixed라는 클래스를 삭제*/

    function scroll_chk(){ //함수를 선언
        //scrolling이라는 변수에 현재 스크롤 된 것을 저장
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤 값이 0보다 크면 - 
            $('header').addClass('fixed')
        }else{//스크롤 값이 0이면 - 맨위로 스크롤
            $('header').removeClass('fixed')
        }
    }

    scroll_chk() //함수를 호출

    $(window).scroll(function(){ //브라우저가 스크롤 할대마다 실행
        scroll_chk()
    })

    /*
        .tour .list ul li 한태 오버한 li 한테만 active클래스르 줄꺼임
        이전에 active클래스를 가지고 있었던 li에서는 active 삭제
        -- 무조건 하나의 li 한테만 active클래서 들어가야함

        --> 이전에 오버한 li는 알기 여러움
        -- 모든 li에 있는 active를 모두 삭제하고, 오버한 li한테만 active 클래스 추가
    */
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        $(this).addClass('active') //수많은 li중에서 오버한 li 한개를 뜻함
    })

    /*
    footer .familly button.btn_open 을 클릭하면
    footer .familly button.btn_open 에 open 클래스를 줘야함
    footer .familly button.btn_close 를 클릭하면
    footer .familly button.btn_open 에 open 클래스를 삭제함
    */

    $('footer .familly button.btn_open').on('click', function(){
        $('footer .familly').addClass('open')
        $('footer .familly .list').slideDown()
    })
    $('footer .familly button.btn_close').on('click', function(){
        $('footer .familly').removeClass('open')
        $('footer .familly .list').slideUp()
    })
})