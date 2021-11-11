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