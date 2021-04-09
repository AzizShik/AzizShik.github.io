// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import MicroModal from 'micromodal';



document.addEventListener('DOMContentLoaded', () => {

	
	MicroModal.init({
		openTrigger: 'data-custom-open',
		closeTrigger: 'data-custom-close',
		disableScroll: true,
		awaitOpenAnimation:  true, 
		awaitCloseAnimation: true, 
	});

});
