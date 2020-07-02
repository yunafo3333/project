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

