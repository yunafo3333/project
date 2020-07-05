
checkHeader();
$(window).on('scroll', function() {
    checkHeader();
});


function checkHeader() {
    var scrollAmt = $(document).scrollTop();
    if (scrollAmt > 1000) {
        $('#header').addClass('white');
        $(".support").attr("src","img/icon_support_black.svg"); 
        $(".store").attr("src","img/icon_store_black.svg"); 
        $(".cart").attr("src","img/cart_black.svg");  
        $(".primary-logo").attr("src","img/primary_logo_black.svg"); 
        $(".menu.bars-btn span").css({"background-color": "#000"}); 
    } else {
        $('#header').removeClass('white');
        $(".support").attr("src","img/icon_support_white.svg");
        $(".store").attr("src","img/icon_store_white.svg"); 
        $(".cart").attr("src","img/cart-white.svg");  
        $(".primary-logo").attr("src","img/primary-logo-white.svg"); 
        $(".menu.bars-btn span").css({"background-color": "#fff"}); 
    }

}



