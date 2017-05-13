(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

// burger
$('.nav__burger').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
})
$('.nav__menu').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
})
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
  var tablinks = $('.c-goods__menu-categories-item'); // список категорий
  var id = $(this).attr('id');
  var elem = document.getElementsByClassName(id)[0];// находим блок товаров с необходимым классом

  // скрываем блоки с товарами и подсказку
  $('.c-goods__prompt').css({'display':'none'});
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  $('.c-goods__button').css({'display':'block'})
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
    $(tablinks[i]).children().css({'color':'#E1E0E3'})
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(this).children().css({'color':'#939393'});
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров

});


// добавляем карту
function initMap() {
   var uluru = {lat: 57.870316, lng: 59.9510703};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 17,
     center: uluru
   });
   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuXHJcbi8vIGJ1cmdlclxyXG4kKCcubmF2X19idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hhbmdlJyk7XHJcbiAgJCgnLm92ZXJsYXktbmF2X19jb250YWluZXInKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG59KVxyXG4kKCcubmF2X19tZW51JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZScpO1xyXG4gICQoJy5vdmVybGF5LW5hdl9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxufSlcclxuLy8gbW9kYWwgaW1hZ2VcclxuJCgnLmMtY2FyZF9fY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgdmFyIGFjdGl2ZUl0ZW0gPSAnJztcclxuICB2YXIgY2hpbGRyZW5JdGVtcyA9ICcnO1xyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgaXRlbXMgPSAkKCcuYy1nYWxlcnlfX2NvbnRlbnQnKS5maW5kKCcuYy1jYXJkX19jb250YWluZXInKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRi1xyXG4gIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTsvLyDQvdCw0YXQvtC00LjQvCDRgdC70LDQudC00Ysg0YEg0LrQu9Cw0YHRgdC+0LwgYWN0aXZlXHJcbiAgY2hpbGRyZW5JdGVtcyA9IGFjdGl2ZUl0ZW0uY2hpbGRyZW4oKS5jaGlsZHJlbigpWzFdO1xyXG5cclxuICAkKCcuYy1tb2RhbF9fY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KTtcclxuICAkKCcuYy1tb2RhbF9faW1hZ2UnKS5hdHRyKCdzcmMnLGNoaWxkcmVuSXRlbXMuc3JjICk7XHJcbn0pO1xyXG5cclxuLy8gY2xvc2UgbW9kYWwgaW1hZ2UgYnV0dG9uXHJcbiQoJy5tb2RhbF9fYnVyZ2VyJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICB2YXIgaXRlbXMgPSAnJztcclxuICB2YXIgYWN0aXZlSXRlbSA9ICcnO1xyXG5cclxuICBpdGVtcyA9ICQoJy5jLWdhbGVyeV9fY29udGVudCcpLmZpbmQoJy5jLWNhcmRfX2NvbnRhaW5lcicpOyAvLyDQvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLXHJcbiAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpO1xyXG4gIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQoJy5jLW1vZGFsX19jb250YWluZXInKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10LbQtNGDINC60LDRgtC10LPQvtGA0LjRj9C80LhcclxuJCgnLmMtZ29vZHNfX21lbnUtY2F0ZWdvcmllcy1pdGVtJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTsvLyDQvtGC0LzQtdC90Y/QtdC8INGB0L7QsdGL0YLQuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXHJcblxyXG4gIHZhciB0YWJjb250ZW50ID0gJCgnLmMtZ29vZHNfX2NhdGVnb3J5LWxpc3QnKTsgLy8g0LzQsNGB0YHQuNCyINCx0LvQvtC60L7QsiDRgSDRgtC+0LLQsNGA0LDQvNC4XHJcbiAgdmFyIHRhYmxpbmtzID0gJCgnLmMtZ29vZHNfX21lbnUtY2F0ZWdvcmllcy1pdGVtJyk7IC8vINGB0L/QuNGB0L7QuiDQutCw0YLQtdCz0L7RgNC40LlcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGlkKVswXTsvLyDQvdCw0YXQvtC00LjQvCDQsdC70L7QuiDRgtC+0LLQsNGA0L7QsiDRgSDQvdC10L7QsdGF0L7QtNC40LzRi9C8INC60LvQsNGB0YHQvtC8XHJcblxyXG4gIC8vINGB0LrRgNGL0LLQsNC10Lwg0LHQu9C+0LrQuCDRgSDRgtC+0LLQsNGA0LDQvNC4INC4INC/0L7QtNGB0LrQsNC30LrRg1xyXG4gICQoJy5jLWdvb2RzX19wcm9tcHQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICBmb3IoaT0wOyBpPHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJjb250ZW50W2ldKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9XHJcbiAgJCgnLmMtZ29vZHNfX2J1dHRvbicpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KVxyXG4gIC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGDINGB0L/QuNGB0LrQsCDQutCw0YLQtdCz0L7RgNC40LlcclxuICBmb3IoaT0wOyBpPHRhYmxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgICQodGFibGlua3NbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGFibGlua3NbaV0pLmNoaWxkcmVuKCkuY3NzKHsnY29sb3InOicjRTFFMEUzJ30pXHJcbiAgfVxyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC60LvQuNC60L3Rg9C70LhcclxuICAkKHRoaXMpLmNoaWxkcmVuKCkuY3NzKHsnY29sb3InOicjOTM5MzkzJ30pO1xyXG4gICQoZWxlbSkuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pOyAvLyDQvtGC0L7QsdGA0LDQttCw0LXQvCDQvdC10L7QsdGF0L7QtNC40LzRi9C5INCx0LvQvtC6INGC0L7QstCw0YDQvtCyXHJcblxyXG59KTtcclxuXHJcblxyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQsNGA0YLRg1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICB2YXIgdWx1cnUgPSB7bGF0OiA1Ny44NzAzMTYsIGxuZzogNTkuOTUxMDcwM307XHJcbiAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgIHpvb206IDE3LFxyXG4gICAgIGNlbnRlcjogdWx1cnVcclxuICAgfSk7XHJcbiAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICBwb3NpdGlvbjogdWx1cnUsXHJcbiAgICAgbWFwOiBtYXBcclxuICAgfSk7XHJcbn07XHJcbiJdfQ==
