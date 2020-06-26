checkHeader();
$(window).on('scroll', function() {
    checkHeader();
});

function checkHeader() {
    var scrollAmt = $(document).scrollTop();
    if (scrollAmt > 120) {
        $('#header').addClass('white');
        $(".support").attr("src","https://www.bang-olufsen.com/static/1.4.0.1524/images/common/icon_support.svg"); 
    } else {
        $('#header').removeClass('white');
        $(".support").removeattr(); 
    }



}