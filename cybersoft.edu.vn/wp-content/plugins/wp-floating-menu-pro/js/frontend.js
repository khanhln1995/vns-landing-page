(function ($) {
    $(function () {

        /** Trigger Menu stretch */
        if ($(".wpfm-nav-strech-trigger")[0] && ($(".wpfm-nav-strech-trigger").attr('id') == 'right'
                || $(".wpfm-nav-strech-trigger").attr('id') == 'left')) {
            $('.wpfm-nav-strech-trigger').click(function (e) {
                e.preventDefault();
                $('.wpfm-nav-strech-trigger').hide();
                $('ul.wpfm-nav-show-hide').slideToggle(400);
            });
        } else if ($(".wpfm-nav-strech-trigger")[0] && ($(".wpfm-nav-strech-trigger").attr('id') != 'right'
                || $(".wpfm-nav-strech-trigger").attr('id') != 'left')) {
            $('.wpfm-nav-strech-trigger').click(function (e) {
                e.preventDefault();
                $('ul.wpfm-nav-show-hide').slideToggle(400);
                if ($(this).attr('data-expand-default') == 'block') {
                    /** Newly added code. Copied from here */
                    $('.wpfm-nav-strech-trigger').hide();
                }
            });
        }

        /** Trigger Menu close */
        if ($(".wpfm-nav-close-trigger")[0] && ($(".wpfm-nav-close-trigger").attr('id') == 'right'
                || $(".wpfm-nav-close-trigger").attr('id') == 'left')) {
            $('.wpfm-nav-close-trigger').click(function (e) {
                e.preventDefault();
                $('.wpfm-nav-strech-trigger').show();
                $('ul.wpfm-nav-show-hide').slideUp(400);
            });
        } else if ($(".wpfm-nav-close-trigger")[0] && ($(".wpfm-nav-close-trigger").attr('id') != 'right'
                || $(".wpfm-nav-close-trigger").attr('id') != 'left')) {
            $('.wpfm-nav-close-trigger').click(function (e) {
                e.preventDefault();
                $('ul.wpfm-nav-show-hide').slideUp(400);
                if ($(this).attr('data-expand-default') == 'block') {
                    /** Newly added code. Copied from here */
                    $('.wpfm-nav-strech-trigger').show();
                }
            });
        }

        /** On hover effect for template 7 */
        $(".wpfm-menu-name").hover(function () {
            $(this).find('.wpfm-tootltip-title').css('opacity', '1');
        });

        /** Initialize active class for on scroll event */
        if ($('.wpfm-floating-wh-wrapper a[href^="#"]').length > 0) {
            $(document).on("scroll", onScroll);
        }

        /** Inline Navigation Js */
        $('.wpfm-floating-wh-wrapper a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            if ($(target).length > 0) {
                $('html, body').stop().animate({
                    'scrollTop': $(target).offset().top + 1
                }, 900, 'swing', function () {
                    $(document).on("scroll", onScroll);
                });
                //$('.wpfm-floating-wh-wrapper a[href^="#"]').removeClass('wpfm-active-nav'); 
                //$(this).addClass('wpfm-active-nav');
            }
        });

        /** Add Class on scroll */
        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.wpfm-menu-wrapper a[href^="#"]').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement != '#' && $(refElement).length > 0) {
                    if (refElement.position().top) {
                        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                            $('.wpfm-menu-wrapper ul li').removeClass("wpfm-active-nav");
                            currLink.parent("li").addClass("wpfm-active-nav");
                        } else {
                            currLink.parent("li").removeClass("wpfm-active-nav");
                        }
                    }
                }
            });
        }

        /** 
         * If scroll and show after certain height for home page
         * */
//        if ($('body').hasClass('home')) {
//            $(window).scroll(function () {
//                if ($(this).scrollTop() > 25) {
//                    $('.wpfm-floating-wh-wrapper ').fadeIn();
//                } else {
//                    $('.wpfm-floating-wh-wrapper ').fadeOut();
//                }
//            });
//        }

    }); /** Function ends */
}(jQuery));
// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += " wpfm-touch";
}

// Add and remove no-hover class to <li>'s for mobile hover events
jQuery('.wpfm-touch #wpfm-floating-menu-nav ul li a').each(function () {
    var div = jQuery(this);

    div.hover(function () {
        div.removeClass('wpfm-no-hover');
    });

    jQuery('*').not(div).bind('click', function () {
        div.addClass('wpfm-no-hover');
    });

});