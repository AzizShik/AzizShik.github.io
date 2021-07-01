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




        // SLIDER

      let slideIndex = 1,
          slides = document.querySelectorAll('.slider-item'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          dotsWrap = document.querySelector('.slider-dots'),
          dots = document.querySelectorAll('.dot');

      showSlides(slideIndex);

      function showSlides(n) {
        
        if(n > slides.length) {
          slideIndex = 1;
        }

        if(n < 1) {
          slideIndex = slideIndex.length; 
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
      }

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      prev.addEventListener('click', function() {
        plusSlides(-1);
      });

      next.addEventListener('click', function() {
        plusSlides(1);
      });

      dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length + 1; i++){
          if (event.target.classList.contains('dot') && event.target == dots[i-1]){
            currentSlide(i);
          }
        }
      });

      // Calc

      let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = '0';

        persons.addEventListener('change', function() {
          personsSum = +this.value;
          total = (daysSum + personsSum)*4000;

          if(restDays.value == '') {
            totalValue.innerHTML = '0';
          } else {
            totalValue.innerHTML = total;
          }
        });

        restDays.addEventListener('change', function() {
          daysSum = +this.value;
          total = (daysSum + personsSum)*4000;

          if(restDays.value == '') {
            totalValue.innerHTML = '0';
          } else {
            totalValue.innerHTML = total;
          }
        });

        place.addEventListener('change', function() {
          if (restDays.value == '' || persons.value == ''){
            totalValue.innerHTML = 0;
          } else { 
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
          }
        });

});


