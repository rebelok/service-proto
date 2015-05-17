/**
 * Created by rebel on 5/17/15.
 */
'use strict';

window.chat = (function Chat(){
  /* global store */
function initEvents(){
  $('.send-request').click(function(e){
    e.stopPropagation();

    if($('.chat').length === 0){
      $('<div class="chat"></div>').appendTo($('body'));
    }

  });

  $('body').on('click','.chat',function(e){
    $(e.currentTarget).toggleClass('chat_expanded');
  });
}
  function init(){
    initEvents();

  console.log(store.has('search'));
  if(store.has('search')){
    var $search = $('.search-input');
    $search.val(store.get('search'));
    $search.keyup();
  }
  }
return {init:init};
})();
