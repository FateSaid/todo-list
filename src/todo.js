


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
    })
    
}

function addBtn(){
    const addListBtn = document.querySelector('.plus');
    const dialog = document.querySelector('dialog');
    addListBtn.addEventListener('click', ()=>{
        dialog.showModal();
    });
}

const submitBtn = document.querySelector('button[type="submit"]');

function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}

export {listToDom, addBtn, submitBtn, clearForm};