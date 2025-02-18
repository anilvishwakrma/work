(function($) {
	
	"use strict";
	var testimonial_script_js = function($scope, $) {
		
		// Owl Carousel
		var design_two = $('.wellson-testi-two-item-carousel'); 
        if(design_two.length){
            var slider_attr_two = $('.wellson-testi-two-item-carousel').data('testi');
            $('.wellson-testi-two-item-carousel').owlCarousel({
               	loop:slider_attr_two.infinite,
				margin:slider_attr_two.item_gap,
				nav:slider_attr_two.arrows,
				smartSpeed: 500,
				autoplay: slider_attr_two.autoplay,
				navText: [ '<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>' ],
                responsive:{
					0:{
						items:1
					},
					480:{
						items:1
					},
					600:{
						items:1
					},
					800:{
						items:2
					},
					1200: {
						items:slider_attr_two.item_show
					}
				}
            });
        }
		
		// Owl Carousel
		var design_three = $('.service-wellson-four-item-carousel'); 
        if(design_three.length){
            var slider_attr_three = $('.service-wellson-four-item-carousel').data('slider');
            $('.service-wellson-four-item-carousel').owlCarousel({
               	loop:slider_attr_three.infinite,
				margin:slider_attr_three.item_gap,
				nav:slider_attr_three.arrows,
				smartSpeed: 500,
				autoplay: slider_attr_three.autoplay,
				navText: [ '<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>' ],
                responsive:{
					0:{
						items:1
					},
					480:{
						items:1
					},
					600:{
						items:2
					},
					800:{
						items:3
					},
					1200: {
						items:slider_attr_three.item_show
					}
				}
            });
        }
		
		// Owl Carousel
		var design_four = $('.wellson-project-carousel-item'); 
        if(design_four.length){
            var slider_attr_four = $('.wellson-project-carousel-item').data('options');
            $('.wellson-project-carousel-item').owlCarousel({
               	loop:slider_attr_four.infinite,
				margin:slider_attr_four.item_gap,
				nav:slider_attr_four.arrows,
				smartSpeed: 500,
				autoplay: slider_attr_four.autoplay,
				navText: [ '<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>' ],
                responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					600:{
						items:3
					},
					800:{
						items:4
					},
					1200: {
						items:slider_attr_four.item_show
					}
				}
            });
        }
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/wellson_testimonial_carousel.default', testimonial_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/wellson_service_carousel.default', testimonial_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/wellson_project_carousel.default', testimonial_script_js);
    });	

})(window.jQuery);