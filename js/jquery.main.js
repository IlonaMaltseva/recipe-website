$(document).ready((function () {
	initMenu();
	initImageSlider();
}));

function initImageSlider() {
	$(".feature-slider").each(function () {
		const self = this;
		var swiper = new Swiper(this, {
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
				nextEl: $(self).closest('.feature-slider').find(".swiper-button-next").get(0),
				prevEl: $(self).closest('.feature-slider').find(".swiper-button-prev").get(0),
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			}
		});
	});
}

function initMenu() {
	$('.nav-opener').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('nav-active');
	});
};