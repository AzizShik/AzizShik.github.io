
videojs(document.querySelector('.video-js'));


const modal = document.querySelectorAll('.modal')

const modalPatientsBtn = document.querySelector('.modal-patients-btn');
const modalAdviceBtn = document.querySelector('.modal-advice-btn');
const modalSystemBtn = document.querySelector('.modal-system-btn')


const modalPatientsContent = document.querySelector('.modal-patients');
const modalAdviceContent = document.querySelector('.modal-advice');
const modalSystemContent = document.querySelector('.modal-system');

const modalClose = document.querySelectorAll('.modal__close');



modalPatientsBtn.addEventListener('click', function () {
  modalPatientsContent.classList.add('modal--active');
  document.body.classList.add('page-scroll');
  scrollUp.classList.remove('scroll-up--active')
});

modalAdviceBtn.addEventListener('click', function () {
  modalAdviceContent.classList.add('modal--active');
  document.body.classList.add('page-scroll');
  scrollUp.classList.remove('scroll-up--active')
});

modalSystemBtn.addEventListener('click', function () {
  modalSystemContent.classList.add('modal--active');
  document.body.classList.add('page-scroll');
  scrollUp.classList.remove('scroll-up--active')
});


modalClose.forEach(function (item) {
  item.addEventListener('click', function () {
    modal.forEach(function (item) {
      item.classList.remove('modal--active')
    })
    document.body.classList.remove('page-scroll')
  })
})







const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


const updateDashoffset = () => {

  const height = document.documentElement.scrollHeight - window.innerHeight
  const dashoffset = pathLength - (getTop() * pathLength / height)

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};


window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active')
  } else {
    scrollUp.classList.remove('scroll-up--active')
  }
});


scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
});