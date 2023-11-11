var bannerSlider = function () {
    bannerSliderJS = new Swiper('.banner__slider', {
        direction: 'horizontal',
        loop: false,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".banner__slider .swiper-button-next",
            prevEl: ".banner__slider .swiper-button-prev"
        },
        pagination: {
            el: '.banner__slider-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="banner__slider-pItem ' + className + '"><span></span></span>';
            },
        },
        watchSlidesProgress: true
    });
}

var referencesSlider = function () {
    new Swiper('.references__slider', {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 1500
        },
        navigation: {
            nextEl: ".references__slider-wrap .swiper-button-next",
            prevEl: ".references__slider-wrap .swiper-button-prev",
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 2
            },
            "@0.75": {
                slidesPerView: 4
            },
            "@1.00": {
                slidesPerView: "auto"
            }
        },
    });
}


$('.home-tooltip__close-btn').on('click', function () {
    $('.home-tooltip').fadeOut(200);
});

bannerSlider();
referencesSlider();

