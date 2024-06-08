

const library = [{title:'Home'}];

const toDoList = [];



function Project(title){
    return {title}
}

function List(title, description, dueDate, priority, project){
    return {title, description, dueDate, priority, project}
}

function setInDom(listTitle, listDescription, listDueDate, listPriority){
    let arr = [listTitle, listDescription, listDueDate, listPriority];

    const visibleContent = document.createElement('div');
    visibleContent.classList.add('visible');

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('list');

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-list-button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', ()=>{
        const index = toDoList.findIndex( item => item.project === totalDiv.project);
        toDoList.splice(index, 1);
        totalDiv.remove();
        
    });

    function createCheck(){
        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        visibleContent.appendChild(check);

        check.addEventListener('click', ()=>{
            totalDiv.classList.toggle('show');
        });
    }
    createCheck();

    const allHiddenDiv = document.createElement('div');
    allHiddenDiv.classList.add('hidden');
    for(let i = 0; i < arr.length; i++){
        
        if(i === 0 || i === 2){
            const div = document.createElement('div');
            
            div.textContent = arr[i];
            visibleContent.appendChild(div);
        } else{
            const hid = document.createElement('div');
            
            
            hid.textContent = arr[i];
            allHiddenDiv.appendChild(hid);
        }
    }
    
    totalDiv.addEventListener('click', ()=>{
        allHiddenDiv.classList.toggle('open');
    });

    if(listPriority === 'low'){
        totalDiv.classList.add('green');
    } else if(listPriority === 'medium'){
            totalDiv.classList.add('yellow');
        } else if(listPriority === 'high'){
            totalDiv.classList.add('red');
        }
    


    
    visibleContent.appendChild(delBtn);
    const mainContent = document.querySelector('.main-content-list-item');
    totalDiv.appendChild(visibleContent);
    mainContent.appendChild(totalDiv);

    totalDiv.appendChild(allHiddenDiv);

    


}

function createList(){
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('.form-list');
    const addBtn = document.querySelector('.add');

    const submitBtn = document.querySelector('button[type="submit"]');
    const cancelBtn = document.querySelector('button[type="cancel"]');

    function newList(){
        

        const listTitle = document.getElementById('title').value;

        const listDescription = document.getElementById('description').value;
        
        const listDueDate = document.getElementById('dueDate').value;

        const listPriority = document.getElementById('priority').value;

        const listprojectTitle = document.getElementById('projectTitle').value;

        const objList = List(listTitle, listDescription, listDueDate, listPriority, listprojectTitle);
        toDoList.push(objList);

        
        
        setInDom(listTitle, listDescription, listDueDate, listPriority);

        
    }

    addBtn.addEventListener('click', ()=>{
        createOption();
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

    const sidebarContent = document.querySelector('.sidebar-content');


    const projectText = document.getElementById('project');

    function newProject(){
        const newProj = document.createElement('div');
        const newProjTitle = document.createElement('div');
        newProj.classList.add('project-list');
        newProjTitle.textContent = projectText.value;
        newProjTitle.classList.add('project-title');
        
        // delete button project

        const delProjectBtn = document.createElement('button');
        delProjectBtn.classList.add('project-delete-button');
        delProjectBtn.textContent = 'Delete';

        newProj.appendChild(newProjTitle);
        newProj.appendChild(delProjectBtn);

        

        

        delProjectBtn.addEventListener('click', ()=>{
            const allOption = document.querySelectorAll('#projectTitle .option-item');
            allOption.forEach(option => {
                if(option.value === projectObj.title){
                    option.remove();
                };
            });
            const index = library.findIndex(item => item.title === newProj.title);
            library.splice(index, 1);
            newProj.remove();
            
            
            
        });


        

        sidebarContent.appendChild(newProj);

        //object project

        const projectObj = Project(projectText.value);
        library.push(projectObj);

        
        newProj.addEventListener('click', ()=>{
    
            const previousList = document.querySelectorAll('.list');
            previousList.forEach(del => del.remove());
            const filtered = toDoList.filter(element => element.project === newProjTitle.textContent);
            console.log(newProjTitle.textContent);
            filtered.forEach(object => {
                setInDom(object.title, object.description, object.dueDate, object.priority);
            });
        });

        homeEvent();

        function homeEvent(){
            const home = document.querySelector('.home');
            home.addEventListener('click', ()=>{
                const previousList = document.querySelectorAll('.list');
                previousList.forEach(del => del.remove());
                toDoList.forEach(list => {
                    setInDom(list.title, list.description, list.dueDate, list.priority);
                });
            });
        }

        

    }

    

    

    


    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
       newProject();
       createOption();
       
       form.reset();

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




export{createList, createProject}