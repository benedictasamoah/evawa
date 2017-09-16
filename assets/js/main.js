/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('deep');

			if ($banner.length > 0
			&&	$header.removeClass('deep')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

			}

		// Menu.
			var $menu = $('#menu');

			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();

					// Hide.
						$menu._hide();

				})
				.find('.inner')
					.on('click', '.close', function(event) {

						event.preventDefault();
						event.stopPropagation();
						event.stopImmediatePropagation();

						// Hide.
							$menu._hide();

					})
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('click', 'a', function(event) {

						var href = $(this).attr('href');

						event.preventDefault();
						event.stopPropagation();

						// Hide.
							$menu._hide();

						// Redirect.
							window.setTimeout(function() {
								window.location.href = href;
							}, 350);

					});

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

})(jQuery);
'use strict';

var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
    menuSubs = [].slice.call(document.querySelectorAll('.dp_mn')),
    selectedMenu = undefined,
    subBg = document.querySelector('.dropdown__bg'),
    subBgBtm = document.querySelector('.dropdown__bg-bottom'),
    subArr = document.querySelector('.dropdown__arrow'),
    subCnt = document.querySelector('.dropdown__wrap'),
    header = document.querySelector('.main-header'),
    closeDropdownTimeout,
    startCloseTimeout = function startCloseTimeout() {
  closeDropdownTimeout = setTimeout(function () {
    return closeDropdown();
  }, 50);
},
    stopCloseTimeout = function stopCloseTimeout() {
  clearTimeout(closeDropdownTimeout);
},
    openDropdown = function openDropdown(el) {

  //- get menu ID
  var menuId = el.getAttribute('data-sub');
  //- get related sub menu
  var menuSub = document.querySelector('.dp_mn[data-sub="' + menuId + '"]');
  //- get menu sub content
  var menuSubCnt = menuSub.querySelector('.dp_mn__content');
  //- get height of top section
  var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();
  //- get menu position
  var menuMeta = el.getBoundingClientRect();
  //- get sub menu position
  var subMeta = menuSubCnt.getBoundingClientRect();

  //- set selected menu
  selectedMenu = menuId;

  //- Remove active Menu
  menuItems.forEach(function (el) {
    return el.classList.remove('active');
  });
  //- Set current menu to active
  el.classList.add('active');

  //- Remove active sub menu
  menuSubs.forEach(function (el) {
    return el.classList.remove('active');
  });
  //- Set current menu to active
  menuSub.classList.add('active');

  //- Set dropdown menu background style to match current submenu style
  subBg.style.opacity = 1;
  subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
  subBg.style.width = subMeta.width + 'px';
  subBg.style.height = subMeta.height + 'px';
  //- Set dropdown menu bottom section background position
  subBgBtm.style.top = menuSubTop.height + 'px';

  //- Set Arrow position
  subArr.style.opacity = 1;
  subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';
  //- Set sub menu style
  subCnt.style.opacity = 1;
  subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
  subCnt.style.width = subMeta.width + 'px';
  subCnt.style.height = subMeta.height + 'px';

  //- Set current sub menu style
  menuSub.style.opacity = 1;

  header.classList.add('dropdown-active');
},
    closeDropdown = function closeDropdown() {

  //- Remove active class from all menu items
  menuItems.forEach(function (el) {
    return el.classList.remove('active');
  });
  //- Remove active class from all sub menus
  menuSubs.forEach(function (el) {
    el.classList.remove('active');
    el.style.opacity = 0;
  });
  //- set sub menu background opacity
  subBg.style.opacity = 0;
  //- set arrow opacity
  subArr.style.opacity = 0;

  /*if(selectedMenu == 'nuf-developer'){
    document.getElementById('nf-dev').innerHTML = 'get shit done';

  }*/

  // unset selected menu
  selectedMenu = undefined;

  header.classList.remove('dropdown-active');
};

//- Binding mouse event to each menu items
menuItems.forEach(function (el) {

  //- mouse enter event
  el.addEventListener('mouseenter', function () {
    stopCloseTimeout();
    openDropdown(this);
  }, false);

  //- mouse leave event
  el.addEventListener('mouseleave', function () {
    return startCloseTimeout();
  }, false);
});

//- Binding mouse event to each sub menus
menuSubs.forEach(function (el) {

  el.addEventListener('mouseenter', function () {
    return stopCloseTimeout();
  }, false);
  el.addEventListener('mouseleave', function () {
    return startCloseTimeout();
  }, false);
});