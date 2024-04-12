// DOCUMENT READY
jQuery(document).ready(function() {
    "use strict";

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // Function to animate count numbers
    function animateCountNumbers() {
        $('.count-num').each(function() {
            var targetCount = parseInt($(this).attr('data-count'));
            $(this).prop('Counter', 0).animate({
                Counter: targetCount
            }, {
                duration: 1500,
                easing: 'swing',
                step: function(now) {
                    $(this).text(formatNumber(Math.ceil(now)));
                }
            });
        });
    }

    // Format number with comma separator
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Check if .intro-count is in viewport when scrolling
    $(window).scroll(function() {
        if (isScrolledIntoView('.intro-count') && !$('.intro-count').hasClass('counted')) {
            $('.intro-count').addClass('counted');
            animateCountNumbers();
        }
    });

    // Check on initial load
    if (isScrolledIntoView('.intro-count') && !$('.intro-count').hasClass('counted')) {
        $('.intro-count').addClass('counted');
        animateCountNumbers();
    }
});



// WINDOW LOAD
jQuery(window).bind('load', function() {
    "use strict";
    // SLIDER
    if( jQuery('.visual-slider').length > 0 ) {
        jQuery('.visual-slider').slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: false,
            variableWidth: false,
        });
        jQuery('.visual-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            /* proceed before the slider changes slide */
        });
        jQuery('.visual-slider').on('afterChange', function(event, slick, currentSlide){
            /* proceed after the slider changes slide */
        });
    }

    if( jQuery('.detail-gallery').length > 0 ) {
        jQuery('.detail-gallery').slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: false,
            variableWidth: false,
        });
    }
    /*============== END - SLIDER ================*/

    // CONTENT LOAD ANIMATION
    // AOS.init({
    //     duration: 600,
    //     disable: 'mobile',
    //     once: true
    // });
    /*============== END - CONTENT LOAD ANIMATION ================*/
});