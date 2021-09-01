const marketing = document.querySelector('.marketing');
const marketingTabs = document.querySelectorAll('.marketing__tab');
const marketingTabLinks = document.querySelectorAll('.marketing__bottom-li');

const materials = document.querySelector('.materials');
const marketingLinks = document.querySelectorAll('.marketing__bottom-link');
const marketingBottomLi = document.querySelectorAll('.marketing__bottom-li');
const marketingBottomList = document.querySelector('.marketing__bottom-list');
const marketingTopInfo = document.querySelector('.marketing__top-info');
const materialsTopTabs = document.querySelectorAll('.materials__top-tab');
const materialsArticlesLinks = document.querySelectorAll('.materials__articles-link');
const materialsTabClose = document.querySelectorAll('.materials__tab-close');
// MARKETING
const marketingClose = document.querySelectorAll('.marketing__tab-close');
const wrapper = document.querySelector('.wrapper');


for (let i = 0; i < marketingLinks.length; i++) {
  let marketingLink = marketingLinks[i];
  marketingLink.addEventListener('click', e => {
    e.preventDefault();
  });
}

for(let materialsClose of materialsTabClose) {
  materialsClose.addEventListener('click', (e) => {
    e.preventDefault();
  });
}

const linksText = [
  'Заявки на покупку квартиры в ЖК',
  'Заявки в бьюти-салон: М + Ж сегмент',
  'Концепция сайта для стоматологии',
  'Сайт для службы доставки пиццерии',
];

function linksTextCreator() {
  marketingLinks[0].innerHTML = linksText[0];
  marketingLinks[1].innerHTML = linksText[1];
  marketingLinks[2].innerHTML = linksText[2];
  marketingLinks[3].innerHTML = linksText[3];
}


const media1200 = window.matchMedia('(max-width: 1200px)');

function media1200px(e) {
  if (e.matches) {

  }
}

media1200.addListener(media1200px);
media1200px(media1200);




marketingTabLinks.forEach(item => {
  item.addEventListener('click', (e) => {
    let tab = e.target.getAttribute('data-tab');
    document.getElementById(tab).classList.add('marketing__tab--active');

    console.log(window.innerWidth);

    materialsTopTabs.forEach(item => {
      item.classList.remove('materials__top-tab--active');
    });

    document.querySelector('.marketing__bottom-info').style.maxWidth = '100%';
    marketingTopInfo.classList.remove('marketing__top-info--active');
    marketingBottomList.style.justifyContent = 'start';

    marketingBottomLi.forEach(item => {
      item.classList.remove('marketing__bottom-li--active');
    });
    document.querySelector('.marketing__bottom-nav').style.marginBottom = '30px';

    marketingClose.forEach(item => {
      item.addEventListener('click', () => {
        document.getElementById(tab).classList.remove('marketing__tab--active');
        marketing.classList.remove('marketing--active');
        materials.classList.remove('materials--passive');
      });
    });

    linksTextCreator();

    if (window.innerWidth > 1200) {
      marketing.classList.add('marketing--active');
      materials.classList.add('materials--passive');
    }

  });
});




materialsArticlesLinks.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const link = e.target;
    const id = link.getAttribute('href').replace('#', '');
    document.getElementById(id).classList.add('materials__top-tab--active');

    marketingTabs.forEach(item => {
      item.classList.remove('marketing__tab--active');
    });

    marketing.classList.remove('marketing--active');
    materials.classList.remove('materials--passive');







    if (wrapper.clientWidth > 1200) {
      document.querySelector('.marketing__bottom-info').style.maxWidth = '370px';
      marketingTopInfo.classList.add('marketing__top-info--active')
      materials.classList.add('materials--active');
      marketing.classList.add('marketing--passive');

      marketingBottomList.style.justifyContent = 'center';
      marketingLinks.forEach(item => {
        item.innerHTML = '';
      });
      marketingBottomLi.forEach(item => {
        item.classList.add('marketing__bottom-li--active');
      });
      document.querySelector('.marketing__bottom-nav').style.marginBottom = '0px';

      console.log('yes');

    }

    console.log();


  });
});


materialsTabClose.forEach(item => {
  item.addEventListener('click', () => {

    materialsTopTabs.forEach(item => {
      item.classList.remove('materials__top-tab--active');
    });

    document.querySelector('.marketing__bottom-info').style.maxWidth = '100%';
    marketingTopInfo.classList.remove('marketing__top-info--active');
    materials.classList.remove('materials--active');
    marketing.classList.remove('marketing--passive');
    marketingBottomList.style.justifyContent = 'start';

    marketingBottomLi.forEach(item => {
      item.classList.remove('marketing__bottom-li--active');
    });
    document.querySelector('.marketing__bottom-nav').style.marginBottom = '30px';

    linksTextCreator();
  });
});