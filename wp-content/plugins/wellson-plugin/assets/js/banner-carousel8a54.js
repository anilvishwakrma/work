(function($) {
	
	"use strict";
	var banner_script_js = function($scope, $) {
		
		// swiper slider
		function thmSwiperInit() {
			if ($(".thm-swiper__slider").length) {
			  $(".thm-swiper__slider").each(function () {
				let elm = $(this);
				let options = elm.data('swiper-options');
				let thmSwiperSlider = new Swiper(elm, options);
			  });
			}
		  }
		  
		  thmSwiperInit();		
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/wellson_banner_carousel.default', banner_script_js);
    });	

})(window.jQuery);