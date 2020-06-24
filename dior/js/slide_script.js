$(function(){
  
  var numSlide = $('ul.slide li').length;
  var slideNow = 0;
  var effect = 'none';
  
  showSlide(1);
  
  $('ul.indicator li a').on('click', function() {
      var index = $('ul.indicator li').index($(this).parent());
      showSlide(index + 1);
  });

  
  function showSlide(n) {
      if (effect === 'fade') {
          if (slideNow === n) return false;
          $('ul.slide li:eq(' + (slideNow - 1) + ')').stop(true).animate({'opacity': 0}, 500, function() {
              $(this).css({'display': 'none'});
          });
          $('ul.slide li:eq(' + (n - 1) + ')').css({'display': 'block', 'opacity': 0}).stop(true).animate({'opacity': 1}, 500);
      } else {
          $('ul.slide li').css({'display': 'none'});
          $('ul.slide li:eq(' + (n - 1) + ')').css({'display': 'block'});
      }
      $('ul.indicator li').removeClass('on');
      $('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
      slideNow = n;
      slidePrev = (n <= 1) ? numSlide : (n - 1);
      slideNext = (n >= numSlide) ? 1 : (n + 1);
      //console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
  }
  
}
)