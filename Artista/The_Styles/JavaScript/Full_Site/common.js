/*
 * Author: ArtStyles Brands (ArtTemplate / ArtIcons)
 * URL: http://themeforest.net/user/artstyles
 * Template Name: Oliver
 * Version: 1.0.6
*/

"use strict";
$(document).ready(function() {

	/*-----------------------------------------------------------------
	  Detect device mobile
	-------------------------------------------------------------------*/
	
	
    var isMobile = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('touch');
	  	isMobile = true;
	}
	else{
		$('html').addClass('no-touch');
		isMobile = false;
	}


	/*-----------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------*/


	$('body').imagesLoaded({ background: true }).always( function( instance ) {
		setTimeout(function(){
            $(".loading").addClass("bounceOutRight");
        }, 2000);
    });


	/*-----------------------------------------------------------------
	  Hamburger
	-------------------------------------------------------------------*/


    $('.hamburger').on('click', function() {
        $(this).toggleClass('is_active');
		$('body').toggleClass('menu__open');
    });

	$(document).keyup(function(e) {
        if (e.keyCode === 27) $('.menu__open .hamburger').click();
    });

	$('#open-overlay-nav').on('click', function() {
		$('body').toggleClass('show-overlay-nav');
    });
	
    $( '.dl-menu__wrap' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-3', classout : 'dl-animate-out-3' }
    });
				

	/*-----------------------------------------------------------------
	  Stick menu
	-------------------------------------------------------------------*/
	
	
    $(window).scroll(function(){
        var sticky = $('.top'),
        scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('affix');
        else sticky.removeClass('affix');
    });

	
    /*-----------------------------------------------------------------
	  Collapse nav mobile
	-------------------------------------------------------------------*/


	$('.navbar-nav li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(400);
		return false;
	});


	/*-----------------------------------------------------------------
	  Switch categories
	-------------------------------------------------------------------*/


    $('.filter-categories__item').on('click', function() {
		$(this).addClass('filter-categories__item_current');
        $(this).siblings().removeClass('filter-categories__item_current');
    });


	/*-----------------------------------------------------------------
	  PopUp
	-------------------------------------------------------------------*/


    $('#open-popup').on('click', function() {
		$('body').toggleClass('show-popup');
    });
    $('#close-popup').on('click', function() {
		$('body').removeClass('show-popup');
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27) $('#close-popup').click();
    });


	/*-----------------------------------------------------------------
	  Input
	-------------------------------------------------------------------*/


    $(".input").focus(function(){
        $(this).parent().addClass("is-completed");
    });

    $(".input").focusout(function(){
        if($(this).val() === "")
        $(this).parent().removeClass("is-completed");
    });


   /*-----------------------------------------------------------------
	  Video
	-------------------------------------------------------------------*/


    var VideoHero = function (el) {
  	    this.$video    = $(el);
  	    this.$wrapper  = $(el).parent().addClass('paused');
  	    this.$controls = this.$wrapper.find('.video-controls');
  	    this.$video.removeAttr('controls');
		
        if(!!this.$video.attr('autoplay')) {
    	    this.$wrapper.removeClass('paused').addClass('playing');
        }

        if(this.$video.attr('muted') === 'true' || this.$video[0].volume === 0) {
            this.$video[0].muted = true;
            this.$wrapper.addClass('muted');
        }
  	    this.attachEvents();
    };

    VideoHero.prototype.attachEvents = function () {
  	    var self = this,
        _t;
        this.$wrapper.on('click', '[data-media]', function () {
            var data = $(this).data('media');
            if(data === 'play-pause') {
                self.playPause();
            }
            if(data === 'mute-unmute') {
                self.muteUnmute();
            }
        });
		
  	    this.$video.on('click', function () {
    		self.playPause();
        });
        this.$video.on('play', function () {
    		self.$wrapper.removeClass('paused').addClass('playing');
        });
        this.$video.on('pause', function () {
    		self.$wrapper.removeClass('playing').addClass('paused');
        });
        this.$video.on('volumechange', function () {
            if($(this)[0].muted) {
        		self.$wrapper.addClass('muted');
            }
            else {
        	    self.$wrapper.removeClass('muted');
            }
        });
  
        this.$wrapper.on('mousemove', function () {
            self.$controls.addClass('video-controls_show');
            clearTimeout(_t);
            _t = setTimeout(function () {
                self.$controls.removeClass('video-controls_show');
            }, 2250);

        }).on('mouseleave', function () {
            self.$controls.removeClass('video-controls_show');
        });
    };

    VideoHero.prototype.playPause = function () {
        if (this.$video[0].paused) {
    		this.$video[0].play();
        } else { 
		    this.$video[0].pause();
        }
    };

    VideoHero.prototype.muteUnmute = function () {
        if(this.$video[0].muted === false) {
    		this.$video[0].muted = true;
        } else {
		    this.$video[0].muted = false;
        }
    };

    $('.video-hero').each(function () {
  	    new VideoHero(this);
    });


   /*-----------------------------------------------------------------
	  Masonry
	-------------------------------------------------------------------*/

	
    /* Fully */
	var $photoBase=$('.grid-gallery__base').isotope({
        itemSelector: '.item__portfolio',
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    });
	$photoBase.imagesLoaded().progress( function() {
        $photoBase.masonry ();
    });

	/* Fixed grid */
	var $photoFixed=$('.grid-gallery__fixed').isotope({
        itemSelector: '.item__portfolio',
		percentPosition: true,
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 30,
            isFitWidth: true
        }
    });
	$photoFixed.imagesLoaded().progress( function() {
        $photoFixed.masonry ({
            gutter: 30,
            isFitWidth: true
		});
    });

	/* News grid */
	var $newsGrid=$('.grid-news').isotope({
        itemSelector: '.item-news',
		percentPosition: true,
        layoutMode: 'masonry',
		transitionDuration: '0.8s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
		masonry: {
            gutter: 45,
            isFitWidth: true
        }
    });
	$newsGrid.imagesLoaded().progress( function() {
        $newsGrid.masonry ({
            gutter: 45,
            isFitWidth: true
		});
    });


	/*-----------------------------------------------------------------
	  Client Carousel
	-------------------------------------------------------------------*/	


    var swiper = new Swiper('.client-carousel', {
	    centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 140,
		paginationClickable: true,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		speed: 1000,
		autoplay: 3000,
		roundLengths: true,
		parallax: true,
        keyboardControl: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
		    0: {
                spaceBetween: 15
            },
			580: {
				spaceBetween: 30
			},
			768: {
				spaceBetween: 60
			},
			900: {
				spaceBetween: 80
			},
			1200: {
				spaceBetween: 80
			},
			1800: {
				spaceBetween: 140
			}
        }
    });
	/*
	$(".client-carousel").hover(function(){
        swiper.stopAutoplay();
    }, function(){
        swiper.startAutoplay();
    });*/

	
	/*-----------------------------------------------------------------
	  Pricing Carousel
	-------------------------------------------------------------------*/	


    var swiper = new Swiper('.pricing-grid', {
		slidesPerView: 4,
		loop: true,
		paginationClickable: true,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		speed: 1000,
		roundLengths: true,
		parallax: true,
        keyboardControl: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
		    0: {
                slidesPerView: 1,
            },
			580: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			900: {
				slidesPerView: 2,
			},
			1100: {
				slidesPerView: 2,
			},
			1600: {
				slidesPerView: 3,
			},
			1800: {
			    slidesPerView: 4,	
			}
        }
    });


	/*-----------------------------------------------------------------
	  Photo Carousel
	-------------------------------------------------------------------*/	


    var swiper = new Swiper('.photo-carousel', {
	    centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 200,
		paginationClickable: true,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		speed: 1000,
		autoplay: 3000,
        mousewheelControl: true,
		roundLengths: true,
		parallax: true,
        keyboardControl: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
		    0: {
                spaceBetween: 15
            },
			580: {
				spaceBetween: 30
			},
			768: {
				spaceBetween: 60
			},
			900: {
				spaceBetween: 80
			},
			1200: {
				spaceBetween: 100
			},
			1500: {
				spaceBetween: 160
			},
			1800: {
				spaceBetween: 200
			}
        }
    });

	/*$(".photo-carousel").hover(function(){
        swiper.stopAutoplay();
    }, function(){
        swiper.startAutoplay();
    });*/


	/*-----------------------------------------------------------------
	  Autoresize textarea
	-------------------------------------------------------------------*/	


    $('textarea').each(function(){
        autosize(this);
    });


	/*-----------------------------------------------------------------
	  Anchor scroll
	-------------------------------------------------------------------*/	


	$('a[href^="!#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


	/*-----------------------------------------------------------------
	  PhotoSwipe
	-------------------------------------------------------------------*/


    var containerGallery = [];

    $('.grid-gallery').find('figure').each(function() {
        var $link = $(this).find('a'),
        item = {
            src: $link.attr('href'),
            w: $link.data('width'),
            h: $link.data('height'),
            title: $link.data('caption')
        };
        containerGallery.push(item);
    });

    $('a.link-photo').on('click', function(event) {
        event.preventDefault();
        var $pswp = $('.pswp')[0],
        options = {
            index: $(this).parent('figure').index(),
            bgOpacity: 1,
            showHideOpacity: true,
			history: false
        };

        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, containerGallery, options);
        gallery.init();
    });


    /*-----------------------------------------------------------------
	  Skrollr
	-------------------------------------------------------------------*/


    var s=skrollr.init({
        forceHeight:false,

        mobileCheck: function() {
            return false;
        }
    });


    /*-----------------------------------------------------------------
	  Waypoint
	-------------------------------------------------------------------*/
	
	
    $('body').imagesLoaded({ background: true }).always( function( instance ) {
	    setTimeout(function(){
	        $('.section-counters').waypoint(function() {
                $(".counter__date").countimator();
            }, {
                offset: '86%'
            });

	        $('.os').waypoint(function() {
                $(this.element).addClass('animated')
            }, {
                offset: '100%'
            });

            $('.effect-reveal').waypoint(function() {
                $(this.element).addClass('animated')
            }, {
                offset: '80%'
            });

            $('.item__block-number').waypoint(function() {
                $(this.element).addClass('animated')
            }, {
                offset: '80%'
            });
			
			$('.item__block-description .title').waypoint(function() {
                $(this.element).addClass('bounceInLeft animated')
            }, {
                offset: '80%'
            });
			
            $('.reveal').waypoint(function() {
                $(this.element).addClass('animated')
            }, {
                offset: '60%'
            });

            $('.item__block-image').waypoint(function() {
                $(this.element).addClass('animated')
            }, {
                offset: '50%'
            });
	    }, 2000);
    });

	
	/*-----------------------------------------------------------------
	  objectFit
	-------------------------------------------------------------------*/


	objectFitImages();


	/*-----------------------------------------------------------------
	  Subscribe form
	-------------------------------------------------------------------*/


    $(".subscribe-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please fill in the form...");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }

    function formSuccessSub(){
        $(".subscribe-form")[0].reset();
        submitMSGSub(true, "Excellent! Check your email.");
        setTimeout(function() {
            $("#validator-subscribe").addClass('hide');
        }, 4000)
    }

    function formErrorSub(){
        $(".subscribe-form").addClass("animated shake");
		setTimeout(function() {
            $(".subscribe-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-subscribe").removeClass().addClass(msgClasses).text(msg);
    }

    // AJAX MailChimp
    $(".subscribe-form").ajaxChimp({
        url: "http://netgon.us13.list-manage.com/subscribe/post?u=b3954a95f1a55ffe65dd25050&amp;id=50b6fd13c3", // Your url MailChimp
        callback: callbackFunction
    });


	/*-----------------------------------------------------------------
	  Contacts form
	-------------------------------------------------------------------*/


    $("#contact-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Please fill in the form...");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm(){
        // Initiate Variables With Form Content
        var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
        var email = $("#email").val();
		var phone = $("#phone").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "php/form-contact.php",
            data: "firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&phone=" + phone + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contact-form")[0].reset();
        submitMSG(true, "Congratulations! Message Submitted!");
    }

    function formError(){
        $("#contact-form").removeClass().addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-contact").removeClass().addClass(msgClasses).text(msg);
    }

});