(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

// modal image
$('.c-card__container').on('click', function() {
  var items = '';
  var activeItem = '';
  var childrenItems = '';

  $(this).addClass('active');

  items = $('.c-galery__content').find('.c-card__container'); // находим все слайды
  activeItem = items.filter('.active');// находим слайды с классом active
  childrenItems = activeItem.children().children()[1];

  $('.c-modal__container').css({'display': 'block'});
  $('.c-modal__image').attr('src',childrenItems.src );
});

// close modal image button
$('.modal__burger').on('click',function() {
  var items = '';
  var activeItem = '';

  items = $('.c-galery__content').find('.c-card__container'); // находим все слайды
  activeItem = items.filter('.active');
  activeItem.removeClass('active');
  $('.c-modal__container').css({'display': 'none'});
});


// переключение между категориями
$('.c-goods__menu-categories-item').on('click',function (e) {
  e.preventDefault();// отменяем событие по умолчанию

  var tabcontent = $('.c-goods__category-list'); // массив блоков с товарами
  var tablinks = $('.c-goods__categories-item'); // список категорий
  var id = $(this).attr('id');
  var elem = document.getElementsByClassName(id)[0];// находим блок товаров с необходимым классом


  // скрываем блоки с товарами и подсказку
  $('.c-goods__prompt').css({'display':'none'});
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров
});


// добавляем карту
function initMap() {
   var uluru = {lat: 57.870487, lng: 59.9525402};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 17,
     center: uluru
   });
   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });
};
