// TUPLES

let jahresFeiertage: [ number, string, Date ];

let aktJahr: number = (new Date).getFullYear();

document.getElementById('outpJahr')!.textContent = String(aktJahr);

let einFeiertag: string = "Allerheiligen";

document.getElementById('outpFeiertag')!.textContent = einFeiertag;

let feiertagTag: Date = new Date;

document.getElementById('outpDatum')!.textContent = feiertagTag.toDateString();



// ================================================================
// einzeln darf man nicht befüllen
// jahresFeiertage[0] = aktJahr;
// sondern:
jahresFeiertage = [aktJahr, einFeiertag, feiertagTag];

console.log('jahresFeiertage[1] :>> ', jahresFeiertage[1]);



// ================================================================
// darf man tuples iterieren? - Ja

for (const el of jahresFeiertage) {
    console.log('el :>> ', el);    
}



// ================================================================
// Alternative
// Array<number | string | Date>