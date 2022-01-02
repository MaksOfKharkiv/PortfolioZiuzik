window.$ = window.jQuery = require('jquery');

//Mobile menu
$('.header__navigation-button').on('click', function() {
    $('.header__navigation').toggleClass('opened');
    $('body').toggleClass('no-scroll');
})

$(document).ready(function (){

})

//Sticky
$(window).scroll(function(){
    const bannerHeight = $('.header').outerHeight();
    if($(window).scrollTop() >= bannerHeight) {
        $('.header__wrapper').addClass('sticky');
    }
    else {
        $('.header__wrapper').removeClass('sticky');
    }
})