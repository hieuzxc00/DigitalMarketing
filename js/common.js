// WINDOW LOAD
jQuery(window).bind('load', function() {
    "use strict";
    // ANCHOR LINK
    var offset_PC = 0; /* offset header in PC (px) */
    var offset_SP = 0; /* offset header in SP (px) */
    function anchorLink(el) {

        /* trigger to open tab contain the Anchor, related to the function CHANGE TAB below. */
        var _parent = jQuery(el).parents('[data-tab-content]');
        if(_parent) {
            var _tab_ID = _parent.data('tab-content');
            var _group = _parent.data('tab-group');
            jQuery('[data-tab="'+ _tab_ID +'"').each(function() {
                if(jQuery(this).data('tab-group') === _group) {
                    jQuery(this).trigger('click');
                }
            });
        }

        /* position of element */
        var offset = jQuery(el).offset();
        if (jQuery(window).width() > 750) {
            jQuery('html,body').animate({ scrollTop: offset.top - offset_PC }, 400);
        } else {
            jQuery('html,body').animate({ scrollTop: offset.top - offset_SP }, 400);
        }
    }

    /* ANCHOR FROM OTHER PAGE */
    var hash = location.hash;
    if (hash && jQuery(hash).length > 0) {
        anchorLink(hash);
    }

    /* ANCHOR IN PAGE */
    jQuery('a[href^="#"]').click(function() {
        var get_ID = jQuery(this).attr('href');
        if (get_ID != "#" && jQuery(get_ID).length) {
            anchorLink(get_ID);
            // close Menu (is opening) in SP
            if (jQuery('body').hasClass('open-nav')) {
                jQuery('#menu-toggle').trigger('click');
            }
            return false;
        }
    });
    // =========== END - ANCHOR LINK ============


    // SCROLL TO MAIL FORM
    // if (jQuery('#fmail-section').length) {
    //     var params = location.search;
    //     if (params.search('mode') >= 0) {
    //         anchorLink('#fmail-section');
    //     }
    // }
    // =========== END - SCROLL TO MAIL FORM ============


    // LAZY LOAD RESOURCE
    jQuery('[data-href]').each(function() {
        var _this = jQuery(this);
        var href = jQuery(this).data('href');
        setTimeout(function() {
            _this.attr('href', href);
        }, 3000);
    });
    jQuery('[data-src]').each(function() {
        var _this = jQuery(this);
        var src = jQuery(this).data('src');
        setTimeout(function() {
            _this.attr('src', src);
        }, 3000);
    });
    // =========== END - LAZY LOAD RESOURCE ============
});



// WINDOW LOAD/SCROLL
jQuery(window).bind('load scroll', function() {
    var _scrollTop = jQuery(this).scrollTop();
    // TO-TOP
    if (_scrollTop >= 500) {
        jQuery('.to-top').addClass('show');
    } else {
        jQuery('.to-top').removeClass('show');
    }
    // =========== END - TO-TOP ============
});



// DOCUMENT READY
jQuery(document).ready(function() {
    "use strict";
    
    // TOGGLE MENU IN SP
    jQuery('#menu-toggle').click(function() {
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('open-nav');
    });
    jQuery(document).on('mousedown touchstart', function(e) {
        if (jQuery(e.target).closest("#gnavi, #menu-toggle").length === 0) {
            if (jQuery('body').hasClass('open-nav')) {
                jQuery('#menu-toggle').trigger('click');
            }
        }
    });
    // =========== END - TOGGLE MENU IN SP ============

    // TOGGLE SLIDE FOR SUB-MENU IN SP
    jQuery('#gnavi .list-nav span.nav-link').click(function() {
        var screenWidth = jQuery(window).width();
        if (screenWidth <= 750) {
            jQuery(this).toggleClass('open');
            jQuery(this).next().stop().slideToggle(200);
        }
    });
    // =========== END - TOGGLE SLIDE FOR SUB-MENU IN SP ============



    // CHANGE TAB
    // jQuery('[data-tab]').click(function() {
    //     var group = jQuery(this).data('tab-group');
    //     var index = jQuery(this).data('tab');
    //     jQuery('[data-tab][data-tab-group="' + group + '"].active').removeClass('active');
    //     jQuery(this).addClass('active');

    //     jQuery('[data-tab-content][data-tab-group="' + group + '"].active').removeClass('active');
    //     jQuery('[data-tab-content="' + index + '"][data-tab-group="' + group + '"]').addClass('active');
    // });
    // =========== END - CHANGE TAB ============



    // ACCORDION
    // jQuery(".accordion-button").click(function(e) {
    //     e.preventDefault();
    //     jQuery(this).toggleClass("open");
    //     var accordion_ID = jQuery(this).attr('id');
    //     var accordion_content = jQuery('[data-accordion-for="' + accordion_ID + '"]');
    //     accordion_content.stop().slideToggle(200);
    // });
    // =========== END - ACCORDION ============

});