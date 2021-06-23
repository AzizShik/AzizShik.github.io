window.addEventListener('DOMContentLoaded', function(){

  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

      function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        }
      }

      hideTabContent(1);

      function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
        }
      }

      info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
          for(let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
              hideTabContent(0);
              showTabContent(i);
              break;
            }
          }
        }
      });



      // TIMER

      const countDownDate = new Date('June 30, 2021 00:00:00').getTime();

      const countDownFunction = setInterval(function() {

        const now = new Date().getTime();

        const distanse = countDownDate - now;

        const hours = Math.floor(distanse % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
              minuts = Math.floor(distanse % (1000 * 60 * 60) / (1000 * 60)),
              seconds = Math.floor(distanse % (1000 * 60) / (1000));


          const timer = document.getElementById('timer'),
                htmlhours = document.querySelector('.hours'),
                htmlminuts = document.querySelector('.minutes'),
                htmlseconds = document.querySelector('.seconds');


          htmlhours.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
          htmlminuts.innerHTML = `${minuts < 10 ? `0${minuts}` : minuts}`;
          htmlseconds.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;


          if(distanse < 0) {
            clearInterval(countDownFunction);
            timer.innerHTML = "Время истекло";
          }

      }, 1000);



      // MODAL

      const more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

        more.addEventListener('click', function() {
          more.classList.add('more-splash');
          overlay.style.display = 'block';
          document.body.style.overflowY = 'hidden';
        });

        close.addEventListener('click', function() {
          more.classList.remove('more-splash');
          overlay.style.display = 'none';
          document.body.style.overflowY = 'auto';
        });



        // FORM

        let message = {
          loading: 'Загрузка...',
          succsess: 'Спасибо! Скоро мы с вами свяжемся',
          failure: 'Что-то пошло не так...'
        };


        let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

            statusMessage.classList.add('status');


        form.addEventListener('submit', function(event) {
          event.preventDefault();
          form.appendChild(statusMessage);

          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

          let formData = new FormData(form);
          request.send(formData);


          let obj = {};
          formData.forEach(function(value, key) {
            obj[key] = value;
          });

          let json = JSON.stringify(obj);
          request.send(json);

          request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.succsess;
            } else {
              statusMessage.innerHTML = message.failure;
            }
          });

          for(let i = 0; i < input.length; i++) {
            input[i].value = '';
          }

        });





});


