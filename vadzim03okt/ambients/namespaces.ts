// Ohne Anlegen von zusätzlichen Gültigkeitbereichen, sind alle ts-Dateien im gleichen Namensraum

// let etwas: void; // Cannot redeclare block-scoped variable 'etwas'.ts(2451)
// primitives.ts(5, 5): 'etwas' was also declared here.

namespace myNewNamespace {
    export let etwas: string // hier ist der Name 'etwas' wieder verwendbar, nicht belegt
    // ohne export ist die Variable in den benachbarten NS nicht verfügbar    
}

namespace NS2 {
    etwas = 4 // die Variable aus dem höheren Scope, nicht aus dem benachbarten, wurde hier genommen
    let etw = myNewNamespace.etwas
    etw = 'd'
}