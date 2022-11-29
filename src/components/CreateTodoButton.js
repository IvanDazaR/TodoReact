import React from "react";
import '../styles/CreateTodoButton.scss';
import { TodoContext } from "./TodoContext";

function CreateTodoButton(props){
    const {
        addTodo,
       } = React.useContext(TodoContext);

    const onSubmit = () => {
        // Utilizamos nuestra función para añadir nuestro TODO
        if(props.newTodoValue.length <= 0){
            // alert("Write your task");
            return;
        };
        // if(props.newTodoValue.length <= 0)return;
        
        addTodo(props.newTodoValue);
        // var element = document.getElementById("create-task");
        // element.blur();
      };
    
    return(
        <button 
            // type="button"
            type="submit"
            className="CreateTodoButton"
            onClick={onSubmit}
            // onSubmit={onSubmit}
        >
            Create Task
        </button>
    );
    
}

export {CreateTodoButton};