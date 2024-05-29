import './style.css';
import {listToDom, addBtn, submitBtn, clearForm } from './todo.js';
import Plus from './plus.svg';

const library = [];



function ToDo(title, description, dueDate, priority){              //factory function
        return {title, description, dueDate, priority}
    }

function addLibrary(title, description, dueDate, priority){
    const task = ToDo(title, description,dueDate,priority);
    library.push(task);

}





addBtn();


function libraryToDOM(lib){
    lib.forEach(obj => {
        console.log(obj.title, obj.description, obj.dueDate, obj.priority);
    })
}





submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const dialog = document.querySelector('dialog');

    const titleDialog = document.getElementById('title').value;
    const descriptionDialog = document.getElementById('description').value;
    const dueDateDialog = document.getElementById('dueDate').value;
    const priorityDialog = document.getElementById('priority').value;
    addLibrary(titleDialog, descriptionDialog, dueDateDialog, priorityDialog);
    listToDom(titleDialog, descriptionDialog, dueDateDialog, priorityDialog);
    clearForm();
    dialog.close();

});


    



    


