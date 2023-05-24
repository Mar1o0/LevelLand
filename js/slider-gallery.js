$(document).ready(function () {
    $('.section-gallery__blocks-slider').slick({
        accessibility:true,
        arrows: true,
        dots: false,
        infinity:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        useCSS:true,
        prevArrow: '<div class="slider__arrow slider__arrow--prev">❮</div>',
        nextArrow: '<div class="slider__arrow slider__arrow--next">❯</div>'    
    });
});