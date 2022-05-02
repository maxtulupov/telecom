//More in main-page
const addTextBtn = document.querySelector('.add-text__btn');
if (addTextBtn) {
	addTextBtn.addEventListener('click', event => {
		const addText = document.querySelector('.add-text__text');
		if (addText.classList.contains('_hidden')) {
			addText.classList.remove('_hidden');
		}
		addTextBtn.remove();
	});
}

//accordion
const accordion = (thisContent) => {
	const faqRow = document.querySelector(thisContent);
	const characteristicsItemElems = document.querySelectorAll('.item-add-services');

	characteristicsItemElems.forEach(elem => {
		if (elem.children[1].classList.contains('_active')) {
			elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
		}
	});

	const open = (button, dropDown, item) => {
		dropDown.style.height = `${dropDown.scrollHeight + 5}px`;
		dropDown.classList.add('_active');
		item.classList.add('_active')
	};

	const close = (button, dropDown, item) => {
		dropDown.classList.remove('_active');
		item.classList.remove('_active');
		dropDown.style.height = '';
	};

	if (faqRow) {
		faqRow.addEventListener('click', (event) => {
		const target = event.target;

		if (target.classList.contains('item-add-services__title')) {
			const parent = target.closest('.item-add-services');
			const description = parent.querySelector('.item-add-services__content');
			description.classList.contains('_active') ? close(target, description, parent) : open(target, description, parent);
		}
		if (target.parentNode.classList.contains('item-add-services__title') || target.parentNode.parentNode.classList.contains('item-add-services__title')) {
			const parent = target.closest('.item-add-services');
			const description = parent.querySelector('.item-add-services__content');
			description.classList.contains('_active') ? close(target, description, parent) : open(target, description, parent);
		}

		// if (target.closest('.item-faq__plus')) {
		// 	const newParent = target.closest('.faq__item');
		// 	const descriptionNew = newParent.querySelector('.item-add-services__content');
		// 	descriptionNew.classList.contains('_active') ? close(target, descriptionNew, newParent) : open(target, descriptionNew, newParent);
		// }
	});
	}
};
accordion('.add-services__content');
accordion('.help-open__content');

//hover on phones menu
const allPhonesBlock = document.querySelectorAll('.link-phones-header');
allPhonesBlock.forEach(item => {
	item.addEventListener('mouseover', event => {
		item.classList.add('active');
	});
	item.addEventListener('mouseout', event => {
		item.classList.remove('active');
	});
});

const thisBody = document.querySelector('body');
if (thisBody) {
	if (thisBody.classList.contains('_touch')) {
		thisBody.addEventListener('click', e => {
			const target = e.target;
			const clickedElem = document.querySelector('.clicked');
			if (target.closest('.link-phones-header')) {
				if (target.classList.contains('link-phones-header__top')) {
					e.preventDefault();
					if (!target.classList.contains('clicked')) {
						target.classList.add('clicked');
					} else {
						location = target.href;
					}
				}
			} else {
				if (clickedElem) {
					clickedElem.classList.remove('clicked');
				}
			}
		});
	}
}

//switch pages on switcher
const allSwitchInput = document.querySelectorAll('.switch-middle-header__input');
const thisUrl = window.location.href;
const dataA = allSwitchInput[0].getAttribute('data-a');
const dataB = allSwitchInput[0].getAttribute('data-b');

if (allSwitchInput) {
	allSwitchInput.forEach(elem => {
		elem.addEventListener('change', event => {
			if (dataA && dataB) {
				if (thisUrl !== dataB) {
					setTimeout(() => {
						document.location.href = dataB;
					}, 350);
				} else {
					setTimeout(() => {
						document.location.href = dataA;
					}, 350);
				}	
			}
		});
		if (dataA && dataB) {
			if (thisUrl !== dataB) {
				elem.checked = 'checked';
			} else {
				elem.checked = '';
				const thisLabel = elem.parentNode.querySelector('label');
				thisLabel.textContent = 'Для дома';
			}
		}
	});
}


let addWindowScrollEvent = false;
// Работа с шапкой при скроле
function headerScroll() {
	addWindowScrollEvent = true;
	const header = document.querySelector('header.header');
	const headerShow = header.hasAttribute('data-scroll-show');
	const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	const newClassPoint = 200;
	let scrollDirection = 0;
	let timer;

	if (window.scrollY >= newClassPoint) {
		header.style.display = 'none';
		header.style.height = '0';
		setTimeout(() => {
			header.style.display = '';
		}, 200);
		setTimeout(() => {
			header.style.height = '';
		}, 300);
		!header.classList.contains('_header-hide') ? header.classList.add('_header-hide') : null;
	}
	document.addEventListener("windowScroll", function (e) {
		const scrollTop = window.scrollY;
		if (window.scrollY >= newClassPoint) {
			!header.classList.contains('_header-hide') ? header.classList.add('_header-hide') : null;
		}
		// headerHideOnScroll();
		clearTimeout(timer);
		if (scrollTop >= startPoint) {
			!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
			if (headerShow) {
				if (scrollTop > scrollDirection) {
					// downscroll code
					header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
				} else {
					// upscroll code
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}
				timer = setTimeout(() => {
					!header.classList.contains('_header-show') ? header.classList.add('_header-show') : null;
				}, headerShowTimer);
			}
		} else {
			header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
			if (headerShow) {
				header.classList.contains('_header-show') ? header.classList.remove('_header-show') : null;
			}
			if (scrollTop > newClassPoint) {
				!header.classList.contains('_header-hide') ? header.classList.add('_header-hide') : null;
			} else {
				header.classList.contains('_header-hide') ? header.classList.remove('_header-hide') : null;
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	});
}
headerScroll();

// При подключении модуля обработчик события запустится автоматически
setTimeout(() => {
	if (addWindowScrollEvent) {
		let windowScroll = new Event("windowScroll");
		window.addEventListener("scroll", function (e) {
			document.dispatchEvent(windowScroll);
		});
	}
}, 0);

//==============
const welcomeVideo = document.querySelector('.video-welcome__video');
if (welcomeVideo) {
	welcomeVideo.addEventListener('click', e => {
		welcomeVideo.setAttribute('controls', '');
		welcomeVideo.play();
	});
}


//SubMenu Funcrions
const menuItemHasChildrens = document.querySelectorAll('.menu-item-has-children');
if (menuItemHasChildrens) {
	menuItemHasChildrens.forEach(elem => {
		elem.addEventListener('mouseenter', e => {
			const thisElemSubMenu = elem.querySelector('.sub-menu');
			if (thisElemSubMenu) {
				thisElemSubMenu.style.height = `${thisElemSubMenu.scrollHeight}px`;
				elem.classList.add('_active');
			}
		});
		elem.addEventListener('mouseleave', e => {
			const thisElemSubMenu = elem.querySelector('.sub-menu');
			if (thisElemSubMenu) {
				if (elem.classList.contains('_active')) {
					elem.classList.remove('_active');
					thisElemSubMenu.style.height = `0px`;
				}
			}
		});
	});
}

//Popup TV channels
const showTvOnPopup = () => {
	const popupTvContent = document.querySelector('.popup__tv-content');
	const allBlocksTvContent = popupTvContent.querySelectorAll('.content-tv__item');


	popupTvContent.addEventListener('click', e => {
		const target = e.target;


		const showList = block => {
			block ? block.classList.toggle('_active') : null;
		};

		const hideAllBlocks = () => {
			allBlocksTvContent.forEach(elem => {
				elem.classList.contains('_active') ? elem.classList.remove('_active') : null;
			});
		};


		if (target.closest('.item-content-tv__title')) {
			const thisBlock = target.closest('.content-tv__item');
			if (thisBlock.classList.contains('_active')) {
				showList(thisBlock);
			} else {
				hideAllBlocks();
				showList(thisBlock);
			}
		}
	});
};
showTvOnPopup();