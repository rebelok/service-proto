/**
 * Created by rebel on 5/18/15.
 */
'use strict';

var app = (function App() {
  function initEvents() {
    var log = console.log.bind(console, 'Search: '),
        search = $('.search-input');

    search.val(store.get('search'));
  }

  function init() {
    initEvents();
  }

  return {init: init};
})();

$(function () {
  app.init();
});
