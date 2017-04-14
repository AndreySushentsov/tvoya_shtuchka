(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

//flipp card
$('.c-card__container').click(function () {
    $(this).toggleClass('flipped');
});
