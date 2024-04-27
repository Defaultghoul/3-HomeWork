document.addEventListener('DOMContentLoaded', function () {
	function loadImage(image) {
		image.setAttribute('src', image.getAttribute('data-src'));
		image.classList.add('loaded');
	}

	const lazyImages = document.querySelectorAll('img[data-src]');

	const observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				loadImage(entry.target);
				observer.unobserve(entry.target);
			}
		});
	});

	lazyImages.forEach(image => {
		observer.observe(image);
	});
});
