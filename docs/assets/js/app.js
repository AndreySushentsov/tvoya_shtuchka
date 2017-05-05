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
$('.c-sidebar__menu').click(function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbn0pKCk7XHJcbi8vIGJ1cmdlclxyXG4kKCcubmF2X19idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hhbmdlJyk7XHJcbiAgJCgnLm92ZXJsYXktbmF2X19jb250YWluZXInKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG59KVxyXG4kKCcuYy1zaWRlYmFyX19tZW51JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZScpO1xyXG4gICQoJy5vdmVybGF5LW5hdl9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxufSlcclxuLy8gbW9kYWwgaW1hZ2VcclxuJCgnLmMtY2FyZF9fY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgdmFyIGFjdGl2ZUl0ZW0gPSAnJztcclxuICB2YXIgY2hpbGRyZW5JdGVtcyA9ICcnO1xyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgaXRlbXMgPSAkKCcuYy1nYWxlcnlfX2NvbnRlbnQnKS5maW5kKCcuYy1jYXJkX19jb250YWluZXInKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRi1xyXG4gIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTsvLyDQvdCw0YXQvtC00LjQvCDRgdC70LDQudC00Ysg0YEg0LrQu9Cw0YHRgdC+0LwgYWN0aXZlXHJcbiAgY2hpbGRyZW5JdGVtcyA9IGFjdGl2ZUl0ZW0uY2hpbGRyZW4oKS5jaGlsZHJlbigpWzFdO1xyXG5cclxuICAkKCcuYy1tb2RhbF9fY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KTtcclxuICAkKCcuYy1tb2RhbF9faW1hZ2UnKS5hdHRyKCdzcmMnLGNoaWxkcmVuSXRlbXMuc3JjICk7XHJcbn0pO1xyXG5cclxuLy8gY2xvc2UgbW9kYWwgaW1hZ2UgYnV0dG9uXHJcbiQoJy5tb2RhbF9fYnVyZ2VyJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICB2YXIgaXRlbXMgPSAnJztcclxuICB2YXIgYWN0aXZlSXRlbSA9ICcnO1xyXG5cclxuICBpdGVtcyA9ICQoJy5jLWdhbGVyeV9fY29udGVudCcpLmZpbmQoJy5jLWNhcmRfX2NvbnRhaW5lcicpOyAvLyDQvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLXHJcbiAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpO1xyXG4gIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQoJy5jLW1vZGFsX19jb250YWluZXInKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10LbQtNGDINC60LDRgtC10LPQvtGA0LjRj9C80LhcclxuJCgnLmMtZ29vZHNfX21lbnUtY2F0ZWdvcmllcy1pdGVtJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTsvLyDQvtGC0LzQtdC90Y/QtdC8INGB0L7QsdGL0YLQuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXHJcblxyXG4gIHZhciB0YWJjb250ZW50ID0gJCgnLmMtZ29vZHNfX2NhdGVnb3J5LWxpc3QnKTsgLy8g0LzQsNGB0YHQuNCyINCx0LvQvtC60L7QsiDRgSDRgtC+0LLQsNGA0LDQvNC4XHJcbiAgdmFyIHRhYmxpbmtzID0gJCgnLmMtZ29vZHNfX2NhdGVnb3JpZXMtaXRlbScpOyAvLyDRgdC/0LjRgdC+0Log0LrQsNGC0LXQs9C+0YDQuNC5XHJcbiAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpZClbMF07Ly8g0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YLQvtCy0LDRgNC+0LIg0YEg0L3QtdC+0LHRhdC+0LTQuNC80YvQvCDQutC70LDRgdGB0L7QvFxyXG5cclxuXHJcbiAgLy8g0YHQutGA0YvQstCw0LXQvCDQsdC70L7QutC4INGBINGC0L7QstCw0YDQsNC80Lgg0Lgg0L/QvtC00YHQutCw0LfQutGDXHJcbiAgJCgnLmMtZ29vZHNfX3Byb21wdCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIGZvcihpPTA7IGk8dGFiY29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmNvbnRlbnRbaV0pLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH1cclxuICAvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgyDRgdC/0LjRgdC60LAg0LrQsNGC0LXQs9C+0YDQuNC5XHJcbiAgZm9yKGk9MDsgaTx0YWJsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmxpbmtzW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC60LvQuNC60L3Rg9C70LhcclxuICAkKGVsZW0pLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTsgLy8g0L7RgtC+0LHRgNCw0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSDQsdC70L7QuiDRgtC+0LLQsNGA0L7QslxyXG59KTtcclxuXHJcblxyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQsNGA0YLRg1xyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICB2YXIgdWx1cnUgPSB7bGF0OiA1Ny44NzA0ODcsIGxuZzogNTkuOTUyNTQwMn07XHJcbiAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgIHpvb206IDE3LFxyXG4gICAgIGNlbnRlcjogdWx1cnVcclxuICAgfSk7XHJcbiAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICBwb3NpdGlvbjogdWx1cnUsXHJcbiAgICAgbWFwOiBtYXBcclxuICAgfSk7XHJcbn07XHJcbiJdfQ==
