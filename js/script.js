$(document).ready(function(){
	
	// LOADER
	var loader = document.querySelector(".loader")
	window.addEventListener("load", vanish);
	function vanish() {
	loader.classList.add("disppear");
	}
	
	// ONE PAGE 
	$('#nav').onePageNav();
	
	// MOBAIL MENU
	$(".menu-btn").click(function(){
		$(".menu").slideToggle();
	})		
	
	// TYPE JS
	var typed = new Typed('.header_typing', {
		strings: ["Freelancer.", "Web Designer."],
		typeSpeed: 40,
		backSpeed: 40,
		loop: true,
		showCursor: false,
		backDelay: 2000,
		startDelay: 1000,

	});
	var typed = new Typed('.about_typing', {
		strings: ["Freelancer.", "Web Designer."],
		typeSpeed: 40,
		backSpeed: 40,
		loop: true,
		showCursor: false,
		backDelay: 2000,
		startDelay: 1000,

	});

	// STICKY MENU
	$(".js_sticky_menu").waypoint(function(direction) {

		if (direction == "down") {
			$("nav").addClass("sticky_menu");
		} else {
			$("nav").removeClass("sticky_menu");
		}
	});

	// HUMBURGER MENU BTN
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
	  if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	  } else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	  }
	});


	// BACK TO TOP BUTTON
	//Get the button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.opacity = "1";
		} else {
			mybutton.style.opacity = "0";
		}
	}
	mybutton.addEventListener("click", topFunction);
	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// PROGRESS VAR
	function tdProgress(container){
		"use strict";
		container.find('.progress_area').each(function(i) {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.sj_bar_wrap');
			var pBar 			= progress.find('.sj_bar');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');},(i*0));
		});
	}
	jQuery('.skill_bar').each(function() {
		"use strict";
		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});	

	// SLICK SLIDER
	$('.slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,

	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
	
	// FANCY BOX
	$('[data-fancybox="gallery"]').fancybox({
		buttons: [
			"zoom",
			"slideShow",
			"fullScreen",
			"thumbs",
			"close"
		]
	});
	
	// FORM VALIDATION
	(function() {
		'use strict';
		window.addEventListener('load', function() {
			var forms = document.getElementsByClassName('needs-validation');
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();

	$('.dh-container').directionalHover({	
		speed: 300
	});	
});
