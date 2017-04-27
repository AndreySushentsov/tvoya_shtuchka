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
$('.c-goods__menu-categories-item').on('click',function () {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbn0pKCk7XHJcblxyXG4vLyBtb2RhbCBpbWFnZVxyXG4kKCcuYy1jYXJkX19jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICB2YXIgaXRlbXMgPSAnJztcclxuICB2YXIgYWN0aXZlSXRlbSA9ICcnO1xyXG4gIHZhciBjaGlsZHJlbkl0ZW1zID0gJyc7XHJcblxyXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICBpdGVtcyA9ICQoJy5jLWdhbGVyeV9fY29udGVudCcpLmZpbmQoJy5jLWNhcmRfX2NvbnRhaW5lcicpOyAvLyDQvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLXHJcbiAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpOy8vINC90LDRhdC+0LTQuNC8INGB0LvQsNC50LTRiyDRgSDQutC70LDRgdGB0L7QvCBhY3RpdmVcclxuICBjaGlsZHJlbkl0ZW1zID0gYWN0aXZlSXRlbS5jaGlsZHJlbigpLmNoaWxkcmVuKClbMV07XHJcblxyXG4gICQoJy5jLW1vZGFsX19jb250YWluZXInKS5jc3MoeydkaXNwbGF5JzogJ2Jsb2NrJ30pO1xyXG4gICQoJy5jLW1vZGFsX19pbWFnZScpLmF0dHIoJ3NyYycsY2hpbGRyZW5JdGVtcy5zcmMgKTtcclxufSk7XHJcblxyXG4vLyBjbG9zZSBtb2RhbCBpbWFnZSBidXR0b25cclxuJCgnLm1vZGFsX19idXJnZXInKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gIHZhciBpdGVtcyA9ICcnO1xyXG4gIHZhciBhY3RpdmVJdGVtID0gJyc7XHJcblxyXG4gIGl0ZW1zID0gJCgnLmMtZ2FsZXJ5X19jb250ZW50JykuZmluZCgnLmMtY2FyZF9fY29udGFpbmVyJyk7IC8vINC90LDRhdC+0LTQuNC8INCy0YHQtSDRgdC70LDQudC00YtcclxuICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuYWN0aXZlJyk7XHJcbiAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgJCgnLmMtbW9kYWxfX2NvbnRhaW5lcicpLmNzcyh7J2Rpc3BsYXknOiAnbm9uZSd9KTtcclxufSk7XHJcblxyXG5cclxuLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC80LXQttC00YMg0LrQsNGC0LXQs9C+0YDQuNGP0LzQuFxyXG4kKCcuYy1nb29kc19fbWVudS1jYXRlZ29yaWVzLWl0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdGFiY29udGVudCA9ICQoJy5jLWdvb2RzX19jYXRlZ29yeS1saXN0Jyk7IC8vINC80LDRgdGB0LjQsiDQsdC70L7QutC+0LIg0YEg0YLQvtCy0LDRgNCw0LzQuFxyXG4gIHZhciB0YWJsaW5rcyA9ICQoJy5jLWdvb2RzX19jYXRlZ29yaWVzLWl0ZW0nKTsgLy8g0YHQv9C40YHQvtC6INC60LDRgtC10LPQvtGA0LjQuVxyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzBdOy8vINC90LDRhdC+0LTQuNC8INCx0LvQvtC6INGC0L7QstCw0YDQvtCyINGBINC90LXQvtCx0YXQvtC00LjQvNGL0Lwg0LrQu9Cw0YHRgdC+0LxcclxuXHJcblxyXG4gIC8vINGB0LrRgNGL0LLQsNC10Lwg0LHQu9C+0LrQuCDRgSDRgtC+0LLQsNGA0LDQvNC4INC4INC/0L7QtNGB0LrQsNC30LrRg1xyXG4gICQoJy5jLWdvb2RzX19wcm9tcHQnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICBmb3IoaT0wOyBpPHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJjb250ZW50W2ldKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9XHJcbiAgLy8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0YMg0YHQv9C40YHQutCwINC60LDRgtC10LPQvtGA0LjQuVxyXG4gIGZvcihpPTA7IGk8dGFibGlua3MubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJsaW5rc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQutC70LjQutC90YPQu9C4XHJcbiAgJChlbGVtKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7IC8vINC+0YLQvtCx0YDQsNC20LDQtdC8INC90LXQvtCx0YXQvtC00LjQvNGL0Lkg0LHQu9C+0Log0YLQvtCy0LDRgNC+0LJcclxufSk7XHJcbiJdfQ==
