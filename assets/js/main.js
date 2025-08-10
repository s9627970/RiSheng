/*
	ZeroFour by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -22,
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">日盛車坊</span>' +
				'</div>'
			)
			.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});


				let currentIndex = 0;

				function scrollFBPosts(direction) {
					const container = document.getElementById('fbPostContainer');
					const posts = document.querySelectorAll('.fb-post');

					const isMobile = window.innerWidth <= 768;
					const postsPerView = isMobile ? 1 : 2; // 手機一次 1 篇，桌面一次 2 篇
					const postWidth = posts[0].offsetWidth; // 單篇實際寬度
					const totalGroups = Math.ceil(posts.length / postsPerView);

					currentIndex = (currentIndex + direction + totalGroups) % totalGroups;

					container.scrollTo({
						left: postWidth * postsPerView * currentIndex,
						behavior: 'smooth'
					});
				}


})(jQuery);

