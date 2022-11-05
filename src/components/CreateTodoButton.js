import React from "react";
import '../styles/CreateTodoButton.scss';
import { TodoContext } from "./TodoContext";

function CreateTodoButton(props){
    const {
        addTodo,
        // setOpenModal,
        // setNewTodoValue,
       } = React.useContext(TodoContext);
    const onSubmit = () => {
       
        // Utilizamos nuestra función para añadir nuestro TODO
        if(props.newTodoValue.length <= 0)return;
        addTodo(props.newTodoValue);
      
      };
    
    return(
        <button 
            type="submit"
            className="CreateTodoButton"
            onClick={onSubmit}
        >
            Create Task
        </button>
    );
    
}

export {CreateTodoButton};