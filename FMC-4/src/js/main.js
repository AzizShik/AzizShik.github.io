// PRELOADER
const preloader = document.querySelector('#preloader');
document.documentElement.classList.add('page-scroll');

window.onload = function(){
  preloader.classList.add('hide-preloader');
  document.documentElement.classList.remove('page-scroll');
};

window.addEventListener('DOMContentLoaded', function(){

    const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    const targets = document.querySelectorAll('[data-src]');
    targets.forEach(target => {
        target.src = placeholder;
    });


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


const ham = document.querySelector('.ham');
const menuBody = document.querySelector('.header-menu__body');
const menuHam = document.querySelector('.header-menu__burger');
const menuList = document.querySelector('.header-menu__list');

  menuBody.addEventListener('click', function(e){
    
    if(!e.target.closest('.header-menu__list')){
      ham.classList.remove('active-burger');
      hamRemove();
    }
  });

  ham.addEventListener('click', function(){
    ham.classList.toggle('active-burger');

  if(ham.classList.contains('active-burger')){
    hamActive();
    menuList.addEventListener('click', function(e){
      if(e.target.closest('.header-menu__li')){
          ham.classList.remove('active-burger');
          hamRemove();
      }
    });
    
  } else{
    hamRemove();
  }
});

  function hamActive(){
      menuBody.classList.add('menu--active');
      document.documentElement.style.overflowY = 'hidden';
      document.documentElement.classList.add('page-scroll');
  }
  function hamRemove(){
      menuBody.classList.remove('menu--active');
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.classList.remove('page-scroll');
  }

const anchors = document.querySelectorAll('a[href*="#"]');

  for(let anchor of anchors){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }



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


// MODAL

  const modal = document.querySelector('.modal');
  const modalCloses = document.querySelectorAll('.modal__close');
  const modalBtns = document.querySelectorAll('.modal-btn');

  if(modalBtns.length > 0){
    for(let i = 0; i < modalBtns.length; i++){
      const modalBtn = modalBtns[i];

      modalBtn.addEventListener('click', function(){
        document.documentElement.classList.add('page-scroll');
        document.querySelector('.header-menu').classList.add('page-scroll');
        modal.classList.add('modal--active');
      }); 
    }
  }

  if(modalCloses.length > 0){
    for(let i = 0; i < modalCloses.length; i++){
      const modalClose = modalCloses[i];

      modalClose.addEventListener('click', function(){
        document.documentElement.classList.remove('page-scroll');
        document.querySelector('.header-menu').classList.remove('page-scroll');
        modal.classList.remove('modal--active');
      });
    }
  }


// SLIDER

  const container = document.querySelector('.header__content'),
        track = document.querySelector('.header__content-slider'),
        items = document.querySelectorAll('.header__content-item'),
        dots = document.querySelectorAll('.header__content-btn'),
        btnPrev = document.querySelector('.arrow-prev'),
        btnNext = document.querySelector('.arrow-next');

        // SLIDER 2

        const desicionItems = document.querySelectorAll('.desicion__item'),
              desicionNextBtn = document.querySelector('.desicion__arrow-next'),
              desicionPrevBtn = document.querySelector('.desicion__arrow-prev'),
              desicionDots = document.querySelectorAll('.desicion__dot');

  let index = 0;

  const activeSlide = (n) => {
    for(let item of items){
      item.classList.remove('header__content-item--active');
    }
    items[n].classList.add('header__content-item--active');

    for(let desicionItem of desicionItems){
      desicionItem.classList.remove('desicion__item--active');
    }
    desicionItems[n].classList.add('desicion__item--active');
  };

  const activeDot = (n) => {
    for(let dot of dots){
      dot.classList.remove('header-btn--active');
    }
      dots[n].classList.add('header-btn--active');

      for(let desicionDot of desicionDots){
        desicionDot.classList.remove('desicion__dot--active');
      }
      desicionDots[n].classList.add('desicion__dot--active');
  };

  


  const nextSlide = () => {
    if(index == items.length - 1){
      index = 0;
      activeSlide(index);
      activeDot(index);
    } else {
      index++;
      activeSlide(index);
      activeDot(index);
    }
  };

  const prevSlide = () => {
    if(index == 0){
      index = items.length - 1;
      activeSlide(index);
      activeDot(index);
    } else {
      index--;
      activeSlide(index);
      activeDot(index);
    }
  };


  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      activeSlide(indexDot);
      activeDot(indexDot);
    });
  });

  desicionDots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      activeSlide(indexDot);
      activeDot(indexDot);
    });
  })

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  desicionNextBtn.addEventListener('click', nextSlide);
  desicionPrevBtn.addEventListener('click', prevSlide);





});