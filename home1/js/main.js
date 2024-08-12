$(document).ready(function(){
    $('.gnb').on('mouseenter focusin', function(){
        $('.gnb').addClass('menu_over')
    })
    $('.gnb').on('mouseleave', function(){
        $('.gnb').removeClass('menu_over')
    })
    $('.gnb .depth1 > li:last-child > .depth2 > li:last-child > a').on('focusout', function(){
        $('.gnb').removeClass('menu_over')
    })

    $('.board button').click(function(){
        $('.board > ul > li').removeClass('on')
    })
    $('.board > ul > li').click(function(){
        $(this).addClass('on')
    })

    $('.popup_layer').click(function(){
        $('.popup').show()
    })
    $('.close button').click(function(){
        $('.popup').hide()
    })

    let idx =1
    var obj_left
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        obj_left = -(idx-1)*1200
        $('.visual ul').animate({
            left : obj_left
        }, 500)
    }, 3000)
})