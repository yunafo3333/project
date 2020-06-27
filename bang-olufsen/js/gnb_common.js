checkHeader();
$(window).on('scroll', function() {
    checkHeader();
});

function checkHeader() {
    var scrollAmt = $(document).scrollTop();
    if (scrollAmt > 200) {
        $('#header').addClass('white');
        $(".support").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/icon_support_black.svg"); 
        $(".store").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/icon_store_black.svg"); 
        $(".cart").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/cart_black.svg");  
        $(".primary-logo").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/primary_logo_black.svg"); 
    } else {
        $('#header').removeClass('white');
        $(".support").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/icon_support_white.svg");
        $(".store").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/icon_store_white.svg"); 
        $(".cart").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/cart-white.svg");  
        $(".primary-logo").attr("src","https://yunafo3333.github.io/project/bang-olufsen/img/primary-logo-white.svg"); 
    }



}