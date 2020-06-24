
    function openLayerPopup(selector, returnElement, width, height) {
        // 창크기 조정
        if (width === undefined) width = 70;
        if (height === undefined) height = 220;
        $(selector).css({'width': width + '%', 'height': height + 'px'});
        
        // 필요요소 추가 및 창 표시
        $(selector).before('<div id="layer-mask" tabindex="0"></div>').append('<a href="#" class="return"></a>').attr({'tabIndex': 0}).css({'display': 'block'});
        $(selector).find('div.footer img').attr({'tabIndex': 0});
        
        //포커스 이동 및 차단
        $(selector).trigger('focus');
        $('#layer-mask').on('focus', function() {
            $(selector).find('div.footer img').trigger('focus');
        });
        $(selector).find('a.return').on('focus', function() {
            $(selector).trigger('focus');
        });
        $('body').css({'overflow': 'hidden'});  // 본문 스크롤 차단
        
        // 창닫기
        $('#layer-mask').on('click', function() {
            $(selector).find('a.close').trigger('click')
        });
        $(selector).find('a.close').one('click', function() {
            $(returnElement).trigger('focus');
            $('#layer-mask').remove();
            $(selector).find('a.return').remove();
            $(selector).removeAttr('tabIndex').css({'display': 'none'});
            $('body').css({'overflow': 'initial'});  // 본문 스크롤 초기화
        });
    }

