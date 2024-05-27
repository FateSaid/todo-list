import './style.css';
import {task1 } from './todo.js';


const listContainer = document.querySelector('.list-container');


function listToDom(){
    const listBox = document.createElement('div');
    listBox.classList.add('list-box');

    const listTitle = document.createElement('div');
    listTitle.classList.add('list')
    const listDescription = document.createElement('div');
    listDescription.classList.add('hidden');
    const listDueDate = document.createElement('div');
    listDueDate.classList.add('list');
    const listPriority = document.createElement('div');
    listPriority.classList.add('hidden');
    listTitle.textContent = task1.title;
    listDueDate.textContent = task1.dueDate;

    listBox.appendChild(listTitle);
    listBox.appendChild(listDueDate);

    listContainer.appendChild(listBox);
    
}

listToDom();