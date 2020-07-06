$(function () {
    $('.menu').on('click', function () {
        $(this).toggleClass('on');

        if ($('.menu').is('.on')) {
            $('.side-gnb-container').stop().animate({
                left: 0
            });
        } else {
            $('.side-gnb-container').stop().animate({
                left: '-100%'
            });
        }
    });
});