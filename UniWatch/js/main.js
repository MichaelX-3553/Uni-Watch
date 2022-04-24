gsap.from('.ranks', {
	duration: 1.8,
	x: 1500,
	ease: 'power2',
	background: 'red',
});
gsap.from('.navbar', { y: -500, ease: 'bounce', duration: 1.5 });
gsap.from('.nav-link', { opacity: 0, duration: 0.7, delay: 0.5 });
gsap.from('.info', {
	opacity: 0,
	duration: 0.9,
	delay: 0.9,
	rotation: 360,
	scale: 0,
	ease: 'back',
});
gsap.from('.header-text-image', {
	y: -1000,
	opacity: 0,
	duration: 1,
	ease: 'elastic',
	delay: 1.1,
});
