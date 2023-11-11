if ($(window).width() > 992) {
    $(".footer__nav-ul").masonry({
        itemSelector: ".footer__nav-li",
        percentPosition: true,
        horizontalOrder: true,
        transitionDuration: 0
    });
}

var navigationMasonry = function () {
    $(".header__submenuthree-ul").masonry({
        itemSelector: ".header__submenuthree-li",
        percentPosition: true,
        horizontalOrder: true,
        transitionDuration: 0
    });
}

$('.header__navigation-a').on('click', function (e) {
    var windowWidth = $(window).width();
    if ($(this).next('.header__submenu').length > 0 && windowWidth > 992) {
        e.preventDefault();
        $('.header__navigation-li').removeClass('header__navigation-li--isOpen');
        $(this).parent('.header__navigation-li').toggleClass('header__navigation-li--isOpen');
        navigationMasonry();
    }
});

$('.header__links-item--droprown').on('hover', function () {
    $(this).find('.header__links-submenu').stop().slideToggle();
});

$('.header__links-item--droprown').hover(function () {
    $(this).find('.header__links-submenu').stop(true, true).slideDown();
}, function () {
    $(this).find('.header__links-submenu').hide();
});

$('.header__navigation-closebtn').on('click', function (e) {
    $('.header__navigation-li--isOpen').removeClass('header__navigation-li--isOpen');
});

$('.header__submenu-link').on('click', function (e) {
    var windowWidth = $(window).width();
    if ($(this).next('.header__submenuthree').length > 0 && windowWidth > 992) {
        e.preventDefault();
        $(this).closest('.header__submenu-ul').find('.header__submenu-li').removeClass('header__submenu-li--selected');
        $(this).parent('.header__submenu-li').toggleClass('header__submenu-li--selected');
        $(this).closest('.header__submenu-ul').find('.header__submenu-li').removeClass('header__submenu-li--border');
        if ($(this).parent('li').prev().length > 0)
            $(this).parent('li').prev().addClass('header__submenu-li--border');

        navigationMasonry();
    }
});

$('.header__submenuthree-ul').each(function () {
    var subMenuItem = $(this).find('.header__submenuthree-li'),
        _this = $(this),
        windowWidth = $(window).width();
    if (subMenuItem.length >= 3 && windowWidth > 992) {
        $.each(_this.find('.header__submenuthree-li'), function (i) {
            if (i < 3) {
                _this.before('<span class="header__submenuthree-line"></span>');
            }
        });
    }

    if (subMenuItem.length > 1 && subMenuItem.length < 3 && windowWidth > 992) {
        $.each(_this.find('.header__submenuthree-li'), function (i) {
            if (i < 2) {
                _this.before('<span class="header__submenuthree-line"></span>');
            }
        });
    }

    if (subMenuItem.length == 1 && windowWidth > 992) {
        $.each(_this.find('.header__submenuthree-li'), function (i) {
            if (i < 1) {
                _this.before('<span class="header__submenuthree-line"></span>');
            }
        });
    }
});

var counter = function () {
    $('.counter').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
}

$(window).on('scroll', function () {
    var sectionContainer = $('.our-solutions');
    if (sectionContainer.length < 1)
        sectionContainer = $('.subpage__description');

    if (sectionContainer.length > 0) {
        if ($(window).scrollTop() >= sectionContainer.offset().top && !$('.company-information').hasClass('animate')) {
            $('.company-information').addClass('animate');
            counter();
        }
    }
});

if ($(window).width() < 992) {
    $('.header__submenu-li').removeClass('header__submenu-li--selected');
}

$('.header__navigation ul li a').click(function (e) {
    if ($(this).next('div').length > 0 && $(window).width() < 992) {
        e.preventDefault();
        $(this).next('div').addClass('header__submenu--selected');
        var subMenu = $(this).next('div').find('.header__navigation-container > ul > li:first');

        if (subMenu.length < 1)
            subMenu = $(this).next('div').find('> ul > li:first');

        var subHtml = '<li class=' + subMenu.attr('class') + '>' +
            '<a href="#" class="' + subMenu.find('a').attr('class') + ' header__submenu-link--back">GERİ</a>' +
            '</li>' +
            '<li class=' + subMenu.attr('class') + '>' +
            '<a href="#" class="' + subMenu.find('a').attr('class') + ' header__submenu-link--parentMenu">' + $(this).text() + '</a>' +
            '</li>';

        if (!subMenu.find('a').hasClass('header__submenu-link--back'))
            subMenu.before(subHtml);

        $('.header__navigation-ul').css({
            left: -$(window).width() * $('.header__submenu--selected').length
        });

        $(this).next('div').css({
            left: $(window).width()
        });

        $('.header__submenu-link--back, .header__submenu-link--parentMenu').removeClass('header__submenu-link--arrow');

        $('.header__navigation-ul').attr('data-left', $(window).width() * $('.header__submenu--selected').length);
    }
});

$(document).on('click', '.header__submenu-link--back', function (e) {
    var navigationUl = $(".header__navigation-ul");
    navigationUl.css({
        left: -(navigationUl.attr('data-left') - $(window).width())
    });
    navigationUl.attr('data-left', (navigationUl.attr('data-left') - $(window).width()))
    $(this).parent().parent().parent('div').removeClass('header__submenu--selected');
    $(this).parent().parent().parent().parent('.header__submenu').removeClass('header__submenu--selected');
});

$('.header__mobile-menu').on('click', function () {
    $(this).toggleClass('header__mobile-menu--open');
    $('.header__navigation').toggleClass('header__navigation--isOpen');
    $('.header__box').toggleClass('header__box--fixed');
    $('.header').toggleClass('header--pT');
});

var successStorySlider,
    expertiseSlider;
var successStorySliderConfig = function () {
    $('.success-story__slider').addClass('swiper');
    $('.success-story__slider > div:first-child').addClass('swiper-wrapper');
    $('.success-story__slider > div > div').addClass('swiper-slide');
    $('.success-story__slider > div:first-child').removeClass('row');
    $('.success-story__slider > div > div').removeClass('col-md-4');

    successStorySlider = new Swiper('.success-story__slider', {
        spaceBetween: 15,
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.success-story__slider-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="success-story__slider-pItem ' + className + '"><span></span></span>';
            },
        },
        breakpoints: {
            "0": {
                slidesPerView: 1,
                spaceBetween: 15
            },
            "768": {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            "1199": {
                slidesPerView: 3,
                spaceBetween: 15,
            }
        }
    });
}

var expertiseSliderConfig = function () {
    $('.expertise__slider').addClass('swiper');
    $('.expertise__slider > div:first-child').addClass('swiper-wrapper');
    $('.expertise__slider > div > div').addClass('swiper-slide');
    $('.expertise__slider > div:first-child').removeClass('row');
    $('.expertise__slider > div > div').removeClass('col-lg-3');

    expertiseSlider = new Swiper('.expertise__slider', {
        spaceBetween: 0,
        loop: true,
        autoHeight: false,
        navigation: {
            nextEl: ".expertise .swiper-button-next",
            prevEl: ".expertise .swiper-button-prev",
        },
        pagination: {
            el: '.expertise__slider-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="expertise__slider-pItem ' + className + '"><span></span></span>';
            },
        },
        breakpoints: {
            "0": {
                slidesPerView: 1,
                spaceBetween: 15
            },
            "768": {
                slidesPerView: 2,
                spaceBetween: 15,
            }
        }
    });
}

var breakpoint = window.matchMedia('(min-width: 992px)');
var breakpointChecker = function () {

    if (breakpoint.matches === true) {

        //if (successStorySlider !== undefined && $('.success-story__slider').length > 0) {
        //    successStorySlider.destroy(true, true);
        //    $('.success-story__slider').removeClass('swiper');
        //    $('.success-story__slider > div:first-child').removeClass('swiper-wrapper');
        //    $('.success-story__slider > div > div').removeClass('swiper-slide');
        //    $('.success-story__slider > div:first-child').addClass('row');
        //    $('.success-story__slider > div > div').addClass('col-md-4');
        //}

        if (expertiseSlider !== undefined && $('.expertise__slider').length > 0) {
            expertiseSlider.destroy(true, true);
            $('.expertise__slider').removeClass('swiper');
            $('.expertise__slider > div:first-child').removeClass('swiper-wrapper');
            $('.expertise__slider > div > div').removeClass('swiper-slide');
            $('.expertise__slider > div:first-child').addClass('row');
            $('.expertise__slider > div > div').addClass('col-lg-3');
        }

    } else {
        expertiseSliderConfig();
    }



};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
successStorySliderConfig();

$(function () {
    $('.header__search-btn').click(function (e) {
        e.preventDefault();
        $('.header__search-form').fadeToggle();
    })

    $('.cookie-band .btn').click(function () {
        $.cookie('AllowCookies', 'YES');
        $('.cookie-band').fadeOut();
    });
});