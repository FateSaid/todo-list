
    const library = [];

    function ToDo(title, description, dueDate, priority){
        return {title, description, dueDate, priority}
    }

    export const task1 = ToDo('Laundry', 'I have to clean my clothes', '34/324/234', 'Immediately');

   for(let key in task1){
    console.log(task1[key]);
   }


    


