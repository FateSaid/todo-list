


function listToDom(title, description, dueDate, priority){
    const listContainer = document.querySelector('.list-container');

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

    listTitle.textContent = title;
    listDueDate.textContent = dueDate;

    listBox.appendChild(listContent);

    listContainer.appendChild(listBox);

    //hidden content
    const hiddenContent = document.createElement('div');
    hiddenContent.classList.add('hidden');

    listDescription.textContent = description;
    listPriority.textContent = priority;
    hiddenContent.appendChild(listDescription);
    hiddenContent.appendChild(listPriority);
    listBox.appendChild(hiddenContent);
    
    //button for list

    listBox.addEventListener('click', () => {
        hiddenContent.classList.toggle('show');
    });

    //delete button

   const delBtn = document.createElement('button');
   delBtn.classList.add('delete-button');
   delBtn.textContent = 'Delete';
   listContent.appendChild(delBtn);
   delBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    listBox.remove();
   });


    
}






// add to-do list button

function addBtn(){
    const addListBtn = document.querySelector('.plus');
    const dialog = document.querySelector('dialog');
    addListBtn.addEventListener('click', ()=>{
        dialog.showModal();
    });
}

//dialog submit button

const submitBtn = document.querySelector('button[type="submit"]');

function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}

function submitAction(){
    const dialog = document.querySelector('dialog');

    const titleDialog = document.getElementById('title').value;
    const descriptionDialog = document.getElementById('description').value;
    const dueDateDialog = document.getElementById('dueDate').value;
    const priorityDialog = document.getElementById('priority').value;
    listToDom(titleDialog, descriptionDialog, dueDateDialog, priorityDialog);
    clearForm();
    dialog.close();
}

// dialog cancel

const cancelBtn = document.querySelector('button[type="cancel"]');


// new project button

function newProject(){
    const newProjectBtn = document.querySelector('.new-project');
    newProjectBtn.addEventListener('click', (e)=> {
        e.preventDefault();
    
        const projectList = document.createElement('div');
        projectList.classList.add('project-list');
    
    
        const project = document.querySelector('.project');
    
        const captureText = document.getElementById('projectN');
    
        projectList.textContent = captureText.value;
    
        
        project.appendChild(projectList);

        clearForm();
        
    } );
    
}



export {listToDom, addBtn, submitBtn,cancelBtn, clearForm, newProject, submitAction};