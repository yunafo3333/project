$(function () {

        var swiper = new Swiper('.swiper-container', {
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
})