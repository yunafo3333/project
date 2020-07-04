$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});


$(function () {
    $('.gnb-inner li:first-child').each(function () {
        $(this).find('> a').append('<i class="fas fa-plus mobile"><span>열기/닫기</span></i>');
        $(this).find('.fas').css({
            'position': 'absolute',
            'right': 0,
            'top': '18px'
        })
    });
    $('.gnb-inner li:first-child').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb-inner').toggleClass('on');

        if ($(this).hasClass('on')) {
            $(this).find('> a > i').removeClass('fa-plus');
            $(this).find('> a > i').addClass('fa-minus');
        } else {
            $(this).find('> a > i').addClass('fa-plus');
            $(this).find('> a > i').removeClass('fa-minus');
        }

    });
});




