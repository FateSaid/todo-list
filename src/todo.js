import { format } from "date-fns";

const library = [];
const toDoList = [];

                  

function setStorage(array, name){
    if(!localStorage.getItem(name)){
        let stringConvert = JSON.stringify(array);
        localStorage.setItem(name, stringConvert);
    } else{
        const stringArray = localStorage.getItem(name);
        const convertArray = JSON.parse(stringArray);
        
            if(name === 'library'){
                convertArray.forEach(item => {
                    newProjectStorage(item.title);
                });
            }else{
                convertArray.forEach(item => {
                    setInDom(item.title, item.description, item.priority, item.project);
                })
            }
           
        
        

        
    }

    

    
}

function deleteStorage(obj, name){
    const stringArray = localStorage.getItem(name);
    const currentArray = JSON.parse(stringArray);
    const index = currentArray.findIndex(item => item.title === obj.title);
    currentArray.splice(index, 1);
    const updatedArray = JSON.stringify(currentArray);
    localStorage.setItem(name, updatedArray);

}

function setObjStorage(obj, array){
    const currentToDoList = localStorage.getItem(array);
    const arrayToDoList = JSON.parse(currentToDoList);
    
    arrayToDoList.push(obj);
    const stringToDoList = JSON.stringify(arrayToDoList);
    localStorage.setItem(array, stringToDoList);

}



setStorage(library, 'library');
setStorage(toDoList, 'toDoList');




function Project(title){
    return {title}
}

function List(title, description, dueDate, priority, project){
    return {title, description, dueDate, priority, project}
}

function setInDom(listTitle, listDescription, listDueDate, listPriority){

    const visibleContent = document.createElement('div');
    visibleContent.classList.add('visible');

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('list');

    const btnContainer = document.createElement('div');

    //edit button

    function editButton(){
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        const dialogEdit = document.querySelector('.dialog-list-edit');
        btnContainer.appendChild(editBtn);
        editBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            
            dialogEdit.showModal();
            
        });
        
        

        

        
        
        const editCancel = document.getElementById('editCancel');
        
        editCancel.addEventListener('click', (e)=>{
            e.preventDefault();
            dialogEdit.close();
        });
    }

    editButton();

    //delete buttton

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-list-button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', ()=>{
        const listTitle = document.getElementById('title').value;

        const listDescription = document.getElementById('description').value;
        
        const listDueDate = document.getElementById('dueDate').value;

        const listPriority = document.getElementById('priority').value;

        const listprojectTitle = document.getElementById('projectTitle').value;

        const objList = List(listTitle, listDescription, listDueDate, listPriority, listprojectTitle);

        const index = toDoList.findIndex( item => item.title === objList.title);
        deleteStorage(objList, 'toDoList');
        toDoList.splice(index, 1);
        totalDiv.remove();

        
        
        
    });

    btnContainer.appendChild(delBtn);

    function createCheck(){
        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        visibleContent.appendChild(check);

        check.addEventListener('click', (e)=>{
            e.stopPropagation();
            totalDiv.classList.toggle('show');
        });
    }
    createCheck();

    const allHiddenDiv = document.createElement('div');
    allHiddenDiv.classList.add('hidden');
    
   

    function initializeElement(){
        const theTitle = document.createElement('div');
        theTitle.textContent = listTitle;
        theTitle.classList.add('title');
        visibleContent.appendChild(theTitle);

        const theDueDate = document.createElement('div');
        theDueDate.textContent = listDueDate;
        theDueDate.classList.add('dueDate');
        visibleContent.appendChild(theDueDate)

        const theDescription = document.createElement('div');
        theDescription.textContent = listDescription;
        theDescription.classList.add('description');
        allHiddenDiv.appendChild(theDescription)

        const thePriority = document.createElement('div');
        thePriority.textContent = listPriority;
        thePriority.classList.add('priority');
        allHiddenDiv.appendChild(thePriority);
    }

    initializeElement();
    
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
    



    visibleContent.appendChild(btnContainer);
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
        

        setObjStorage(objList, 'toDoList');
    }

    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        createOption();
        dialog.showModal();
        console.log(library);
        
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
    

    


    addProjectBtn.addEventListener('click', (e)=>{
        const title = document.getElementById('project').value;
        
        e.preventDefault();
       newProject(title);
       createOption();
       
       form.reset();

    });

    today();
    homeEvent();
    
    
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



function editEvent(){
    const editSubmit = document.getElementById('editSubmit');
        const form = document.querySelector('.form-edit');
        const dialogEdit = document.querySelector('.dialog-list-edit')
        
        editSubmit.addEventListener('click', (e)=>{
            e.stopPropagation();
            e.preventDefault();
            editList();
            form.reset();
            
            
            dialogEdit.close();
            
        });

        function editList(){
            
            


            let theListTitle = document.querySelector('.title');
            let editTitle = document.getElementById('title-edit').value;
            let indexTitle = toDoList.findIndex(item => item.title === theListTitle.textContent);

            const obj = toDoList[indexTitle];

            deleteStorage(obj, 'toDoList');

            toDoList[indexTitle].title = editTitle;
            theListTitle.textContent = editTitle;

            let theDueDate = document.querySelector('.dueDate');
            let editDueDate = document.getElementById('dueDate-edit').value;
            let indexDueDate = toDoList.findIndex(item => item.dueDate === theDueDate.textContent);
            toDoList[indexDueDate].dueDate = editDueDate;
            theDueDate.textContent = editDueDate;

            let theDescription = document.querySelector('.description');
            let editDescription = document.getElementById('description-edit').value;
            let indexDescription = toDoList.findIndex(item => item.description === theDescription.textContent);
            toDoList[indexDescription].description = editDescription;
            theDescription.textContent = editDescription;

            let thePriority = document.querySelector('.priority');
            let editPriority = document.getElementById('priority-edit').value;
            let indexPriority = toDoList.findIndex(item => item.priority === thePriority.textContent);
            toDoList[indexPriority].priority = editPriority;
            thePriority.textContent = editPriority;

            const newObj = List(editTitle, editDueDate, editDescription, editPriority);
            setObjStorage(newObj, 'toDoList');


            createOption();

            render();

        }

        function render(){
            const previousList = document.querySelectorAll('.list');
            previousList.forEach(del => del.remove());
            toDoList.forEach(list => {
                setInDom(list.title, list.description, list.dueDate, list.priority);
            });
        }
}

function today(){
    const todayProject = document.querySelector('.today');

    const currentDate = format(new Date(), 'yyyy-MM-dd');
    todayProject.addEventListener('click', ()=>{
        toDoList.forEach(item => {
            if(item.dueDate === currentDate){
                const previousList = document.querySelectorAll('.list');
                previousList.forEach(del => del.remove());
                setInDom(item.title, item.description, item.dueDate, item.priority);
            }
        });
    });
}



function newProject(title){

    



    const sidebarContent = document.querySelector('.sidebar-content');


    const newProj = document.createElement('div');
    const newProjTitle = document.createElement('div');
    newProj.classList.add('project-list');
    newProjTitle.textContent = title;
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
        
        deleteStorage(projectObj, 'library');
        
    });

    const projectObj = Project(title);

        library.push(projectObj);
        setObjStorage(projectObj, 'library');
        sidebarContent.appendChild(newProj);

    
    
    

    

    newProj.addEventListener('click', ()=>{
    
        const previousList = document.querySelectorAll('.list');
        previousList.forEach(del => del.remove());
        const filtered = toDoList.filter(element => element.project === newProjTitle.textContent);

        filtered.forEach(object => {
            setInDom(object.title, object.description, object.dueDate, object.priority);
        });
    });

}

function newProjectStorage(title){

    



    const sidebarContent = document.querySelector('.sidebar-content');


    const newProj = document.createElement('div');
    const newProjTitle = document.createElement('div');
    newProj.classList.add('project-list');
    newProjTitle.textContent = title;
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
        console.log(library);
        deleteStorage(projectObj, 'library');
        
    });

    const projectObj = Project(title);

        library.push(projectObj);
        
        sidebarContent.appendChild(newProj);

    
    
    

    

    newProj.addEventListener('click', ()=>{
    
        const previousList = document.querySelectorAll('.list');
        previousList.forEach(del => del.remove());
        const filtered = toDoList.filter(element => element.project === newProjTitle.textContent);

        filtered.forEach(object => {
            setInDom(object.title, object.description, object.dueDate, object.priority);
        });
    });

}
    




    



export{createList, createProject, editEvent, today, setStorage, library, toDoList}