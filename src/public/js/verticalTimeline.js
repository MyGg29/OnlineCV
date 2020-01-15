// @ts-nocheck
(function(){

  window.sr = ScrollReveal();

  if (window.width < 768) {

    Array.from(document.getElementsByClassName('timeline-content')).forEach((el) => {
        if (el.classList.contains('js-fadeInLeft')) {
            el.classList.remove('js-fadeInLeft')
            el.classList.add('js--fadeInRight')
        }
    });

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


})();
