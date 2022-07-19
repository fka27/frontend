$(document).ready(function(){
    var menu = $('ul.menu > li');

    menu.click(function (e) {
        e.preventDefault();   // a태그 했을 때  
        var i = $(this).index();
        // // 스타일 적용을 초기화 위해 삭제
        // menu.removeClass('on');
        // // 해당 되는 버튼 스타일 적용
        // $(this).addClass('on');

        var section = $('#contents > div').eq(i);
        var target = section.offset().top;

        $('html,body').animate({
            scrollTop: target
        });  
    });
    // 스크롤 이벤트가 적용될 때 버튼에 색상을 조절
    $(window).scroll(function () {
    var sct = $(window).scrollTop();
    var wintop = $(window).scrollTop() + 300;

    // $('#contents > div') 순서대로 하나씩 처리하는 문장,,, 순환처리문
        $('#contents > div').each(function () {
            var i = $(this).index(); 

            if ($(this).offset().top <= sct) {
                // 스타일 적용을 초기화 위해 삭제
                menu.removeClass('on');
                
                // 해당 되는 버튼 스타일 적용
                menu.eq(i).addClass('on');
            }
        })
        $('#q_mn').stop().animate({ top: wintop + "px" }, 500);
        // $('#q_mn').stop().animate({ 속성: "속성값", 속성: "속성값" }, 1000);
    })
});

