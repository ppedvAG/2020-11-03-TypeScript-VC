/* 
1. Holen Sie bitte das Array von Todos von dem Webserver und zeigen Sie es in der Konsole
 */

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
// .then(json => console.log(json))
.then(json => renderTodos(json))

// zum Anlegen von neuen Tabellenreihen (sprich tr): insertRow()
// zum Anlegen von neuen Zellen in den Reihen (sprich td): insertCell()
function renderTodos(todos: Array<{userId: number, id: number, title: string, completed: boolean}>) {
    for (const todo of todos) {
        // let newRow: HTMLTableRowElement = (<HTMLTableElement>document.querySelector('tcontent'))!.insertRow(); // liefert null, #todo
        let newRow: HTMLTableRowElement = (<HTMLTableElement>document.getElementById('tcontent'))!.insertRow();
        newRow.insertCell().innerText = String(todo.id)
        newRow.insertCell().innerText = String(todo.userId)
        newRow.insertCell().innerText = String(todo.title)
        newRow.insertCell().innerText = String(todo.completed)
        if (todo.completed) {
            newRow.style.textDecoration = 'line-through';
        }
    }
}