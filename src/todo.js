function List(title, description, dueDate, priority){
    return {title, description, dueDate, priority}
}

function createList(){
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    const addBtn = document.querySelector('.add');

    const mainContain = document.querySelector('.main-content');

    const submitBtn = document.querySelector('button[type="submit"]');
    const cancelBtn = document.querySelector('button[type="cancel"]');

    function newList(){
        const newL = document.createElement('div');
        newL.classList.add('list');

        const text = document.getElementById('title');
        newL.textContent = text.value;
        mainContain.appendChild(newL);
    }

    addBtn.addEventListener('click', ()=>{
        dialog.showModal();
    });

    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        dialog.close();
    });

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        newList();
        form.reset();
        dialog.close();
    });
}

function createProject(){
    const form = document.querySelector('.form-project');
    const addProjectBtn = document.querySelector('.add-project');

    const sidebarContent = document.querySelector('.sidebar');


    const projectText = document.getElementById('project');

    function newProject(){
        const newProj = document.createElement('div');
        newProj.classList.add('project-list');
        newProj.textContent = projectText.value;
        sidebarContent.appendChild(newProj);
    }

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
       newProject();
       form.reset();
    });
    
}

export{createList, createProject}