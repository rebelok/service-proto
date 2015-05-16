/* jshint devel:true */
'use strict';
/* global store */
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
$(
(function App() {
  var log = console.log.bind(console, 'App: '),
      suggestionList,
      $wrapper = $('.suggestion-box-wrapper');

  $('.js-btn-services').click(function(){
    $('.main-body').addClass('main-body-text');

  });

  var $searchInput = $('.search-input');
  $searchInput.on('keyup change', processSearch);

  function processSearch(event) {
    log(event);
    suggestionList = window.searcher.check(event.target.value);
    log('suggestionList =', suggestionList);
    createBox(suggestionList);
  }


  function removeHovered() {
    $wrapper.find('.suggestion-item').removeClass('suggestion-item_hovered');
  }

  $wrapper.on('mouseenter', '.suggestion-item', function (event) {
    removeHovered();
    $(event.currentTarget).addClass('suggestion-item_hovered');
  });


  $wrapper.on('click', '.suggestion-item', function (event) {
    $searchInput.val($searchInput.val() + ' ' + $(event.currentTarget).text());
    $searchInput.change();
  });


  function createBox(list) {
    function createUl(array) {
      var $ul = $('<ul class="suggestion-list"></ul>');
      $ul.append(array.reduce(
          function createListItems(prev, curr) {
            return prev + '<li class="suggestion-item">' + curr + '</li>';
          }, '')
      );
      return $ul;
    }

    function createBigUl(array) {
      var $bigUl = $('<ul class="suggestion-big-list"></ul>');
      var result = array.reduce(
        function createListWithTitle(prev, curr) {
          var $li = $('<li class="suggestion-big-item"></li>');
          var $span = '<span class="suggestion-lit__header">' + curr.title + '</span>';
          return prev.append($li.append($span), $li.append(createUl(curr.list)));
        },
        $bigUl);
      return result;
    }

    var $box = $('<div class="suggestion-box"></div>');
    if (!list)return;
    switch (list.type) {
      case 1:

        $wrapper.empty();
        $box.append(createBigUl(list)).appendTo($wrapper);

        break;
      case 2:

        $wrapper.empty();
        $box.append(createUl(list)).appendTo($wrapper);
        break;
      case 3:
        $wrapper.empty();
        $box.append(
          $('<span class="suggestions-header">' + list.title + '</span>')
        ).append(
          createBigUl(list)
        ).appendTo($wrapper);

        break;
    }

  }
})());




