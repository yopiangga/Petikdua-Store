
$(document).ready(function(){

    $('.btn-menu').click(function(){
        $('.menu').toggleClass('active');
        
    });


    $('.sign-in-sign-up .content .content-right .sign-up .btn-sign-up').click(function(){
        $('.sign-in-sign-up .content').toggleClass('active');

        $('.sign-in-sign-up .content .content-left .sign-in').addClass('animate__animated animate__fadeInRight');
        $('.sign-in-sign-up .content .content-right .sign-up-2').addClass('animate__animated animate__fadeInLeft');
    });

    $('.sign-in-sign-up .content .content-left .sign-in-2 .btn-sign-in').click(function(){
        $('.sign-in-sign-up .content').toggleClass('active');

        $('.sign-in-sign-up .content .content-right .sign-up').addClass('animate__animated animate__fadeInLeft');
        $('.sign-in-sign-up .content .content-left .sign-in-2').addClass('animate__animated animate__fadeInRight')

    });

    
});




