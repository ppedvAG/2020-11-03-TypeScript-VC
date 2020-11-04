"use strict";
/*
Erstellen Sie ein Formular zur Pizzabestellung
Die Größe darf angegeben werden durch checkboxen
eine oder zwei checkboxen dürfen selektiert werden
durch die Summe von den Indizes von der Pizzagröße kann man ermitteln,
welche eine oder welche zwei Größen bestellt wurden

durch den Click auf einen Button wird die Bestellung abgenommen.

Entweder in die Konsole oder in HTML wird angezeigt, was bestellt wurde
*/
var Pizzagrößen;
(function (Pizzagrößen) {
    Pizzagrößen[Pizzagrößen["klein"] = 10] = "klein";
    Pizzagrößen[Pizzagrößen["mittel"] = 100] = "mittel";
    Pizzagrößen[Pizzagrößen["gro\u00DF"] = 1000] = "gro\u00DF";
    Pizzagrößen[Pizzagrößen["extraGro\u00DF"] = 10000] = "extraGro\u00DF";
})(Pizzagrößen || (Pizzagrößen = {}));
var summe = 0;
function checkOrder() {
    var checkboxes = document.getElementsByName('size'); //NodeList
    console.log('checkboxes :>> ', checkboxes);
    var checkboxesArray = [].slice.call(checkboxes);
    for (var _i = 0, checkboxesArray_1 = checkboxesArray; _i < checkboxesArray_1.length; _i++) {
        var checkbox = checkboxesArray_1[_i];
        if (checkbox.checked === true) {
            console.log('checked ');
            console.log('checkbox.value :>> ', checkbox.value);
            summe += Pizzagrößen[checkbox.value];
            console.log('summe :>> ', summe);
        }
    }
}
