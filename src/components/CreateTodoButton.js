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
        addTodo(props.newTodoValue);
        // Cerramos nustro modal
        // setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        // setNewTodoValue('')
        alert('OnSubmit');
      };
    
    return(
        <button 
            type="submit"
            className="CreateTodoButton"
            onClick={() =>onSubmit}
        >
            Create Task
        </button>
    );
    
}

export {CreateTodoButton};