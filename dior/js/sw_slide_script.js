$(function () {

        var swiper = new Swiper('#best-seller .swiper-container', {
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
        var swiper = new Swiper('#campaign.swiper-container', {
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: false,
            },
            slidesPerView: 1,
            spaceBetween: -50,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

        });

})