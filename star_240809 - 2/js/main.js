$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseover focusin', function(){
        $('header .gnb .depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb .depth1 > li').removeClass('over')
    })

    $('.news .tab > li').click(function(){
        $('.news .tab > li').removeClass('active')
        $(this).addClass('active')
    })

    $('.popup_layer').click(function(){
        $('.popup').show()
    })
    $('.close button').click(function(){
        $('.popup').hide()
    })

    let idx = 1
    var obj_left
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }

        obj_left = -(idx-1)*1200

        $('.visual ul').animate({
            left:obj_left
        },500)
    },3000)
})