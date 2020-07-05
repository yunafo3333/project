$(document).ready(function(){
    preventDefaultAnchor();
    
    
});


function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
}



/* jQuery Pre loader */
$(window).load(function () {
    $('.preloader').fadeOut(1000);
});



/* Istope Portfolio */
jQuery(document).ready(function ($) {

    if ($('.iso-box-wrapper').length > 0) {

        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');

        $container.imagesLoaded(function () {

            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });

            $imgs.load(function () {
                $container.isotope('reLayout');
            })

        });


        $('.filter-wrapper li a').click(function () {

            var $this = $(this),
                filterValue = $this.attr('data-filter');

            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });


            if ($this.hasClass('selected')) {
                return false;
            }

            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');

            return false;
        });

    }

});


/* Navigation Bar*/
$(document).ready(function () {

    // Navbar Sticky

    (function () {
        var docElem = document.documentElement,
            didScroll = false,
            stickynav = 50;
        document.querySelector('.nav-container');

        function init() {
            window.addEventListener('scroll', function () {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 50);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= stickynav) {
                $('.nav-container').addClass('sticky');
            } else {
                $('.nav-container').removeClass('sticky');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();
    })();

});


$(document).ready(function () {

    "use strict";

    $('.menu-container').each(function (document) {
        $(this).find('.circle').attr('menu-link', document);
        $(this).find('.list-menu').clone().appendTo('body').attr('menu-link', document);
    });

    $('.menu-container .circle').click(function () {
        var linkedVideo = $('section').closest('body').find('.list-menu[menu-link="' + $(this).attr('menu-link') + '"]');
        linkedVideo.toggleClass('reveal-modal');

    });

    $('section').closest('body').find('.close-iframe').click(function () {
        $(this).closest('.list-menu').toggleClass('reveal-modal');
    });


    /* wow */
    new WOW({
        mobile: false
    }).init();

});