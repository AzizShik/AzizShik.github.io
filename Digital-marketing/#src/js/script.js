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
@@include('libs/jquery.maskedinput.js')
@@include('libs/jquery.validate.min.js')
@@include('libs/wow.min.js')

$(document).ready(function () {
  $('#phone').mask('+7 (999) 999-99-99');
  $('#modal-phone').mask('+7 (999) 999-99-99');

  $('.form').validate({
    rules: {
      name: 'required',
      phone: 'required',
    },
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


  $('.catalog__tabs-triggers').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.catalog__tabs').find('.catalog__tabs-item').removeClass('catalog__tabs-item--active').eq($(this).index()).addClass('catalog__tabs-item--active');
  });
  $('.catalog__tabs-link:first').click();


  $('.catalog__tabs-btn').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog__tabs-card-info').eq(i).toggleClass('active-details');
      $('.catalog__tabs-details').eq(i).toggleClass('active-details');
    })
  });

  $('.catalog__tabs-details-btn').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog__tabs-card-info').eq(i).toggleClass('active-details');
      $('.catalog__tabs-details').eq(i).toggleClass('active-details');
    })
  });


  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });

  $('#modal-btn').click(function () {
    $('.modal__dialog').fadeIn();
    $('.modal').fadeIn();
  });
  $('.modal__close').click(function () {
    $('.modal__dialog').fadeOut();
    $('.modal').fadeOut();
  });

});