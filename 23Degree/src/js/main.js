



const priceAreaBtn = document.querySelectorAll('.price__are-btn');

priceAreaBtn.forEach(function (item) {
  item.addEventListener('click', function (e) {

    if (item.classList.contains('price__area-btn--active')) {
      item.classList.add('price__area-btn--active');
    } else {
      priceAreaBtn.forEach(function (child) {
        child.classList.remove('price__are-btn--active');
      });
      item.classList.add('price__are-btn--active');
    }

  });
});

const priceConstMeter = document.querySelector('.price__consultation-meter');
const priceConstYear = document.querySelector('.price__consultation-year');
const priceConstObject = document.querySelector('.price__consultation-object');

document.querySelector('.price__area-btn1k').addEventListener('click', function () {
  priceConstMeter.innerHTML = '1 000м<sup>2</sup>';
  priceConstYear.innerHTML = '4 850 тг.';
  priceConstObject.innerHTML = '48 500 тг.';
});

document.querySelector('.price__area-btn1kk').addEventListener('click', function () {
  priceConstMeter.innerHTML = '10 000м<sup>2</sup>';
  priceConstYear.innerHTML = '48 500 тг.';
  priceConstObject.innerHTML = '485 000 тг.';
});

document.querySelector('.price__area-btn25kk').addEventListener('click', function () {
  priceConstMeter.innerHTML = '250 000м<sup>2</sup>';
  priceConstYear.innerHTML = '121 250 тг.';
  priceConstObject.innerHTML = '12 125 000 тг.';
});

document.querySelector('.price__area-btn5kkk').addEventListener('click', function () {
  priceConstMeter.innerHTML = '500 000м<sup>2</sup>';
  priceConstYear.innerHTML = '242 500 тг.';
  priceConstObject.innerHTML = '24 250 000 тг.';
});

const priceTrig = document.querySelectorAll('.price__pack-trig');

priceTrig.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (item.classList.contains('price__pack-trig--active')) {
      item.classList.add('price__pack-trig--active');
    } else {
      priceTrig.forEach(function (child) {
        child.classList.remove('price__pack-trig--active');
      });
      item.classList.add('price__pack-trig--active');
    }
    e.preventDefault();
  });
});




const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    1200: {
      slidesPerView: 7,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 20
    },

  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },


  observer: true,
  observeParents: true,
  observeSlideChildren: true,


});


const menuBurgerBtn = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__menu-burger');
const menuClose = document.querySelector('.header__menu-close');
const menuNav = document.querySelectorAll('.header__menu-link');

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

menuNav.forEach(function(item){
  item.addEventListener('click', function(){
    menuBurger.classList.remove('burger-open');
    document.body.classList.remove('page-scroll');
  });
});





menuBurgerBtn.addEventListener('click', function(){
  menuBurger.classList.add('burger-open');
  document.body.classList.add('page-scroll');
});

menuClose.addEventListener('click', function(){
  menuBurger.classList.remove('burger-open');
  document.body.classList.remove('page-scroll');
});

const projectsBtn = document.querySelectorAll('.projects__li');

projectsBtn.forEach(function(item){
  item.addEventListener('click', function(){
    if(item.classList.contains('projects__li--active')){
      item.classList.add('projects__li--active');
    } else {
      projectsBtn.forEach((function(item) {
        item.classList.remove('projects__li--active');
      }));
      item.classList.add('projects__li--active');
    }
    
  });
});


// FILTER

const filterBox = document.querySelectorAll('.box');

document.querySelector('.projects__nav').addEventListener('click', event => {
  if(event.target.tagName !== 'LI') return false;
  let filterClass = event.target.dataset['f'];
  
  filterBox.forEach( elem => {
    elem.classList.remove('hide'); 
    if(!elem.classList.contains(filterClass) && filterClass != 'all'){
      elem.classList.add('hide');
    }
  });
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

menuBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('menu-burger-open');

    menuContent.classList.toggle('header-top-menu--open');

    if (item.classList.contains('menu-burger-open')) {
      document.body.classList.add('page-scroll');
    } else {
      document.body.classList.remove('page-scroll');
    }

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
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});


scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});