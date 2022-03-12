const compountBtns = document.querySelectorAll('.compound__btn');
const compoundInfoWrappers = document.querySelectorAll('.compound__info-wrapper');
const wrapperBlocks = document.querySelectorAll('.compound__info-block');

compountBtns.forEach(item => {
  item.addEventListener('click', () => {

    if (item.parentNode.classList.contains('wrapper-active')) {
      item.parentNode.classList.remove('wrapper-active');
      item.classList.remove('compound__btn--active');
    } else {
      wrapperBlocks.forEach(item => {
        item.classList.remove('wrapper-active');
      });
      compountBtns.forEach(item => {
        item.classList.remove('compound__btn--active');
      });

      const infoBlock = item.parentNode;
      infoBlock.classList.add('wrapper-active');
      item.classList.add('compound__btn--active');
    }

  });
});



const articlesLinks = document.querySelectorAll('.articles__item-link');
const articlesText = document.querySelectorAll('.articles__item-text');

articlesLinks.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    if (item.parentNode.classList.contains('articles__item-active')) {
      item.parentNode.classList.remove('articles__item-active');
    } else {
      articlesText.forEach(item => {
        item.parentNode.classList.remove('articles__item-active');
      });
      item.parentNode.classList.add('articles__item-active');
    }
  });
});



const burgerBtn = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerLinks = document.querySelectorAll('.header__link');
const header = document.querySelector('.header');

const menuToggle = () => {
  burgerBtn.classList.toggle('burger--active');
  headerNav.classList.toggle('header__nav--active');
  document.querySelector('body').classList.toggle('page-lock');
};


burgerBtn.addEventListener('click', () => {
  menuToggle();
});


headerLinks.forEach(item => {
  item.addEventListener('click', () => {
    menuToggle();
  });
});




AOS.init({
  once: true,
});