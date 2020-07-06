$(function () {

    var numSlide = $('ul.slide li').length;
    var slideNow = 0;
    var effect = 'none';

    showSlide(1);

    $('ul.indicator li a').on('click', function () {
        var index = $('ul.indicator li').index($(this).parent());
        showSlide(index + 1);
    });


    function showSlide(n) {
        if (effect === 'fade') {
            if (slideNow === n) return false;
            $('ul.slide li:eq(' + (slideNow - 1) + ')').stop(true).animate({
                'opacity': 0
            }, 500, function () {
                $(this).css({
                    'display': 'none'
                });
            });
            $('ul.slide li:eq(' + (n - 1) + ')').css({
                'display': 'block',
                'opacity': 0
            }).stop(true).animate({
                'opacity': 1
            }, 500);
        } else {
            $('ul.slide li').css({
                'display': 'none'
            });
            $('ul.slide li:eq(' + (n - 1) + ')').css({
                'display': 'block'
            });
        }
        $('ul.indicator li').removeClass('on');
        $('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
        slideNow = n;
        slidePrev = (n <= 1) ? numSlide : (n - 1);
        slideNext = (n >= numSlide) ? 1 : (n + 1);
        //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
    }

})


$(function () {

    var swiper = new Swiper('#best-seller .swiper-container', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('#campaign.swiper-container', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        slidesPerView: 1,
        spaceBetween: -50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

})



jQuery(document).ready(function ($) {
    var revealClass = '.animated';
    var targetClass = '.has-scroll-reveal:not(' + revealClass + ')';
    var offset = 50; // Offset from bottom of viewport in pixels.

    var winHeight = $(window).height();

    // Recalc height of window in case of resize
    $(window).bind('resizeEnd', function () {
        winHeight = $(window).height();
    });

    // Fire when page loads
    triggerAnimation(revealClass, targetClass, offset, winHeight);

    // Also fire on scroll
    $(window).on('scroll', function () {
        triggerAnimation(revealClass, targetClass, offset, winHeight);
    }); // window.on('scroll')

}); // document.ready

function triggerAnimation(revealClass, targetClass, offset, winHeight) {

    // Get current scrollPos
    var trigger = $(window).scrollTop() + winHeight - offset;

    // Loop through elements we're affecting
    $(targetClass).each(function () {
        var elementOffset = $(this).offset().top;

        if (elementOffset < trigger) {

            $(this).addClass(revealClass.replace('.', ''));
        }
    });

}

/*
 * ResizeEnd
 *
 * Example:
 * $(window).bind('resizeEnd', function() {
 *  console.log('resize ended 500ms ago');
 * });
 */
$(window).resize(function () {

    if (this.resizeTO) clearTimeout(this.resizeTO);

    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 500);

});