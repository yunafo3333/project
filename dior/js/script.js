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


// slide


$('ul.indicator li a').on('click', function() {
    var index = $('ul.indicator li').index($(this).parent());
    // var index = $(this).parent().index();
    showSlide(index + 1);
});

$('p.control a.prev').on('click', function() {
    var index = $('ul.indicator li').index($('ul.indicator li.on'));
    // var index = $('ul.indicator li.on').index();
    index = (index <= 0) ? 3 : (index - 1);
    showSlide(index + 1);
});

$('p.control a.next').on('click', function() {
    var index = $('ul.indicator li').index($('ul.indicator li.on'));
    // var index = $('ul.indicator li.on').index();
    index = (index >= 3) ? 0 : (index + 1);
    showSlide(index + 1);
});

function showSlide(n) {
    $('ul.slide li').css({'display': 'none'});
    $('ul.slide li:eq(' + (n - 1) + ')').css({'display': 'block'});
    $('ul.indicator li').removeClass('on');
    $('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
}
