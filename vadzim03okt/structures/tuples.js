"use strict";
// TUPLES
var jahresFeiertage;
var aktJahr = (new Date).getFullYear();
document.getElementById('outpJahr').textContent = String(aktJahr);
var einFeiertag = "Allerheiligen";
document.getElementById('outpFeiertag').textContent = einFeiertag;
var feiertagTag = new Date;
document.getElementById('outpDatum').textContent = feiertagTag.toDateString();
// ================================================================
// einzeln darf man nicht befüllen
// jahresFeiertage[0] = aktJahr;
// sondern:
jahresFeiertage = [aktJahr, einFeiertag, feiertagTag];
console.log('jahresFeiertage[1] :>> ', jahresFeiertage[1]);
// ================================================================
// darf man tuples iterieren? - Ja
for (var _i = 0, jahresFeiertage_1 = jahresFeiertage; _i < jahresFeiertage_1.length; _i++) {
    var el = jahresFeiertage_1[_i];
    console.log('el :>> ', el);
}
// ================================================================
// Alternative
// Array<number | string | Date>
