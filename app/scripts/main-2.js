/**
 * Created by rebel on 5/18/15.
 */
'use strict';

var app = (function App() {
  function initEvents() {
    var log = console.log.bind(console, 'App: '),
        search = $('.search-input'),
        filter = $('.filter-wrapper');

    search.on('keyup change', function (event) {
      var value = search.val();
      var trimmed = value.trim();
      if (trimmed.length && (trimmed.split(' ').length > 1 || value[value.length - 1] === ' ')) {
        filter.addClass('shown');
        log('show');
      } else {
        filter.removeClass('shown');
      }
      store.set('search',trimmed);

      if (event.keyCode === 13) {
        window.location.href = 'search.html';
      }
    });
  }

  function init() {
    initEvents();
  }

  return {init: init};
})();

$(function () {
  app.init();
});


