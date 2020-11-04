/* 
Ü: todos durchlaufen und nachschauen, wie viele erledigt und noch nicht erledigt sind
Resultat in html ausgeben
 */

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
// .then(json => console.log(json))
.then(json => renderTodos2(json))

let completedTodos: number = 0
let openTodos: number = 0

// zum Anlegen von neuen Tabellenreihen (sprich tr): insertRow()
// zum Anlegen von neuen Zellen in den Reihen (sprich td): insertCell()
function renderTodos2(todos: Array<{userId: number, id: number, title: string, completed: boolean}>) {
    
    for (const todo of todos) {

        // let newRow: HTMLTableRowElement = (<HTMLTableElement>document.querySelector('tcontent'))!.insertRow(); // liefert null, #todo
        let newRow: HTMLTableRowElement = (<HTMLTableElement>document.getElementById('tcontent'))!.insertRow()
        newRow.insertCell().innerText = String(todo.id)
        newRow.insertCell().innerText = String(todo.userId)
        newRow.insertCell().innerText = String(todo.title)
        newRow.insertCell().innerText = String(todo.completed)
        if (todo.completed) {
            newRow.style.textDecoration = 'line-through'
            completedTodos++
        }
    }
    openTodos = todos.length - completedTodos
    document.getElementById('parCompleted')!.textContent = String(completedTodos)
    document.getElementById('parOpen')!.textContent = String(openTodos)
}
