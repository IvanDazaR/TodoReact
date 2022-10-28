import React from "react";
import '../styles/CreateTodoButton.scss';
import { TodoContext } from "./TodoContext";

function CreateTodoButton(props){
    const {
        addTodo,
       } = React.useContext(TodoContext);
    return(
        <button 
            type="submit"
            className="CreateTodoButton"
            onClick={() =>addTodo(props.newTodoValue)}
        >
            Create Task
        </button>
    );
    
}

export {CreateTodoButton};