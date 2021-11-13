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