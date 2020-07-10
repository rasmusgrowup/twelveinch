// Initialize Flickity carousel

var element =  document.getElementById('original');
if (typeof(element) != 'undefined' && element != null)
{

	document.addEventListener('DOMContentLoaded', function () {
		var elem = document.querySelector('.product-carousel');
		var flkty = new Flickity( elem, {
		  // options
			cellAlign: 'left',
			contain: true,
			pageDots: false,
			imagesLoaded: true,
			freeScroll: true,
			selectedAttraction: 0.08,
			friction: 0.9
		});
	});

}
