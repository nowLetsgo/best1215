;
(function ($) {
    $.fn.extend({
        nav: function () {
            $(this).children(".item")
                .mouseenter(function () {
                    $(this).children("div").stop(true, false).slideDown(1000);
                })
                .mouseleave(function () {
                    $(this).children("div").stop(true, false).slideUp(1000);
                })

            return $(this);
        }
    })
})(jQuery);