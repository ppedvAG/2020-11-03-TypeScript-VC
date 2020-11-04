"use strict";
/*
Ü: todos durchlaufen und nachschauen, wie viele erledigt und noch nicht erledigt sind
Resultat in html ausgeben
 */
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) { return response.json(); })
    // .then(json => console.log(json))
    .then(function (json) { return renderTodos2(json); });
var completedTodos = 0;
var openTodos = 0;
// zum Anlegen von neuen Tabellenreihen (sprich tr): insertRow()
// zum Anlegen von neuen Zellen in den Reihen (sprich td): insertCell()
function renderTodos2(todos) {
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
            completedTodos++;
        }
    }
    openTodos = todos.length - completedTodos;
    document.getElementById('parCompleted').textContent = String(completedTodos);
    document.getElementById('parOpen').textContent = String(openTodos);
}
