/**
 * Created by rebel on 5/17/15.
 */



  var app = (function App() {
    var log = console.log.bind(console, 'App: '),
        $hint=$('.hint-wrapper');

  function processSearch(event) {
    log(event);
    var searchTerm = event.target.value;
    var suggestion = window.searcher3.check(searchTerm);
    log('suggestion =', suggestion);


    if(suggestion){
      $hint.empty();
      $hint.html('<div class="hint">'+suggestion+'</div>');

      store.set('search', searchTerm);
    }

    if (event.keyCode === 13) {
      window.location.href = 'search.html';
    }
  }

function initEvents(){
  var $searchInput = $('.search-input');
  $searchInput.on('keyup change', processSearch);
}

  function init(){
    initEvents();
  }

  return {init:init};
  })();

$(function(){
app.init();
  if(chat){
    chat.init();
  }
});

