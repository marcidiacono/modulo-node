const fs = require("fs");
const fsp = require("fs").promises;
class Todos {
    constructor() {
        this.todos = [];
    }
    
    list() {
        return [...this.todos];
    }

    add(title) {
        let todo = {
            title: title,
            completed: false,
        };
        this.todos.push(todo);
    }

    complete(title) {
        if (this.todos.length === 0) {
            throw new Error("No hay tareas agregadas.");
        }
        let todoFound = false;
        this.todos.forEach(todo => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });
        if (!todoFound) {
            throw new Error(`No se pudo encontrar la tarea: ${title}.`)
        }
    }

    saveToFile(callback) {
        let file = "Title,Completed\n";
        this.todos.forEach(todo => {
            file += `${todo.title}, ${todo.completed}\n`; 
        });
        fs.writeFile("todos.csv", file, callback);
    }

    saveToFilePromise() {
        let file = "Title,Completed\n";
        this.todos.forEach(todo => {
            file += `${todo.title}, ${todo.completed}\n`; 
        });
        return fsp.writeFile("todos.csv", file);
    }

    async saveToFileAsyncAwait() {
        let file = "Title,Completed\n";
        this.todos.forEach(todo => {
            file += `${todo.title}, ${todo.completed}\n`; 
        });
        await fsp.writeFile("todos.csv", file);
    }
}

module.exports = Todos;