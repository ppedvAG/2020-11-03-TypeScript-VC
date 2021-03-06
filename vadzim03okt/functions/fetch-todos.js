"use strict";
/*
1. Holen Sie bitte das Array von Todos von dem Webserver und zeigen Sie es in der Konsole
 */
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    // .then(json => console.log(json))
    .then(function (json) { return renderTodos1(json); });
// zum Anlegen von neuen Tabellenreihen (sprich tr): insertRow()
// zum Anlegen von neuen Zellen in den Reihen (sprich td): insertCell()
function renderTodos1(todos) {
    for (var _i = 0, todos_1 = todos; _i < todos_1.length; _i++) {
        var todo = todos_1[_i];
        // let newRow: HTMLTableRowElement = (<HTMLTableElement>document.querySelector('tcontent'))!.insertRow(); // liefert null, #todo
        var newRow = document.getElementById('tcontent').insertRow();
        newRow.insertCell().innerText = String(todo.id);
        newRow.insertCell().innerText = String(todo.userId);
        newRow.insertCell().innerText = String(todo.title);
        newRow.insertCell().innerText = String(todo.completed);
        if (todo.completed) {
            newRow.style.textDecoration = 'line-through';
        }
    }
}
