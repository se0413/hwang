$(document).ready(function(){
    $('.gnb .depth1 > li').on('mouseenter focusin', function(){
        $(this).removeClass('on')
        $(this).addClass('on')
    })
    $('.gnb .depth1 > li').on('mouseover', function(){
        
    })
    $('.gnb .depth1 > li').on('mouseleave', function(){
        $(this).removeClass('on')
    })

    let idx = 1
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx-1).addClass('active')
    },3000)

})