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
  $('#quest-phone').mask('+7 (999) 999-99-99');
  $('#modal__phone').mask('+7 (999) 999-99-99');

  $('.form__body').validate({
    rules: {
      user__name: 'required',
      user__phone: 'required',
    },
  });

  $('.quest__form-body').validate({
    rules: {
      name: 'required',
      phone: 'required',
    },
  });

  $('.modal-phone__form-body').validate({
    rules: {
      modal__name: 'required',
      modal__phone: 'required',
    },
  });

  $('.wework__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">  <img src="img/wework/left-arrow.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next">  <img src="img/wework/right-arrow.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  $('.modal-open').on('click', function(){
    $('.modal-phone').slideToggle();
    $('.modal-phone__dialog').slideToggle();
  });

  $('.modal-phone__close').on('click', function(){
    $('.modal-phone').slideToggle();
    $('.modal-phone__dialog').slideToggle();
  });

});