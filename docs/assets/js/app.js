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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuXHJcbi8vIG1vZGFsIGltYWdlXHJcbiQoJy5jLWNhcmRfX2NvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIHZhciBpdGVtcyA9ICcnO1xyXG4gIHZhciBhY3RpdmVJdGVtID0gJyc7XHJcbiAgdmFyIGNoaWxkcmVuSXRlbXMgPSAnJztcclxuXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gIGl0ZW1zID0gJCgnLmMtZ2FsZXJ5X19jb250ZW50JykuZmluZCgnLmMtY2FyZF9fY29udGFpbmVyJyk7IC8vINC90LDRhdC+0LTQuNC8INCy0YHQtSDRgdC70LDQudC00YtcclxuICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuYWN0aXZlJyk7Ly8g0L3QsNGF0L7QtNC40Lwg0YHQu9Cw0LnQtNGLINGBINC60LvQsNGB0YHQvtC8IGFjdGl2ZVxyXG4gIGNoaWxkcmVuSXRlbXMgPSBhY3RpdmVJdGVtLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVsxXTtcclxuXHJcbiAgJCgnLmMtbW9kYWxfX2NvbnRhaW5lcicpLmNzcyh7J2Rpc3BsYXknOiAnYmxvY2snfSk7XHJcbiAgJCgnLmMtbW9kYWxfX2ltYWdlJykuYXR0cignc3JjJyxjaGlsZHJlbkl0ZW1zLnNyYyApO1xyXG59KTtcclxuXHJcbi8vIGNsb3NlIG1vZGFsIGltYWdlIGJ1dHRvblxyXG4kKCcubW9kYWxfX2J1cmdlcicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgdmFyIGFjdGl2ZUl0ZW0gPSAnJztcclxuXHJcbiAgaXRlbXMgPSAkKCcuYy1nYWxlcnlfX2NvbnRlbnQnKS5maW5kKCcuYy1jYXJkX19jb250YWluZXInKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGB0LvQsNC50LTRi1xyXG4gIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKTtcclxuICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuYy1tb2RhbF9fY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6ICdub25lJ30pO1xyXG59KTtcclxuIl19
