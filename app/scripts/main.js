/* jshint devel:true */
'use strict';
//console.log('store is ' + (store.enabled ? 'enabled' : 'disabled'));

/* STORE API
 * // Store 'marcus' at 'username'
 store.set('username', 'marcus')

 // Get 'username'
 store.get('username')

 // Remove 'username'
 store.remove('username')

 // Clear all keys
 store.clear()

 // Store an object literal - store.js uses JSON.stringify under the hood
 store.set('user', { name: 'marcus', likes: 'javascript' })

 // Get the stored object - store.js uses JSON.parse under the hood
 var user = store.get('user')
 alert(user.name + ' likes ' + user.likes)

 // Get all stored values
 store.getAll().user.name == 'marcus'

 // Loop over all stored values
 store.forEach(function(key, val) {
 console.log(key, '==', val)
 })
 * */

/* global store */

var app = (function App() {
  var log = console.log.bind(console, 'App: '),
      suggestionList,
      $wrapper = $('.suggestion-box-wrapper');

  function init() {
    initEvents();
  }

  function createBox(suggestion) {

    var $box = $('<div class="suggestion-box"></div>');
    $wrapper.empty();

    if (!suggestion || !suggestion.length) {
      return;
    }

    switch (suggestion.type) {
      case 1:
        $box.append(createBigUl(suggestion)).appendTo($wrapper);
        break;
      case 2:
        $box.append(createUl(suggestion)).appendTo($wrapper);
        break;
      case 3:
        $box.append($('<span class="suggestions-header js-can-hover">' + suggestion.title + '</span>')).append(createBigUl(suggestion)).appendTo($wrapper);
        break;
    }
  }

  function createUl(array) {
    var $ul = $('<ul class="suggestion-list"></ul>');
    $ul.append(array.reduce(
        function createListItems(prev, curr) {
          return prev + '<li class="suggestion-item js-can-hover">' + curr + '</li>';
        }, '')
    );
    return $ul;
  }

  function createBigUl(array) {
    var $bigUl = $('<ul class="suggestion-big-list"></ul>');
    var result = array.reduce(
      function createListWithTitle(prev, curr) {
        var $li = $('<li class="suggestion-big-item"></li>');
        var $span = '<span class="suggestion-list__header">' + curr.title + '</span>';
        return prev.append($li.append($span), $li.append(createUl(curr.list)));
      },
      $bigUl);
    return result;
  }

  function initEvents() {
    $('.js-btn-services').click(function () {
      $('.main-body').addClass('main-body-text');
      $('.js-btn-services').addClass('active');
      $('.js-btn-popular').removeClass('active');
    });

    $('.js-btn-popular').click(function () {
      $('.main-body').removeClass('main-body-text');
      $('.js-btn-services').removeClass('active');
      $('.js-btn-popular').addClass('active');
    });

    var $searchInput = $('.search-input');
    $searchInput.on('keyup change', processSearch);

    $wrapper.on('mouseenter', '.js-can-hover', function (event) {
      removeHovered();
      $(event.currentTarget).addClass('item_hovered');
    });

    //$wrapper.on('click', '.suggestions-header', function (event) {
    //  $searchInput.val($(event.currentTarget).text() + ' ');
    //  $searchInput.change();
    //});

    $wrapper.on('mouseup', '.suggestion-item', function (event) {
      $searchInput.val($searchInput.val() + ' ' + $(event.currentTarget).text() + ' ');
      $searchInput.change();
    });
  }

  function processSearch(event) {
    log(event);
    suggestionList = window.searcher.check(event.target.value);
    log('suggestionList =', suggestionList);
    createBox(suggestionList);

    store.set('search', event.target.value);

    if (event.keyCode === 13) {
      window.location.href = 'search.html';
    }
  }

  function removeHovered() {
    $wrapper.find('.js-can-hover').removeClass('item_hovered');
  }

  return {init: init}
})();
$(function() {
  app.init()
});




