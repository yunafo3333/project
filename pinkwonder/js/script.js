'use strict';

/*menu*/
$(function () {
    $('.menu-bar').on('click', function () {
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

//banner-slide

function setBannerSlide(selector, status, speed) {
    var offsetLeft = 0;
    var boxWidth = $(selector).find('div.box').innerWidth();
    var barWidth = 0;
    var minOffsetLeft = 0;
    var numBanner = $(selector).find('ul.banner li').length;
    var bannerNow = 0;
    var bannerPrev = 0;
    var bannerNext = 0;
    var timerId = '';
    var isTimerOn = status;
    var timerSpeed = speed;



    if (isTimerOn === true) {
        $(selector).find('p.control a.play').addClass('on');
    } else {
        $(selector).find('p.control a.play').removeClass('on');
    }
    
    showBanner(1);
    
    $(selector).find('.btn a.prev').on('click', function () {
        showBanner(bannerPrev);
    });
    $(selector).find('.btn a.next').on('click', function () {
        showBanner(bannerNext);
    });
    $(selector).find('.btn a.play').on('click', function() {
        if (isTimerOn === true) {
            clearTimeout(timerId);
            $(this).removeClass('on');
            isTimerOn = false;
        } else {
            timerId = setTimeout(function() {showBanner(bannerNext);}, timerSpeed);
            $(this).addClass('on');
            isTimerOn = true;
        }
    });
    $(selector).find('ul.banner li a').on('focus', function() {
        var index = $('div.banner-slide ul.banner li').index($(this).parent());
        showBanner(index + 1);
    });
    $(window).on('resize', function() {
        setBannerStatus();
    });
    
    
    
    
    
    
    
    function setBannerStatus() {
        boxWidth = $(selector).find('div.box').innerWidth();
        barWidth = 0;
        $(selector).find('ul.banner li').each(function() {
            barWidth += $(this).outerWidth(true);
        });
        $(selector).find('ul.banner').css({'width': barWidth + 'px'});
        minOffsetLeft = boxWidth - barWidth;
        $(selector).find('ul.banner li').each(function(i) {
            if (-$(this).position().left < minOffsetLeft) {
                numBanner = (i + 1);
                return false;
            }
        });
        if (bannerNow !== 0) showBanner(bannerNow);
    }
    

    
    
    function showBanner(n) {
        clearTimeout(timerId);
        offsetLeft = -$(selector).find('ul.banner li:eq(' + (n - 1) + ')').position().left;
        //
        $(selector).find('ul.banner li').removeClass('on');
        $(selector).find('ul.banner li:eq(' + n + ')').addClass('on');
        
        $(selector).find('ul.banner').css({
            'transition': 'left 0.5s',
            'left': offsetLeft + 'px'
        });
        bannerNow = n;
        bannerPrev = (n <= 1) ? bannerNow : (n - 1);
        bannerNext = (n >= (numBanner - 1)) ? bannerNow : (n + 1);
        if (isTimerOn === true) {
            timerId = setTimeout(function() {showBanner(bannerNext);}, timerSpeed);
        }
    }
}








//header

function headerOn(selector) {


    $('a[href="#"]').on('click', function (e) {
        /*function에 e를 넣으면 event객체를 잡아올 수 있음*/
        e.preventDefault();
    });

    $('.menu').on('mouseenter focus', function () {
        $(selector).addClass('open');
    });
    $('.menu').on('mouseleave', function () {
        $(selector).removeClass('open');
    });
    $(selector).each(function () {
        var $win = $(window);
        var $header = $(this);

        //헤더의 기본 위치 저장
        var headerOffsetTop = $header.offset().top;

        $win.on('scroll', function () {
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
                $('.menu').addClass('on', function () {
                    $('.menu').on('mouseenter focus', function () {
                        $(selector).addClass('open');
                        $('.menu-bar').addClass('on');
                    });
                    $('.menu').on('mouseleave', function () {
                        $(selector).removeClass('open');
                        $('.menu-bar').removeClass('on');
                    });
                });
                $('.menu-bar').on('click', function () {
                    if ($('.menu-bar').is('.on')) {
                        $(selector).addClass('open')
                    } else {
                        $(selector).removeClass('open')
                    }
                })
            } else {
                $header.removeClass('on');
            }
        });
    });
}

/*header*/
$(function () {

});

/*$(function() {
	//고정헤더
	$(selector).each(function() {
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
/*
$(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() > 460) {
          $(selector).addClass('bg');
        } else {
          $(selector).removeClass('bg');
        }
      });
      
      $(window).scroll(function() {
        if ($(this).scrollTop() > $(selector).height()) {
          $('#quick').addClass('on')
        } else {
          $('#quick').removeClass('on');
        }
      });
    });
*/
