import './style.css';
import {listToDom, addBtn, submitBtn,cancelBtn, newProject, submitAction } from './todo.js';


const project = {};

function createProject(projectName, ...toDoList){
    if(!projectName || typeof projectName !== 'string'){
        return;
    }

    obj[projectName] = toDoList;
}




function ToDo(title, description, dueDate, priority){              //factory function
        return {title, description, dueDate, priority}
    }

function addLibrary(title, description, dueDate, priority){
    const task = ToDo(title, description,dueDate,priority);
    project.push(task);

}






addBtn();


function libraryToDOM(lib){
    lib.forEach(obj => {
        console.log(obj.title, obj.description, obj.dueDate, obj.priority);
    })
}



//submit button for dialog

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitAction();
    

});

//cancel button for dialog

cancelBtn.addEventListener('click', ()=>{
    dialog.close();
});





//project button

newProject();

    



    


