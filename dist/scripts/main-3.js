"use strict";!function(e){function n(e){function n(n){return n.filter(function(n){return e.indexOf(n)>=0})}if(e){e=e.toLowerCase(),a("searchTerm =",e);var r,o,l,b,s;if(r=n(t),o=n(c),l=n(u),b=n(i),s=r.length||o.length||l.length||b.length,a("anySelected",s,"placeSelected",r,"timeSelected",o,"actionSelected",l,"objectSelected",b),s){if(l.length&&l[0]===u[2]&&(l=u[1]),r.length)return b.length?"Необходимо купить и доставить два пакета <b><u>молока</u></b> из <b><u>"+r+"</u></b>а Азбука Вкуса у метро Динамо":l.length?"Необходимо сегодня купить в <b><u>"+r+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и <b><u>"+l+"</u></b> мне домой":o.length?"Необходимо <b><u>сегодня</u></b> купить в <b><u>"+r+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой":"Необходимо купить в <b><u>"+r+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой";if(o.length)return b.length?"Необходимо купить два пакета <b><u>молока</u></b> и привезти по адресу 4я Советская 23 <b><u>сегодня</u></b> до 15:00":l.length?"Необходимо <b><u>сегодня</u></b> купить в магазине Пилигрим боченок пива 5 литров ac-dc и <b><u>"+l+"</u></b> мне домой":"<b><u>Cегодня</u></b> нужно занять  одно место на деревянных площадках в конце центральной аллеи на набережной в Филевском парке. Мы с семьей придем в 17:30.";if(l.length)return b.length?"Необходимо купить два пакета <b><u>молока</u></b> и <b><u>"+l+"</u></b> по адресу 4я Советская 23 сегодня до 15:00":"Нужно купить и <b><u>"+l+"</u></b> два больших брикета мороженного пломбир и полкилограмма конфет «Мишка на севере»"}return null}}var t=["магазин","супермаркет","универсам"],c=["сегодня"],u=["привезти","доставить","доставк","принести"],i=["молоко","молока"],a=console.log.bind(console,"Search: ");e.searcher3={check:n}}(window);var app=function(){function e(e){c(e);var n=e.target.value,t=window.searcher3.check(n);c("suggestion =",t),t&&(u.empty(),u.html('<div class="hint">'+t+"</div>"),store.set("search",n)),13===e.keyCode&&(window.location.href="search.html")}function n(){var n=$(".search-input");n.on("keyup change",e),$(".js-btn-services").click(function(){$(".main-body").addClass("main-body-text"),$(".js-btn-services").addClass("active"),$(".js-btn-popular").removeClass("active")}),$(".js-btn-popular").click(function(){$(".main-body").removeClass("main-body-text"),$(".js-btn-services").removeClass("active"),$(".js-btn-popular").addClass("active")})}function t(){n()}var c=console.log.bind(console,"App: "),u=$(".hint-wrapper");return{init:t}}();$(function(){app.init(),window.chat&&window.chat.init()});