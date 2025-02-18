(function($) {
	
	"use strict";
	var project_script_js = function($scope, $) {
		  
		    //Product Tabs
			if($('.project-tab').length){
				$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
					e.preventDefault();
					var target = $($(this).attr('data-tab'));
					
					if ($(target).hasClass('actve-tab')){
						return false;
					}else{
						$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
						$(this).addClass('active-btn');
						$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
						$(target).addClass('active-tab');
					}
				});
			}
		  
		  
		    // Owl Carousel
		    var design_three = $('.tab-project-wellson-five-item-carousel'); 
			if(design_three.length){
				var slider_attr_three = $('.tab-project-wellson-five-item-carousel').data('slider');
				$('.tab-project-wellson-five-item-carousel').owlCarousel({
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
							items:2
						},
						600:{
							items:3
						},
						800:{
							items:4
						},
						1200: {
							items:slider_attr_three.item_show
						}
					}
				});
			}
			
			
			//Sortable Masonary with Filters
			function enableMasonry() {
				if($('.sortable-masonry').length){
			
					var winDow = $(window);
					// Needed variables
					var $container=$('.sortable-masonry .items-container');
					var $filter=$('.filter-btns');
			
					$container.isotope({
						filter:'*',
						 masonry: {
							columnWidth : '.masonry-item.small-column'
						 },
						animationOptions:{
							duration:500,
							easing:'linear'
						}
					});
					
			
					// Isotope Filter 
					$filter.find('li').on('click', function(){
						var selector = $(this).attr('data-filter');
			
						try {
							$container.isotope({ 
								filter	: selector,
								animationOptions: {
									duration: 500,
									easing	: 'linear',
									queue	: false
								}
							});
						} catch(err) {
			
						}
						return false;
					});
			
			
					winDow.on('resize', function(){
						var selector = $filter.find('li.active').attr('data-filter');
		
						$container.isotope({ 
							filter	: selector,
							animationOptions: {
								duration: 500,
								easing	: 'linear',
								queue	: false
							}
						});
					});
			
			
					var filterItemA	= $('.filter-btns li');
			
					filterItemA.on('click', function(){
						var $this = $(this);
						if ( !$this.hasClass('active')) {
							filterItemA.removeClass('active');
							$this.addClass('active');
						}
					});
				}
			}
			
			enableMasonry();
		
	};
	$(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/wellson_project_tab_carousel.default', project_script_js);
			elementorFrontend.hooks.addAction('frontend/element_ready/wellson_masonary_projects.default', project_script_js);
    });	

})(window.jQuery);