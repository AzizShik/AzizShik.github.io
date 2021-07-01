var selector = document.getElementsByClassName("phone-mask");

var im = new Inputmask("(999)-999-99-99");
im.mask(selector);


    //============= dynamic placeholder for images

    const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    const targets = document.querySelectorAll('[data-src]');
    targets.forEach(target => {
        target.src = placeholder;
    });

    //============= IntersectionObserver

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
    };

    const loadImage = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')){
                entry.target.src = entry.target.getAttribute('data-src');
                entry.target.onload = () => {
                    entry.target.parentNode.classList.remove('loading');
                    entry.target.removeAttribute('data-src');
                };
            }
        });
    };

    const observer = new IntersectionObserver(loadImage, options);
    targets.forEach(target => {
        observer.observe(target);
    });




const modalBtn = document.querySelectorAll('.modal-btn');
const modalContent = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    modalContent.classList.add('modal--active');
    document.body.classList.add('page-scroll');
  });
});

modalClose.addEventListener('click', function () {
  modalContent.classList.remove('modal--active');
  document.body.classList.remove('page-scroll');
});



const menuBtn = document.querySelectorAll('.menu-burger');
const menuContent = document.querySelector('.header-top-menu');
const headerList = document.querySelector('.header-top-menu .header-list');


menuBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('menu-burger-open');

    menuContent.classList.toggle('header-top-menu--open');

    if (item.classList.contains('menu-burger-open')) {
      document.body.classList.add('page-scroll');
    } else {
      document.body.classList.remove('page-scroll');
    }

    headerList.addEventListener('click', function (event) {
      if(event.target.getElementsByTagName = "LI") {
        document.body.classList.remove('page-scroll');
        item.classList.remove('menu-burger-open');
        menuContent.classList.remove('header-top-menu--open');
      }
      
    });

  });
});



const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;


const getTop = () => window.pageYOffset || document.documentElement.scrollTop; 


const updateDashoffset = () => {
  
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};


window.addEventListener('scroll', () => {
  updateDashoffset();
  if ( getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else{
    scrollUp.classList.remove('scroll-up--active');
  }
});


scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});



let mySwiper = new Swiper ('.swiper-container', {
  lazy: true,
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 130,
	 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    1201: {
      slidesPerView: 3,
    },
	  1200: {
		slidesPerView: 1,
	  }
    
  }
  });