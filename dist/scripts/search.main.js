"use strict";$(function(){$(".send-request").click(function(t){t.stopPropagation(),0===$(".chat").length&&$('<div class="chat"></div>').appendTo($("body"))}),$("body").on("click",".chat",function(t){$(t.currentTarget).toggleClass("chat_expanded")})}());