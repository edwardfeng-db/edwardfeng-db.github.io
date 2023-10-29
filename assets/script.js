(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 150) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}


	function galleryMasonaryLayout() {
	    if ($('.masonary-layout').length) {
	        $('.masonary-layout').isotope({
	            layoutMode: 'masonry'
	        });
	    }

	    if ($('.post-filter').length) {
	        $('.post-filter li').children('span').on('click', function() {
	            var Self = $(this);
	            var selector = Self.parent().attr('data-filter');
	            $('.post-filter li').children('span').parent().removeClass('active');
	            Self.parent().addClass('active');


	            $('.filter-layout').isotope({
	                filter: selector,
	                animationOptions: {
	                    duration: 500,
	                    easing: 'linear',
	                    queue: false
	                }
	            });
	            return false;
	        });
	    }

	    if ($('.post-filter.has-dynamic-filter-counter').length) {
	        // var allItem = $('.single-filter-item').length;

	        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

	        activeFilterItem.each(function() {
	            var filterElement = $(this).data('filter');
	            console.log(filterElement);
	            var count = $('.gallery-content').find(filterElement).length;

	            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
	        });
	    };
	}
	

	//Accordion Box
	if ($('.accordion-box').length) {
	        $('.accordion-box .acc-btn').on('click', function() {
	            if ($(this).hasClass('active') !== true) {
	                $('.accordion-box .acc-btn').removeClass('active');
	            }

	            if ($(this).next('.acc-content').is(':visible')) {
	                $(this).removeClass('active');
	                $(this).next('.acc-content').slideUp(500);
	            } else {
	                $(this).addClass('active');
	                $('.accordion-box .acc-content').slideUp(500);
	                $(this).next('.acc-content').slideDown(500);
	            }
	        });
	    }
	
	//Search Box Toggle
	if($('.search-toggle').length){
		//Dropdown Button
		$('.search-toggle').on('click', function() {
		   $(this).toggleClass('active');
		   $(this).next('.search-box').toggleClass('now-visible');
		});
	}


	 // Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}


	//testimonial Slider
	if ($('.testimonial-slider').length) {
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:75,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}


	//testimonial Slider
	if ($('.brand-slider').length) {
		$('.brand-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 1500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:1
				},
				800:{
					items:2
				},
				1200:{
					items:3
				},
				1600:{
					items:4
				}
			}
		});    		
	}


	//Three Column Carousel Slider
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
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
					items:2
				},
				1024:{
					items:3
				}
			}
		});    		
	}

	//Three Column Carousel Slider
	if ($('.about-us-carousel').length) {
		$('.about-us-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 300,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			items: 1,
		});    		
	}


	//Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 2000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1070:{
					items:4
				}
			}
		});    		
	}


	
	//Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
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
				1024:{
					items:2
				}
			}
		});    		
	}
	
	
	//Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	

	//Tabs Box
	if($('.tabs-box').length){
		
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			target.parents('.tabs-box').find('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
			target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});
		
	}

	
		//Tabbed Floor Plans Function
	if($('.tabbed-floor-plans .floor-btn').length){
		
		//Floor Details Hide Show
		$('.tabbed-floor-plans .floor-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabbed-floor-plans .floor-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabbed-floor-plans .floor-details').removeClass('collapsed');
			$('.tabbed-floor-plans .floor-details ').fadeOut(0);
			$(target).fadeIn(300);
		});
		
	}

	//5.Search Toggle Btn
	    if($('.toggle-search').length){
	        $('.toggle-search').on('click', function() {
	            $('.header-search').slideToggle(300);
	        });

	    }


	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	// 4. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	
	// Cart Touch Spin
	function cartTouchSpin() {
	    if ($('.quantity-spinner').length) {
	        $("input.quantity-spinner").TouchSpin({
	            verticalbuttons: true
	        });
	    }
	}

	// videoFancybox
	function videoFancybox () {
	 	if ($('.video-fancybox').length) {
	  		$('.video-fancybox').on('click', function () {
	   			$(this).fancybox({
	    		'padding' : 0,
	   	 		'autoScale' : false, 
	    		'transitionIn' : 'none', 
	    		'transitionOut' : 'none', 
	    		'title' : this.title, 
	    		'width' : 640, 
	    		'height' : 385, 
	    		'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 
	    		'type' : 'swf', 
	    		'swf' : { 'wmode' : 'transparent', 'allowfullscreen' : 'true' }
	   			});
	   			return false;
	  		})
	 	};
	}



	
	//Contact Form Validation
	/*
	if($("#contact-form").length){
		$("#contact-form").validate({
		    submitHandler: function(form) {
		      var form_btn = $(form).find('button[type="submit"]');
		      var form_result_div = '#form-result';
		      $(form_result_div).remove();
		      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
		      var form_btn_old_msg = form_btn.html();
		      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
		      $(form).ajaxSubmit({
		        dataType:  'json',
		        success: function(data) {
		          if( data.status == 'true' ) {
		            $(form).find('.form-control').val('');
		          }
		          form_btn.prop('disabled', false).html(form_btn_old_msg);
		          $(form_result_div).html(data.message).fadeIn('slow');
		          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
		        }
		      });
		    }
		});
	}
	*/
    function priceFilter () {
		if($('.range-slider-price').length){

			var priceRange = document.getElementById('range-slider-price');

			noUiSlider.create(priceRange, {
				start: [ 10, 25 ],
				limit: 90,
				behaviour: 'drag',
				connect: true,
				range: {
					'min': 11,
					'max': 90
				}
			});

			var limitFieldMin = document.getElementById('min-value-rangeslider');
			var limitFieldMax = document.getElementById('max-value-rangeslider');
			
			priceRange.noUiSlider.on('update', function( values, handle ){
				(handle ? limitFieldMax : limitFieldMin).value = values[handle];
			});
		};
	}
	
	
	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').on('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}

	//Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}

		// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}
		// Date picker
	function datepickerone () {
	    if ($('#datepickerone').length) {
	        $('#datepickerone').datepicker();
	    };
	}


	// Time picker
	function timepicker () {
	    $('input[name="time"]').ptTimeSelect();
	}	
		
	
	//Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}


	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 15);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}

	  //13. Countdown Timer
	if ($('.countdown').length) {
	    $('.countdown').countdown('2018/1/1', function (event) {
	        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><br>Days</div> ' + '<div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mutines</div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Seconds</div>'));
	    });
	}

	function customTabProductPageTab () {
	    if ($('.product-details-tab-title').length) {
	        var tabWrap = $('.product-details-tab-content');
	        var tabClicker = $('.product-details-tab-title ul li');
	        
	        tabWrap.children('div').hide();
	        tabWrap.children('div').eq(0).show();
	        tabClicker.on('click', function() {
	            var tabName = $(this).data('tab-name');
	            tabClicker.removeClass('active');
	            $(this).addClass('active');
	            var id = '#'+ tabName;
	            tabWrap.children('div').not(id).hide();
	            tabWrap.children('div'+id).fadeIn('500');
	            return false;
	        });        
	    }
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 10);
	
		});
	}

	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	//11.progressBarConfig
	function progressBarConfig () {
	  	var progressBar = $('.progress');
	  		if(progressBar.length) {
	    		progressBar.each(function () {
	      		var Self = $(this);
	      		Self.appear(function () {
	        	var progressValue = Self.data('value');

	        	Self.find('.progress-bar').animate({
	          	width:progressValue+'%'           
	        	}, 100);

	        	Self.find('span.value').countTo({
	          		from: 0,
	            	to: progressValue,
	            	speed: 100
	        		});
	     	 	});
	   		})
	  	}
	}





	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */
	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
	        galleryMasonaryLayout();
	        progressBarConfig ();
	        selectMenu ();
	        cartTouchSpin();
	        customTabProductPageTab ();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		factCounter();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

	
	

	$(function () {
		if(!$('[digood-id="home_banner_1_oyh"]').length) return;
		var $mains = $('[digood-id="home_banner_1_oyh"]');
		$mains.each(function (index) {
			var $main = $(this);
			var $images = $main.find('.image');
			var responsive = $main.data('responsive');
				responsive[0] = responsive[0].reverse();
				responsive[1] = responsive[1].reverse();
	
			var width = $(window).width();
			var len = responsive[0].length;
			var height = 0;
			for (var i = 0; i < len; i++) {
				if(responsive[0][i] < width) {
					height = responsive[1][i];
				}
			}
			if(!height) height = responsive[1][0];
			$images.height(height);
			$(window).resize(function() {
				width = $(window).width();
				for (var i = 0; i < len; i++) {
					if(responsive[0][i] < width) {
						height = responsive[1][i];
					}
				}
				if(!height) height = responsive[1][0];
				$images.height(height);
			})
	
			$images.width('100%');
			
			var loop = ($main.data('loop') == true);
			var nav = ($main.data('nav') == true);
			var timeout = $main.data('timeout');
			var autoplay = ($main.data('autoplay') == true);
	
			$main.find('.owl-carousel').owlCarousel({
				margin: 0,
				items: 1,
				nav: nav,
				loop: loop,
				autoplay: autoplay,
				autoplayTimeout: timeout,
				autoplayHoverPause: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			})
		})
	})



})(window.jQuery);



var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
	return false;
}
function mousehandler(e){
	var myevent = (isNS) ? e : event;
	var eventbutton = (isNS) ? myevent.which : myevent.button;
	if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
