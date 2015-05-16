/**
 * Created by rebel on 5/17/15.
 */


$((function(){
$('.send-request').click(function(e){
  e.stopPropagation();

  if($('.chat').length === 0){
    $('<div class="chat"></div>').appendTo($('body'));
  }

});

  $('body').on('click','.chat',function(e){
    $(e.currentTarget).toggleClass('chat_expanded');
  });

})());
