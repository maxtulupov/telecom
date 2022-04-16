//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_main = new Swiper('.main-silder__content', {
	// effect: 'fade',
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-main-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.controlls-main-slider .controlls-main-slider__next',
		prevEl: '.controlls-main-slider .controlls-main-slider__prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
let promo_slider = new Swiper('.promo__content', {
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	// Dotts
	pagination: {
		el: '.controlls-promo-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.controlls-promo-slider__next',
		prevEl: '.controlls-promo-slider__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 1.7,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1171: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let choose_slider = new Swiper('.choose__content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-choose-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
		prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 1.7,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let feedbacks_slider = new Swiper('.feedbacks__content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: false,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-feedbacks-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
	// 	prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
		},
		768: {
			slidesPerView: 1.2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let news_slider = new Swiper('.news__mobile-content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1.8,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-news-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
	// 	prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 1.8,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let equip_slider = new Swiper('.equip__mobile-content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1.8,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-equip-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
	// 	prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let look_slider = new Swiper('.look__mobile-content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1.8,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-look-slider__slider-pagination',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
	// 	prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let how_slider = new Swiper('.how__mobile-content', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1.8,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.controlls-how-slider__slider-pagination',
		clickable: true,
		// dynamicBullets: true,
		// dynamicMainBullets: 2,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.controlls-choose-slider .controlls-choose-slider__next',
	// 	prevEl: '.controlls-choose-slider .controlls-choose-slider__prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		600: {
			slidesPerView: 1.6,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});