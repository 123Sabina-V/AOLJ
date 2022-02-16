(function ($) {
	$(document).ready(function () {

	$( ".navbar__dropdown_btn" ).on('click', function() {
		$(this).find(".navbar__triangle").toggleClass('open-tab');
		$( this ).parent().find( ".tab-content" ).slideToggle( );
	});

	// $('.navbar__dropdown')
	// 	.on('mouseenter', function () {
	// 		$(this).find('.navbar__content ').show();
	// 	})
	// 	.on('mouseleave', function () {
	// 		$(this).find('.navbar__content ').hide();
	// 	}
	// );

	// $(document).on("click","button",function(){
	// 	$(".box").on("mouseover",function(){$(".box").css("background","blue")});
	// 	$(".box").on("mouseout",function(){$(".box").css("background","")});
	
	// })

	$('.navbar__dropdown_btn').on('click', function(e){
		e.preventDefault();
		$(this).css('color', '#ED994E');
		$(this).css('textDecoration', 'underline');
		$(this).css('textUnderlineOffse', '10px');
  
});
	
	$('.footer__img').on('click', function(e){
			e.preventDefault();
			$(this).css('border-color', '#2465B3');
	  
		// .on('click', function(e){
		// 	e.preventDefault();
		// 	$(this).attr('border-color', '');
	  	// });
	});
	$('.footer__dropdown')
		.on('mouseenter', function () {
			$(this).find('.footer__content').show();
		})
		.on('mouseleave', function () {
			$(this).find('.footer__content').hide();
		});
	});

	(function ($) {
		var arrowLeft = $('.slider__animate_btn-left'),
			arrowRight = $('.slider__animate_btn-right');

		arrowRight.hide();

		arrowLeft.on('click', function (event) {
			event.preventDefault();
			$('.slider__set').css({ 'right': '' });
			var galleryLeftAfter = $('.slider__set').offset().left;
			$('.slider__set').animate({ 'right': 0 }, 500);
			arrowLeft.delay(700).fadeOut(500);
			arrowRight.delay(500).fadeIn(500);

			arrowRight.on('click', function (event) {
				event.preventDefault();
				var galleryLeft = $('.slider__set').offset().left;
				$('.slider__set').animate({ 'right': (galleryLeft - galleryLeftAfter) }, 500);
				arrowRight.delay(700).fadeOut(500);
				arrowLeft.delay(500).fadeIn(500);


			});
		});
		setTimeout(function () {
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