function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
@@include('libs/jquery-3.5.1.min.js')
@@include('libs/slick.min.js')
@@include('libs/jquery.maskedinput.js')
@@include('libs/jquery.validate.min.js')
@@include('libs/wow.min.js')

$(document).ready(function () {
  $('#phone').mask('+7 (999) 999-99-99');
  $('#modal-phone').mask('+7 (999) 999-99-99');

  $('.form__body').validate({
    rules: {
      user__name: 'required',
      user__phone: 'required',
      user__email: {
        required: true,
        email: true,
      }
    },
    messages: {
      user__name: "Укажите имя*",
      user__phone: "Укажите номер*",
      user__email: "Укажите почту правильно*",
    }
  });

  $('.modal__body').validate({
    rules: {
      user__name: 'required',
      user__phone: 'required',
      user__email: {
        required: true,
        email: true,
      }
    },
    messages: {
      user__name: "Укажите имя*",
      user__phone: "Укажите номер*",
      user__email: "Укажите почту правильно*",
    }
  });

  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev">  <img src="img/slider/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next">  <img src="img/slider/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });

  $('.header__nav-burger').on('click', function(){
    $('.header__nav-list').toggleClass('open__burger');
    $(this).toggleClass('active-burger');
  });

});