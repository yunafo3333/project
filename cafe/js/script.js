
$(document).ready(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('on');
    if ($('.menu').is('.on')) {
      $('.main-gnb').stop().animate({
        width: '100%'
      });
    } else {
      $('.main-gnb').stop().animate({
        width: '0'
      });
    }
  });
});
