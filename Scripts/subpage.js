$(function () {
    $('.parsley-form').parsley();

    if (jQuery().ajaxForm) {
        $('form.contact-form').ajaxForm({
            beforeSubmit: function () {
                $(".contact-form .btn").attr('disabled', 'disabled');
            },
            success: function (data) {
                $(".contact-form .btn").removeAttr('disabled');

                if (data.Result == "OK" || data.Result == "EXIST") {
                    $('.contact-form').clearForm();
                    $('.contact-form').hide();
                    $('.contact-form').parent().find(".alert-danger").hide();
                    $('.contact-form').parent().find(".alert-warning").hide();
                    $('.contact-form').parent().find(".alert-success").fadeIn();
                    $('.contact-form').parent().find(".message-box").fadeIn();
                }
                else if (data.Result == "WRONG CAPTCHA") {
                    $('.contact-form').parent().find(".alert-warning").fadeIn();
                    $(".contact-form .btn-submit,.contact-form .btn-primary").removeAttr('disabled');
                }
                else {
                    $('.contact-form').parent().find(".alert-danger").fadeIn();
                }
            }
        });
    }
    
});

var sectorDetailSlider = function () {
    new Swiper('.sectors-detail__icon-slider', {
        spaceBetween: 50,
        loop: true,
        slidesPerView: 4,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".sectors-detail .swiper-button-next",
            prevEl: ".sectors-detail .swiper-button-prev",
        },
        breakpoints: {
            "0": {
                slidesPerView: 1,
                spaceBetween: 15
            },
            "768": {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            "992": {
                slidesPerView: 4,
                spaceBetween: 60,
            }
        }
    });
}

var ourAwardsSlider = function () {
    new Swiper('.our-awards__slider', {
        spaceBetween: 40,
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".our-awards .swiper-button-next",
            prevEl: ".our-awards .swiper-button-prev",
        }
    });
}

sectorDetailSlider();
ourAwardsSlider();

var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("video__play");
    playButton.addEventListener("click", function () {
        $('.video__bg').hide();
        $(this).hide();
        event.target.playVideo();
    });
}


var globalGridSlider = function () {
    new Swiper('.global-grid__slider', {
        spaceBetween: 24,
        loop: true,
        slidesPerView: 3,
        navigation: {
            nextEl: ".global-grid .swiper-button-next",
            prevEl: ".global-grid .swiper-button-prev",
        },
        breakpoints: {
            "0": {
                slidesPerView: 1
            },
            "768": {
                slidesPerView: 2,
            },
            "993": {
                slidesPerView: 3
            }
        }
    });
}

globalGridSlider();

$('.acc__item-title').on('click', function () {
    var accContent = $(this).next('.acc__item-content');
    $('.acc__item').removeClass('acc__item--selected');
    if (accContent.is(':hidden')) {
        $('.acc__item-content').slideUp(300);
        accContent.slideDown(300);
        $(this).parent().addClass('acc__item--selected');
    } else {
        accContent.slideUp(300);
        $(this).parent().removeClass('acc__item--selected');
    }
});


new Swiper('.microstrategy-slider', {
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".microstrategy-box .swiper-button-next",
        prevEl: ".microstrategy-box .swiper-button-prev",
    },
    pagination: {
        el: '.microstrategy-slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="microstrategy-slider__pagination-pItem ' + className + '"><span></span></span>';
        },
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
    },
    breakpoints: {
        "0": {
            effect: ''
        },
        "768": {
            effect: ''
        },
        "993": {
            effect: 'coverflow',
        }
    }
});

if ($('.gsm').length > 0)
    $('.gsm').maskPhone("0 (599) 999 99 99");

$('.gsm').on('mouseup', function () {
    var element = $(this)[0];
    if (this.setSelectionRange) {
        var len = $(this).val().split('_')[0].length;
        element.setSelectionRange(len, len);
    }
    else {
        $(this).val($(this).val());
        $(this).focus();
    }
    element.scrollTop = 9999;
});