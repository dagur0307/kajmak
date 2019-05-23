(function($) {

    $(document).ready(function(){

        // ---------------- Main slider ----------------
		// $('.mainSlider__slider').slick({
		// 	dots: true,
		// 	infinite: true,
		// 	speed: 300,
		// 	slidesToShow: 1,
		// 	prevArrow: $('.mainSlider__nav--left'),
		// 	nextArrow: $('.mainSlider__nav--right'),
		// 	appendDots: $('.mainSlider__dots'),
		//   });
        // -------------- Main slider END --------------

    }); //document ready
    
    $(window).on('scroll', function() {
		stickyNav();
    });
    

    function fixedMenuHeightMargin() {
		$navbar = $('.navbar-starter-theme');

		if (window.innerWidth > 767) {
			var $menuHeight = $navbar.height();
		} else {
			var $menuHeight = $('.navbar-header').outerHeight();
		}
	
		$('.navSpaceHolder').css('height', $menuHeight);

	}

	function stickyNav() {
		var $navbar = $('.navbar-starter-theme');
		var $navbarHolder = $('.navSpaceHolder');

		if ($(window).scrollTop() > $navbarHolder.offset().top) {
			if (!$navbar.hasClass('sticky')) {
				fixedMenuHeightMargin();
				$navbar.addClass('sticky');
			}

		} else {
			if ($navbar.hasClass('sticky')) {
				$('.navSpaceHolder').css('height', 0);
				$navbar.removeClass('sticky').trigger('stickyRemove');
			} 
		}
	}

})(jQuery);
