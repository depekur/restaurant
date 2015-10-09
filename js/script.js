$('.slider').lbSlider({
	 leftBtn: '#arrow-left', // left control selector
	 rightBtn: '#arrow-right', // right control selector
	 visible: 1, // visible elements quantity
	 autoPlay: true, // autoscroll flag (default: false)
	 autoPlayDelay: 1 // delay of autoscroll in seconds (default: 10)
});

$('.paralaxed-1').parallax({
							imageSrc: '../media/8164362046_b413e01d8d_k.jpg',
							speed: 0.2
						});

$('.paralaxed-2').parallax({
							imageSrc: '../media/c84u398fjwoifj209fj2of.jpg',
							speed: 0
						});

$('.paralaxed-3').parallax({
							imageSrc: '../media/6be2300fcd974cd611937b3992e6a49b.jpg',
							speed: 0.2
						});
