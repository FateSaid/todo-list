const library = [];

const toDoList = [];

function Project(title){
    return {title}
}

function List(title, description, dueDate, priority, project){
    return {title, description, dueDate, priority, project}
}

function setInDom(listTitle, listDescription, listDueDate, listPriority){
    let arr = [listTitle, listDescription, listDueDate, listPriority];
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('list');
    
    for(let i = 0; i < arr.length; i++){
        const div = document.createElement('div');
        
        div.textContent = arr[i];
        totalDiv.appendChild(div);
    }
    

    const maincontent = document.querySelector('.main-content');

    maincontent.appendChild(totalDiv);
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

        const listTitle = document.getElementById('title').value;

        const listDescription = document.getElementById('description').value;
        
        const listDueDate = document.getElementById('dueDate').value;

        const listPriority = document.getElementById('priority').value;

        const listprojectTitle = document.getElementById('projectTitle').value;

        const objList = List(listTitle, listDescription, listDueDate, listPriority, listprojectTitle);
        toDoList.push(objList);
        
        newL.textContent = listTitle;
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

        
        newProj.addEventListener('click', ()=>{
            const previousList = document.querySelectorAll('.list');
            previousList.forEach(del => del.remove());
            const filtered = toDoList.filter(element => element.project === newProj.textContent);
            filtered.forEach(object => {
                setInDom(object.title, object.description, object.listDueDate, object.priority);
            });
        });

    }

    function createOption(){
        const select = document.getElementById('projectTitle');
        const optionAvailable = document.querySelectorAll('.option-item');
        
        const projectNames = library.map(element => element.title);

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