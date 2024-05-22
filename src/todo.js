const functionOne = () => {
    const library = [];

    function ToDo(title, description, dueDate, priority){
        return {title, description, dueDate, priority}
    }

    const task1 = ToDo('Laundry', 'I have to clean my clothes', '34/324/234', 'Immediately');

    console.table([task1]);
    
}

export{ functionOne };