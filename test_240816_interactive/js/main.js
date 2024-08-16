$(document).ready(function(){
    let boost_top
    let life_top
    let hanhwa_top
    let goldfish_top
    let jellyfish_top
    let window_h
    let scrolling
    let life_w
    let goldfish_h2

    function scroll_chk(){
        window_h = $(window).height() //브라우저높이
        scrolling = $(window).scrollTop() //스크롤된 값
        boost_top =$('.boost').offset().top
        life_top = $('.life').offset().top
        hanhwa_top = $('.hanhwa').offset().top
        goldfish_top = $('.goldfish').offset().top
        jellyfish_top = $('.jellyfish').offset().top
        //console.log(window_h, scrolling, life_top)


        if(scrolling > (boost_top - window_h + (window_h / 2))){
            $('.boost').addClass('active')
        }else{
            $('.boost').removeClass('active')
        }


        if(scrolling > (life_top - window_h + (window_h / 5))){
            
            life_w = (scrolling - (life_top - window_h))*1.2 + 565

            if(life_w > $(window).width()){//사진 이 더 이상 늘어나지 않게 제한
                life_w = $(window).width() 
                $('.life').addClass('end')
            }

            //console.log(life_w)
            $('.life .tit .photo_wrap .photo').width(life_w)
        }


        if(scrolling > (hanhwa_top - window_h + (window_h / 5))){
            $('body').addClass('black_bg')
        }else{
            $('body').removeClass('black_bg')
        }

        if(scrolling > (hanhwa_top - window_h + (window_h / 4))){
            $('.hanhwa').addClass('active')
        }


        if(scrolling > (goldfish_top - window_h + (window_h / 5))){
            $('.goldfish').addClass('active')
            goldfish_h2 = (scrolling - (goldfish_top - window_h))*0.04
            console.log(goldfish_h2)
            $('.goldfish h2').css('transform', 'translateY(-'+goldfish_h2+'%)')
            //transform: translateY(0%);
            //.goldfish h2
        }
        if(scrolling > (jellyfish_top - window_h + (window_h / 3))){
            $('.jellyfish').addClass('active')
        }

    }
    scroll_chk() //로딩된 이후 1번
    $(window).scroll(function(){ //브라우저가 스크롤 될때마다
        scroll_chk()
    })
    $(window).resize(function(){ //브라우저가 리사이즈 될때마다
        scroll_chk()
    })
})


