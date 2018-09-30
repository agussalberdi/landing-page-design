$(document).ready(function(){
    $(".slider").slick({
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 4000,
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('scrolled');
        }else{
            $('header').removeClass('scrolled');
        }
    });

    $('.hamburger').click(function(){
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active'); 
            $('.main-nav').slideUp();
        }else{
            $(this).addClass('is-active');
            $('.main-nav').slideDown();
        }
    });

    var color = $("#number").css("color");
    console.log(color);
    $("#number").click(function(){
        if ($(this).css("color") == color){
            $(this).css("color", "#f40bd3");
        }
        else{
            $(this).css("color",color);
        }

        $(this).css("transition","all 600ms");
    });

});