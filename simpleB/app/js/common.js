$(function() {
	$('#my-menu').mmenu({
        extensions: [ 'widescreen',  'effect-menu-slide', 'pagedim-black' ],
        navbar: {
			title: '<img src="img/logo1.png" alt="Simple Beauty"  >'
        },
        offCanvas: {
			position  : 'right'
		}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});

    $('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService ()
		},100);

	});
		
 
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-caret-square-o-left"></i>', '<i class="fa fa-caret-square-o-right"></i>'],
		responsiveClass: true,
	

	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		

	});

	function carouselService (){
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height',thsh );
		});
	}carouselService();
 $('select'.selectize)({
	create: true,
	
 });

