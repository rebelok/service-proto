"use strict";!function(e){function n(e){function n(n){return n.filter(function(n){return e.indexOf(n)>=0})}if(e){e=e.toLowerCase(),r("searchTerm =",e);var l,o,b,a,h;if(l=n(t),o=n(u),b=n(c),a=n(i),h=l.length||o.length||b.length||a.length,r("anySelected",h,"placeSelected",l,"timeSelected",o,"actionSelected",b,"objectSelected",a),h){if(b.length&&b[0]===c[2]&&(b=c[1]),l.length)return a.length?"Необходимо купить и доставить два пакета <b><u>молока</u></b> из <b><u>"+l+"</u></b>а Азбука Вкуса у метро Динамо":b.length?"Необходимо сегодня купить в <b><u>"+l+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и <b><u>"+b+"</u></b> мне домой":o.length?"Необходимо <b><u>сегодня</u></b> купить в <b><u>"+l+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой":"Необходимо купить в <b><u>"+l+"</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой";if(o.length)return a.length?"Необходимо купить два пакета <b><u>молока</u></b> и привезти по адресу 4я Советская 23 <b><u>сегодня</u></b> до 15:00":b.length?"Необходимо <b><u>сегодня</u></b> купить в магазине Пилигрим боченок пива 5 литров ac-dc и <b><u>"+b+"</u></b> мне домой":"<b><u>Cегодня</u></b> нужно занять  одно место на деревянных площадках в конце центральной аллеи на набережной в Филевском парке. Мы с семьей придем в 17:30.";if(b.length)return a.length?"Необходимо купить два пакета <b><u>молока</u></b> и <b><u>"+b+"</u></b> по адресу 4я Советская 23 сегодня до 15:00":"Нужно купить и <b><u>"+b+"</u></b> два больших брикета мороженного пломбир и полкилограмма конфет «Мишка на севере»"}return null}}var t=["магазин","супермаркет","универсам"],u=["сегодня"],c=["привезти","доставить","доставк","принести"],i=["молоко","молока"],r=console.log.bind(console,"Search: ");e.searcher3={check:n}}(window);var app=function(){function e(e){u(e);var n=e.target.value,t=window.searcher3.check(n);u("suggestion =",t),t&&(c.empty(),c.html('<div class="hint">'+t+"</div>"),store.set("search",n)),13===e.keyCode&&(window.location.href="search.html")}function n(){var n=$(".search-input");n.on("keyup change",e)}function t(){n()}var u=console.log.bind(console,"App: "),c=$(".hint-wrapper");return{init:t}}();$(function(){app.init(),window.chat&&window.chat.init()});