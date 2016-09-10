(function($, document) {

    var width = $(window).width();
    var sp_width = 768;

    /**
     * メインビジュアルのスライダーの設定
     */
    var $main_visual = $(".main-visual__items__wrap");

    $main_visual.slick({
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoPlaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        asNavFor: '.main-visual__thumbnails__wrap'
    });


    /**
     * スマートフォン用のメインビジュアルのスライダーの設定
     */
    $(".main-visual--sp__items__wrap").slick({
        infinite: true,
        autoplay: true,
        autoPlaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        asNavFor: '.main-visual__items__wrap',
        arrow: false
    });


    $(".main-visual__thumbnails__wrap").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrow: false,
        asNavFor: '.main-visual__items__wrap',
        responsive: [{
            breakpoint: 980,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }]
    });

    $(".main-visual__direction__left").on("click", function () {
        $main_visual.slick("slickPrev");
    });

    $(".main-visual__direction__right").on("click", function () {
        $main_visual.slick("slickNext");
    });

    if ( width > sp_width ) {

        var $catch_area = $(".catch-area__slider__wrap");
        $catch_area.slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            focusOnSelect: true,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }]
        });

        $(".catch-area__slider__arrow__right").on("click", function () {
            $catch_area.slick("slickNext");
        });

        $(".catch-area__slider__arrow__left").on("click", function () {
            $catch_area.slick("slickPrev");
        });

    }



})(jQuery, document);

/**
 * スマートフォンのグローバルメニューのトグル
 */
(function () {

    // メニューのキャッシュ
    var $wrapper = $(".wrapper");
    var $gn = $(".global-navigation");
    var $gn_btn = $(".sp__toggle-menu .menu-trigger");
    // メニューのキャッシュ
    var $ub = $(".header__utilities-block");
    var $ub_btn = $(".sp__toggle-contact");

    $gn_btn.on("click", function (evt) {

        $ub_btn.removeClass("active");
        $ub.removeClass("active");

        var $elem = $(this);

        $elem.toggleClass("active");
        $gn.toggleClass("active");

        if (is_active()) {
            $wrapper.addClass("active");
        } else {
            $wrapper.removeClass("active");
        }

    });

    $ub_btn.on("click", function (evt) {

        $gn_btn.removeClass("active");
        $gn.removeClass("active");

        var $elem = $(this);

        $elem.toggleClass("active");
        $ub.toggleClass("active");

        if (is_active()) {
            $wrapper.addClass("active");
        } else {
            $wrapper.removeClass("active");
        }

    });

    function is_active () {
        var ub_is_active = $ub.hasClass("active");
        var gn_is_active = $gn.hasClass("active");
        if (ub_is_active || gn_is_active) {
            return true;
        }
        return false;
    }

})(jQuery, window);

/**
 *
 * フッターメニューのトグル
 *
 */
(function ($, window) {

    var $fn_title = $(".footer__navigation__title");
    var $fn_list = $(".footer__navigation__list");

    $fn_title.on("click", function (evt) {


        var $elem = $(this);
        var $target = $elem.next();

        if ($elem.hasClass("active")) {
            // リセット
            $fn_title.removeClass("active");
            $fn_list.removeClass("active");
        } else {
            // リセット
            $fn_title.removeClass("active");
            $fn_list.removeClass("active");

            $elem.toggleClass("active");
            $target.toggleClass("active");
        }


    });

})(jQuery, window);


