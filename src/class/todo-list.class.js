import {TodoClass} from "./todo.class";

export class TodoListClass {
    constructor() {
        this.loadLocalStorage();
    }

    addTODO(task) {
        this.todos.push(task);
        this.saveLocalStorage();
    }

    addAllTODO(tasks) {
        tasks.forEach(task => this.addTODO(task));
    }

    deleteTODO(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }

    checkCompleted(id) {
        for (let todo of this.todos) {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteAllCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        let storage = localStorage.getItem('todo');
        this.todos = (storage) ? JSON.parse(storage) : new Array();
        this.todos = this.todos.map(TodoClass.fromJSON);
    }
}