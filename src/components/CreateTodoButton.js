import React from "react";
import '../styles/CreateTodoButton.scss';

function CreateTodoButton(
    {
        newTodoValue,
        addTodo,
        todos, 
        setTodoAlreadyExist
    }) {

   
        

    const onSubmit = () => {
        // Use ToDo function to add a new todo
        if (newTodoValue.length <= 0) {
            return;
        };

        if (!todos.find(todo => todo.text === newTodoValue)) {
            addTodo(newTodoValue);
            setTodoAlreadyExist(false);
        } else {
            setTodoAlreadyExist(true);

        }

    };

    return (
            <button
                type="submit"
                className="CreateTodoButton"
                onClick={onSubmit}
            >
                Create Task
            </button>
     
    );

}

export { CreateTodoButton };