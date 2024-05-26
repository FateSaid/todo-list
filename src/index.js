import './style.css';
import {task1 } from './todo.js';


const listContainer = document.querySelector('.list-container');

listContainer.textContent = '';
for(let key in task1){
    const div = document.createElement('div');
    div.classList.add('list');
    div.textContent = task1[key];
    listContainer.appendChild(div);
}
