$(function() {
    /*
        ふわっと表示
    */

    function animation() {
        $('.js-fade-in-img').each(function() {
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = window.innerHeight;
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('js-scroll-img');
            } else {
                $(this).removeClass('js-scroll-img');
            }
        });
    }

    $(window).scroll(function() {
        animation();
    });
});
