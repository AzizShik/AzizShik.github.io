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

  $('.form').validate({
    rules: {
      name: 'required',
      phone: 'required',
    },
  });

  $('.cases__item-trigger').click(function(){
    $(this).next('.accordion-item__content').slideToggle(800);
    $(this).closest('.cases__item-trigger').toggleClass('active');
  });

  $("a[href^='#']").click(function () {
    var _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });

  $('.btn-step').click(function () {
    $('.modal__dialog').fadeIn();
    $('.modal').fadeIn();
  });
  $('.modal__close').click(function () {
    $('.modal__dialog').fadeOut();
    $('.modal').fadeOut();
  });

});