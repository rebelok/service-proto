/**
 * Created by rebel on 5/17/15.
 */

'use strict';
(function Search(exports) {

  var placeTerms = ['магазин', 'супермаркет', 'универсам'],
      timeTerms = ['сегодня'],
      actionTerms = ['привезти', 'доставить', 'доставк', 'принести'],
      objectTerms = ['молоко', 'молока'],

      log = console.log.bind(console, 'Search: ');

  function check(searchTerm) {

    if (!searchTerm) {
      return;
    }

    searchTerm = searchTerm.toLowerCase();
    log('searchTerm =', searchTerm);
    function checkTerms(terms) {
      return terms.filter(function (term) {
        return searchTerm.indexOf(term) >= 0;
      });
    }

    var placeSelected,
        timeSelected,
        actionSelected,
        objectSelected,
        anySelected;

    placeSelected = checkTerms(placeTerms);
    timeSelected = checkTerms(timeTerms);
    actionSelected = checkTerms(actionTerms);
    objectSelected = checkTerms(objectTerms);

    anySelected = placeSelected.length || timeSelected.length || actionSelected.length || objectSelected.length;
log('anySelected',anySelected, 'placeSelected',placeSelected,'timeSelected',timeSelected ,'actionSelected',actionSelected ,'objectSelected',objectSelected);
    if (anySelected) {
      if (placeSelected.length) {
        if (objectSelected.length) {
          return 'Необходимо купить и доставить два пакета <b><u>молока</u></b> из <b><u>' + placeSelected + '</u></b>а Азбука Вкуса у метро Динамо';
        }
        if (actionSelected.length) {
          return 'Необходимо сегодня купить в <b><u>' + placeSelected + '</u></b>е Пилигрим боченок пива 5 литров ac-dc и <b><u>' + actionSelected + '</u></b> мне домой';
        }
        if (timeSelected.length) {
          return 'Необходимо <b><u>сегодня</u></b> купить в <b><u>' + placeSelected + '</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой';
        }
        return 'Необходимо купить в <b><u>' + placeSelected + '</u></b>е Пилигрим боченок пива 5 литров ac-dc и привезти мне домой';
      }
      if (timeSelected.length) {
        if (objectSelected.length) {
          return 'Необходимо купить два пакета <b><u>молока</u></b> и привезти по адресу 4я Советская 23 <b><u>сегодня</u></b> до 15:00';
        }
        if (actionSelected.length) {
          return 'Необходимо <b><u>сегодня</u></b> купить в магазине Пилигрим боченок пива 5 литров ac-dc и <b><u>' + actionSelected + '</u></b> мне домой';
        }
        return '<b><u>Cегодня</u></b> нужно занять  одно место на деревянных площадках в конце центральной аллеи на набережной в Филевском парке. Мы с семьей придем в 17:30.';

      }
      if (actionSelected.length) {
        if (objectSelected.length) {
          return 'Необходимо купить два пакета <b><u>молока</u></b> и <b><u>' + actionSelected + '</u></b> по адресу 4я Советская 23 сегодня до 15:00';
        }
        return 'Нужно купить и <b><u>' + actionSelected + '</u></b> два больших брикета мороженного пломбир и полкилограмма конфет «Мишка на севере»';
      }
    }
    return null;
  }

  exports.searcher3 = {check: check};
})(window);
