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
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });
@@include('libs/jquery-3.5.1.min.js')
@@include('libs/jquery.validate.min.js')
@@include('libs/wow.min.js')
@@include('libs/jquery.maskedinput.js')
$(document).ready(function(){
  $("#phone").mask("+7 (999) 999-99-99");
  $("#order-phone").mask("+7 (999) 999-99-99");

  $("#order-form").validate({
    rules: {
      name: 'required',
      phone: 'required',
    },
    messages: {
      name: "Укажите имя*",
      phone: "Укажите номер*"
    }
  });

  $("#order-form-two").validate({
    rules: {
      name: 'required',
      phone: 'required',
    },
    messages: {
      name: "Укажите имя*",
      phone: "Укажите номер*"
    }
  });
});