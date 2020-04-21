import './styles.css';
import {TodoClass, TodoListClass} from './class'
import {createTODOHtml} from "./js/components";

export const todoList = new TodoListClass();

todoList.addAllTODO(new Array(new TodoClass('Decirle Te Amo'), new TodoClass('Darle un beso al amor de tu vida')))

todoList.todos.forEach(createTODOHtml);
