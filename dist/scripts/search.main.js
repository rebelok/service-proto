"use strict";var chat=function(){function t(){$(".send-request").click(function(t){t.stopPropagation(),0===$(".chat").length&&$('<div class="chat"></div>').appendTo($("body"))}),$("body").on("click",".chat",function(t){$(t.currentTarget).toggleClass("chat_expanded")}),store.has("search")&&$(".search-input").val(store.get("search"))}return{init:t}}();$(function(){chat.init()});