
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

    $('.home-intro .btn-right').click(function(){
        $('.home-intro .slide-1').removeClass('active');
        $('.home-intro .slide-2').addClass('active animate__animated animate__fadeInRight');
    });

    $('.home-intro .btn-left').click(function(){
        $('.home-intro .slide-1').addClass('active animate__animated animate__fadeInLeft');
        $('.home-intro .slide-2').removeClass('active');
    });





    $('.home-product .content .title .button .btn-all').click(function(){
        $('.home-product .content .body .fruits').removeClass('unActive');
        $('.home-product .content .body .vegetables').removeClass('unActive');
        $('.home-product .content .body .garlics').removeClass('unActive');
        $('.home-product .content .body .seafoods').removeClass('unActive');
        $('.home-product .content .body .meets').removeClass('unActive');

        $('.home-product .content .title .button .btn-all').addClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlic').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-fruits').click(function(){
        $('.home-product .content .body .fruits').removeClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').addClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlic').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-vegetables').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').removeClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').addClass('active');
        $('.home-product .content .title .button .btn-garlic').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-garlics').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').removeClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlic').addClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-seafoods').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').removeClass('unActive');
        $('.home-product .content .body .meets').addClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlic').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').addClass('active');
        $('.home-product .content .title .button .btn-meets').removeClass('active');
    });

    $('.home-product .content .title .button .btn-meets').click(function(){
        $('.home-product .content .body .fruits').addClass('unActive');
        $('.home-product .content .body .vegetables').addClass('unActive');
        $('.home-product .content .body .garlics').addClass('unActive');
        $('.home-product .content .body .seafoods').addClass('unActive');
        $('.home-product .content .body .meets').removeClass('unActive');

        $('.home-product .content .title .button .btn-all').removeClass('active');
        $('.home-product .content .title .button .btn-fruits').removeClass('active');
        $('.home-product .content .title .button .btn-vegetables').removeClass('active');
        $('.home-product .content .title .button .btn-garlic').removeClass('active');
        $('.home-product .content .title .button .btn-seafoods').removeClass('active');
        $('.home-product .content .title .button .btn-meets').addClass('active');
    });

    $('.home-product .content .body .produk .add-shopping').click(function(){
        $('nav .content .icon .cart .notif').addClass('animate__animated animate__bounce');
    });

    $('.home-product .content .body .produk .add-shopping').hover(function(){
        $('nav .content .icon .cart .notif').removeClass('animate__animated animate__bounce');
    });


    
});




