$(document).ready(function(){
    var autoplaySpeed=0
    $('.custom_carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 15000,
        cssEase: 'linear',
        autoplaySpeed: autoplaySpeed,
    });
});