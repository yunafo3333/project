$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
})

$('a').click(function(){
    $('body').animate({
    screenTop: $(this).attr('href').offset().top
}, 1000);
});


$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});


// visible event


checkVisibility('div.intro');
$(window).on('scroll resize', function() {
    checkVisibility('div.intro');
});

function checkVisibility(selector) {
    var scrollTop = $(document).scrollTop();
    $(selector).each(function() {
        var $selector = $(this);
        var minScroll = $selector.offset().top - $(window).height();
        var maxScroll = $selector.offset().top + $selector.outerHeight();
        if (scrollTop < minScroll) {
            if ($selector.hasClass('down') !== true) {
                $selector.removeClass('show up');
                $selector.addClass('down');
            }
        } else if (scrollTop > maxScroll) {
            if ($selector.hasClass('up') !== true) {
                $selector.removeClass('down show');
                $selector.addClass('up');
            }
        } else {
            if ($selector.hasClass('show') !== true) {
                $selector.removeClass('down up');
                $selector.addClass('show');
            }
        }
    });
}