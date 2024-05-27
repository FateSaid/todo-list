import './style.css';
import {task1 } from './todo.js';


const listContainer = document.querySelector('.list-container');


function listToDom(){
    const listBox = document.createElement('div');
    listBox.classList.add('list-box');
    
    const listContent = document.createElement('div');
    listContent.classList.add('list-content');

    const listTitle = document.createElement('div');
    listContent.appendChild(listTitle);

    const listDescription = document.createElement('div');

    const listDueDate = document.createElement('div');
    listContent.appendChild(listDueDate);

    const listPriority = document.createElement('div');

    listTitle.textContent = task1.title;
    listDueDate.textContent = task1.dueDate;

    listBox.appendChild(listContent);
    listBox.appendChild(listContent);

    listContainer.appendChild(listBox);

    //hidden content
    const hiddenContent = document.createElement('div');
    hiddenContent.classList.add('hidden');

    listDescription.textContent = task1.description;
    listPriority.textContent = task1.priority;
    hiddenContent.appendChild(listDescription);
    hiddenContent.appendChild(listPriority);
    listBox.appendChild(hiddenContent);
    
    //button for list

    listBox.addEventListener('click', () => {
        hiddenContent.classList.toggle('show');
    })
    
}

listToDom();