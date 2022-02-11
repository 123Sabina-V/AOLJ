(function ($) {
	$(document).ready(function () {

		$('.navbar__dropdown')
			.on('mouseenter', function () {
				$(this).find('.navbar__content ').show();
			})
			.on('mouseleave', function () {
				$(this).find('.navbar__content ').hide();
			});

		// jQuery(document).on("hover", ".navbar__dropdown ", function () {
		// 	jQuery(this).children(".navbar__content").fadeIn("fast");
		// }, function () {
		// 	jQuery(this).children(".navbar__content").fadeOut("fast");
		// });
	});

	(function($) {
		var arrowLeft = $('.arrow-left'),
			arrowRight = $('.arrow-right');
	  
		arrowRight.hide();
	  
		arrowLeft.on('click', function(event){
		  event.preventDefault();
		  $('.slider__set').css({'right':''});
		  var galleryLeftAfter = $('.slider__set').offset().left;
		  $('.slider__set').animate( { 'right' : 0 }, 3000);
		  arrowLeft.delay(2700).fadeOut(800);
		  arrowRight.delay(3500).fadeIn(800);
	  
		  arrowRight.on('click', function(event){
			event.preventDefault();
			var galleryLeft = $('.slider__set').offset().left;
			$('.slider__set').animate( { 'right' : (galleryLeft - galleryLeftAfter) }, 3000);
			arrowRight.delay(2700).fadeOut(800);
			arrowLeft.delay(3500).fadeIn(800);
			
	  
		  });
		});
		setTimeout( function(){
		  $('.js-slidein').addClass("js-slidein-visible")
		}, 300);
	  
	  
	  
	  })(jQuery);
	  $(".menu").on("click", function () {
		$(".dropdown-menu").slideToggle(300);
		$(this).toggleClass("active");
		// $(".navbar").toggleClass('active');
		let x = document.getElementById("myLinks");
  
		if (x.style.display == "flex") {
		  x.style.display = "none";
		} else {
		  x.style.display = "flex";
		}
	  });

})(jQuery);