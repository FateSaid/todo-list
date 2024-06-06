import './style.css';
import {createList, createProject} from './todo';

createList();



createProject();

const allProject = document.querySelectorAll('.project-list');
        allProject.forEach(e => {
            e.addEventListener('click', ()=>{
                console.log(e.textContent);
            });
        });
