/**
 * Created by rebel on 5/18/15.
 */
'use strict';

var app = (function App() {
  function initEvents() {
    var search = $('.search-input');

    /* global store */
    search.val(store.get('search'));
  }

  function init() {
    initEvents();
  }

  return {init: init};
})();

$(function () {
  if(window.chat){
    window.chat.init();
  }

  app.init();
});
