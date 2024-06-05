const library = [];

function Project(title){
    return {title}
}

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

        //object project

        const projectObj = Project(projectText.value);
        library.push(projectObj);
    }

    function createOption(){
        const select = document.getElementById('projectTitle');
        const optionAvailable = document.querySelectorAll('.option-item');
        
        const projectNames = library.map(element => element.title);
        console.log(optionAvailable);

        projectNames.forEach(element => {
            if(Array.from(optionAvailable).some(op => op.textContent.includes(element))){
                return
            } else{
                const option = document.createElement('option');
                option.classList.add('option-item');
                option.value = element;
                option.textContent = element;
                select.appendChild(option);
            }
        });
    }

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
       newProject();
       createOption();
       form.reset();
    });
    
    
}

export{createList, createProject}