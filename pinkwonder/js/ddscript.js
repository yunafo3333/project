$(function() {
    $('a[href="#"]').on('click', function(e) { /*function에 e를 넣으면 event객체를 잡아올 수 있음*/
   e.preventDefault();
})


})
/*menu*/
$(function() {
    
  $('.menu-bar').on('click', function() {
    $(this).toggleClass('on');
    
    if ($('.menu-bar').is('.on')) {
      $('.inner').stop().animate({
        left: 0
      });
    } else {
      $('.inner').stop().animate({
        left: '-100%'
      });
    }
  })
});


/*header*/
$(function() {
    $('header .menu').on('mouseenter focus', function() {
        $('header').addClass('open');
    });
    $('header .menu').on('mouseleave', function() {
        $('header').removeClass('open');
    });
    $('header').each(function() {
		var $win = $(window);
		var $header = $(this);
		
		//헤더의 기본 위치 저장
		var headerOffsetTop  = $header.offset().top;
		
		$win.on('scroll', function() {
			//윈도우의 스크롤양을 확인
			var scrollTop = $win.scrollTop();
			var $section = $('section');
			
			//scrollTop값을 정수화
			var scroll = Math.floor(scrollTop);
			var offset = Math.floor(headerOffsetTop);


			
			//(조건문)헤더 기본 위치 < 스크롤양 => 클래스속성 변경
			//기본위치로 돌아오면 => 클래스속성 변경
			if (180 < scroll) {
				$header.addClass('on');
                $('.menu').addClass('on', function() {
                    $('header').on('mouseenter focus', function() {
                        $('header').addClass('open');
                    });
                    $('header').on('mouseleave', function() {
                        $('header').removeClass('open');
                    });
                });
                $('.menu-bar').on('click', function() {
                    $('header').addClass('open');
                    /*if ($('.menu-bar').is('.on')) {
                        $('header').removeClass('open')
                    };*/
                })
			} else {
				$header.removeClass('on');
			}				
		});
	});
});

/*$(function() {
	//고정헤더
	$('header').each(function() {
		var $win = $(window);
		var $header = $(this);
		
		//헤더의 기본 위치 저장
		var headerOffsetTop  = $header.offset().top;
		
		$win.on('scroll', function() {
			//윈도우의 스크롤양을 확인
			var scrollTop = $win.scrollTop();
			var $section = $('section');
			
			//scrollTop값을 정수화
			var scroll = Math.floor(scrollTop);
			var offset = Math.floor(headerOffsetTop);


			
			//(조건문)헤더 기본 위치 < 스크롤양 => 클래스속성 변경
			//기본위치로 돌아오면 => 클래스속성 변경
			if (offset < scroll) {
				$header.addClass('on')
			} else {
				$header.removeClass('on');
			}
			/*background*/
			/*$header.on('mouseenter', function(){
				$header.addClass('bg');
			}).on('mouseleave', function(){
				$header.removeClass('bg');
			});					
		});
	});
});*/

/*quick*/
$(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() > 460) {
          $('header').addClass('bg');
        } else {
          $('header').removeClass('bg');
        }
      });
      
      $(window).scroll(function() {
        if ($(this).scrollTop() > $('header').height()) {
          $('#quick').addClass('on')
        } else {
          $('#quick').removeClass('on');
        }
      });
    });
