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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuXHJcbi8vIG1vZGFsIGltYWdlXHJcbiQoJy5jLWNhcmRfX2NvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIHZhciBpdGVtcyA9ICcnO1xyXG4gIHZhciBhY3RpdmVJdGVtID0gJyc7XHJcbiAgdmFyIGNoaWxkcmVuSXRlbXMgPSAnJztcclxuXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIGl0ZW1zID0gJCgnLmMtZ2FsZXJ5X19jb250ZW50JykuZmluZCgnLmMtY2FyZF9fY29udGFpbmVyJyk7IC8vINC90LDRhdC+0LTQuNC8INCy0YHQtSDRgdC70LDQudC00YtcclxuICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuYWN0aXZlJyk7Ly8g0L3QsNGF0L7QtNC40Lwg0YHQu9Cw0LnQtNGLINGBINC60LvQsNGB0YHQvtC8IGFjdGl2ZVxyXG4gIGNoaWxkcmVuSXRlbXMgPSBhY3RpdmVJdGVtLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVsxXTtcclxuXHJcbiAgJCgnLmMtbW9kYWxfX2NvbnRhaW5lcicpLmNzcyh7J2Rpc3BsYXknOiAnYmxvY2snfSk7XHJcbiAgJCgnLmMtbW9kYWxfX2ltYWdlJykuYXR0cignc3JjJyxjaGlsZHJlbkl0ZW1zLnNyYyApO1xyXG59KTtcclxuXHJcbi8vIGNsb3NlIG1vZGFsIGltYWdlIGJ1dHRvblxyXG4kKCcubW9kYWxfX2J1cmdlcicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgdmFyIGFjdGl2ZUl0ZW0gPSAnJztcclxuXHJcbiAgaXRlbXMgPSAkKCcuYy1nYWxlcnlfX2NvbnRlbnQnKS5maW5kKCcuYy1jYXJkX19jb250YWluZXInKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRi1xyXG4gIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTtcclxuICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuYy1tb2RhbF9fY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xyXG59KTtcclxuXHJcblxyXG4vLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LzQtdC20LTRgyDQutCw0YLQtdCz0L7RgNC40Y/QvNC4XHJcbiQoJy5jLWdvb2RzX19tZW51LWNhdGVnb3JpZXMtaXRlbScpLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7Ly8g0L7RgtC80LXQvdGP0LXQvCDRgdC+0LHRi9GC0LjQtSDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG5cclxuICB2YXIgdGFiY29udGVudCA9ICQoJy5jLWdvb2RzX19jYXRlZ29yeS1saXN0Jyk7IC8vINC80LDRgdGB0LjQsiDQsdC70L7QutC+0LIg0YEg0YLQvtCy0LDRgNCw0LzQuFxyXG4gIHZhciB0YWJsaW5rcyA9ICQoJy5jLWdvb2RzX19jYXRlZ29yaWVzLWl0ZW0nKTsgLy8g0YHQv9C40YHQvtC6INC60LDRgtC10LPQvtGA0LjQuVxyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzBdOy8vINC90LDRhdC+0LTQuNC8INCx0LvQvtC6INGC0L7QstCw0YDQvtCyINGBINC90LXQvtCx0YXQvtC00LjQvNGL0Lwg0LrQu9Cw0YHRgdC+0LxcclxuXHJcblxyXG4gIC8vINGB0LrRgNGL0LLQsNC10Lwg0LHQu9C+0LrQuCDRgSDRgtC+0LLQsNGA0LDQvNC4INC4INC/0L7QtNGB0LrQsNC30LrRg1xyXG4gICQoJy5jLWdvb2RzX19wcm9tcHQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICBmb3IoaT0wOyBpPHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJjb250ZW50W2ldKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9XHJcbiAgLy8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0YMg0YHQv9C40YHQutCwINC60LDRgtC10LPQvtGA0LjQuVxyXG4gIGZvcihpPTA7IGk8dGFibGlua3MubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJsaW5rc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQutC70LjQutC90YPQu9C4XHJcbiAgJChlbGVtKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7IC8vINC+0YLQvtCx0YDQsNC20LDQtdC8INC90LXQvtCx0YXQvtC00LjQvNGL0Lkg0LHQu9C+0Log0YLQvtCy0LDRgNC+0LJcclxufSk7XHJcblxyXG5cclxuLy8g0LTQvtCx0LDQstC70Y/QtdC8INC60LDRgNGC0YNcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgdmFyIHVsdXJ1ID0ge2xhdDogNTcuODcwNDg3LCBsbmc6IDU5Ljk1MjU0MDJ9O1xyXG4gICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICB6b29tOiAxNyxcclxuICAgICBjZW50ZXI6IHVsdXJ1XHJcbiAgIH0pO1xyXG4gICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgcG9zaXRpb246IHVsdXJ1LFxyXG4gICAgIG1hcDogbWFwXHJcbiAgIH0pO1xyXG59O1xyXG4iXX0=
