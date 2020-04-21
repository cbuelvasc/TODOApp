import {TodoClass} from '../class';
import {todoList} from '../index';

const divTODOList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const buttonDelete = document.querySelector('.clear-completed');
const ulFilter = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createTODOHtml = (todo) => {
    const htmlTODO = `<li class="${(todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
                <div class="view">
                    <input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
                    <label>${todo.task}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = htmlTODO;
    divTODOList.append(divElement.firstElementChild);
    return divElement;
};

txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new TodoClass(txtInput.value);
        todoList.addTODO(newTodo);
        createTODOHtml(newTodo);
        txtInput.value = '';
    }
});

divTODOList.addEventListener('click', (event) => {
    let nameElement = event.target.localName;
    let todoElement = event.target.parentElement.parentElement;
    let todoId = todoElement.getAttribute('data-id');
    if (nameElement.includes('input')) {
        todoList.checkCompleted(todoId);
        todoElement.classList.toggle('completed');
    } else if (nameElement.includes('button')) {
        todoList.deleteTODO(todoId);
        divTODOList.removeChild(todoElement);
    }
});

buttonDelete.addEventListener('click', () => {
    todoList.deleteAllCompleted();
    for (let i = divTODOList.children.length - 1; i >= 0; i--) {
        let element = divTODOList.children[i];
        if (element.classList.contains('completed')) {
            divTODOList.removeChild(element);
        }
    }
});

ulFilter.addEventListener('click', (event) => {

    let filter = event.target.text;
    if (!filter) {
        return;
    }

    anchorFilters.forEach(element => element.classList.remove('selected'));

    for (let element of divTODOList.children) {
        element.classList.remove('hidden');
        let completed = element.classList.contains('completed');
        switch (filter) {
            case 'Pendientes':
                if (completed) {
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completed) {
                    element.classList.add('hidden');
                }
                break;
        }
    }
});