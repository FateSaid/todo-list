import './style.css';
import {createList, createProject, editEvent} from './todo.js';
import {format} from "date-fns";




createList();



createProject();

editEvent();

console.log(format(new Date(), "MM-dd-yy"));