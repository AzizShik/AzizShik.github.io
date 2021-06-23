var selector = document.getElementsByClassName("phone-mask");

var im = new Inputmask("+7 (999)-999-99-99");
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



const tabsTrig = document.querySelectorAll('.balcony__tabs-triggers-link');
const tabsContent = document.querySelectorAll('.balcony__tabs-content');

tabsTrig.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    tabsTrig.forEach(function (child) {
      child.classList.remove('balcony__tabs-triggers-link--active');
    });

    tabsContent.forEach(function (child) {
      child.classList.remove('balcony__tabs-content--active');
    });

    item.classList.add('balcony__tabs-triggers-link--active');
    document.getElementById(id).classList.add('balcony__tabs-content--active');

  });
});

document.querySelector('.balcony__tabs-triggers-link').click();




const orderTabTrig = document.querySelectorAll('.order__tabs-triggers-link');
const orderTabLi = document.querySelectorAll('.order__tabs-triggers-li');
const orderTabContent = document.querySelectorAll('.order__tabs-content-item');


orderTabTrig.forEach(function(item) {
  item.addEventListener('click', function(e) {
    const parent  = item.parentNode;
    const id = e.target.getAttribute('href').replace('#', '');

    e.preventDefault();

    orderTabTrig.forEach(function(child) {
      child.classList.remove('order__tabs-triggers-link--active');
    });

    orderTabContent.forEach(function(child) {
        child.classList.remove('order__tabs-content-item--active');
    });
    orderTabLi.forEach(function(child) {
      child.classList.remove('order__tabs-triggers-li--active');
    });

    item.classList.add('order__tabs-triggers-link--active');
    parent.classList.add('order__tabs-triggers-li--active');

    document.getElementById(id).classList.add('order__tabs-content-item--active');
  });

});


document.querySelector('.order__tabs-triggers-link').click();




const modalBtn = document.querySelectorAll('.modal-btn');
const modalContent = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalBody = document.querySelector('.modal');

modalBtn.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    modalContent.classList.add('modal--active');
    document.body.classList.add('page-scroll');
  });
});

modalClose.addEventListener('click', function () {
  modalContent.classList.remove('modal--active');
  document.body.classList.remove('page-scroll');
});







const popupLinks = document.querySelectorAll('.popup-open'),
      popupClose = document.querySelectorAll('.popup-close'),
      popup = document.querySelectorAll('.modal');


if (popupLinks.length > 0) {
  for(let index = 0; index < popupLinks.length; index++){
    let link = popupLinks[index];

    link.addEventListener('click', function(e) {
      e.preventDefault();
      let id = link.getAttribute('href').replace('#', '');

      popup.forEach(function(item) {
        item.addEventListener('click', function(e) {
          item.classList.remove('modal--active');
        });
      });
      

      document.getElementById(id).classList.add('modal--active');
      let modalActive = document.getElementById(id);
      document.body.classList.add('page-scroll');
      
      modalActive.addEventListener('click', function(e) {
        if(!e.target.closest('.modal__content')){
          modalActive.classList.remove('modal--active');
          document.body.classList.remove('page-scroll');
        }
      });
      
    });
  }
}

popupClose.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();

    popup.forEach(function(item) {
      item.addEventListener('click', function(e) {
        item.classList.remove('modal--active');
      });
    });
    
    document.body.classList.remove('page-scroll');

  });
});





const menuBtn = document.querySelectorAll('.header-burger');
const menuContent = document.querySelector('.header-top-menu');



menuBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('header-burger--active');

    menuContent.classList.toggle('header-top-menu--active');

    if (item.classList.contains('header-burger--active')) {
      document.body.classList.add('page-scroll');
    } else {
      document.body.classList.remove('page-scroll');
    }

  });
});



// TIMER

const countDownDate = new Date('June 30, 2021 00:00:00').getTime();


let countDownFunction = setInterval(function () {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance  / (1000 * 60 * 60 * 24));
  let hours = Math.floor(distance  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minuts = Math.floor(distance  % (1000 * 60 * 60) / (1000 * 60 ));
  let seconds = Math.floor(distance  % (1000 * 60) / (1000));

  const htmldays = document.querySelector('.offer__timer-days-time');
  const htmlhours = document.querySelector('.offer__timer-hours-time');
  const htmlminuts  = document.querySelector('.offer__timer-minuts-time');
  const htmlseconds = document.querySelector('.offer__timer-seconds-time');
  

  htmldays.innerHTML = `${days < 10 ? `0${days}` : days}`;
  htmlhours.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
  htmlminuts.innerHTML = `${minuts < 10 ? `0${minuts}` : minuts}`;
  htmlseconds.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;

  if(distance < 0) {
    clearInterval(countDownFunction);
    document.querySelector(".offer__timer-block").innerHTML = "<span class='time-over'>Время истекло</span>";
  }
}, 1000);






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