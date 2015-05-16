/**
 * Created by rebel on 5/16/15.
 */

'use strict';

(function Search() {

  var placeTerms = ['магазин', 'супермаркет', 'универсам'],
      timeTerms = ['сегодня', ' завтра'],
      actionTerms = ['привезти', 'доставить', 'доставк', 'принести', 'купить'],
      objectTerms = ['молоко', 'молока'],

      suggectionsList = {
        place : {
          title: 'Откуда?',
          list : ['Ближайшего магазина', 'Любого магазина']
        },
        time  : {
          title: 'Когда?',
          list : ['Сегодня', ' Завтра', '21 мая', '22 мая']
        },
        action: {
          title: 'Что сделать?',
          list : ['Привезти', 'Забрать', 'Купить']
        },
        object: {
          title: 'Что именно?',
          list : ['Фрукты', 'Молоко', 'Воду']
        }

      },
      log = console.log.bind(console, 'Search: ');

  function check(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    log('searchTerm =', searchTerm);
    function checkTerms(terms) {
      return terms.some(function (term) {
        return searchTerm.indexOf(term) >= 0;
      });
    }

    var suggestions = [],
        placeSelected,
        timeSelected,
        actionSelected,
        objectSelected,
        anySelected;

    placeSelected = checkTerms(placeTerms);
    timeSelected = checkTerms(timeTerms);
    actionSelected = checkTerms(actionTerms);
    objectSelected = checkTerms(objectTerms);

    anySelected = placeSelected || timeSelected || actionSelected || objectSelected;

    if (anySelected) {
      if (!placeSelected) {
        suggestions.push(suggectionsList.place);
      }
      if (!timeSelected) {
        suggestions.push(suggectionsList.time);
      }
      if (!actionSelected) {
        suggestions.push(suggectionsList.action);
      }
      if (!objectSelected) {
        suggestions.push(suggectionsList.object);
      }
    } else {
      var allTerms, suggectionTerms, filtered;

      var filter = function filter(element) {
        return element.indexOf(searchTerm) === 0;
      };

      allTerms = [placeTerms, timeTerms, actionTerms, [objectTerms[0]]];

      suggectionTerms = allTerms.reduce(function (prev, curr) {
        filtered = curr.filter(filter);
        return prev.concat(filtered);
      }, []);

      log('suggectionTerms =', suggectionTerms);

      if (suggectionTerms.length > 1) {
        suggestions.push(suggectionTerms);
      }

      if (suggectionTerms.length === 1) {
        suggestions = check(suggectionTerms[0]);
        suggestions.title = suggectionTerms[0];
      }
    }
    return suggestions;
  }

  return {check: check};
})();
