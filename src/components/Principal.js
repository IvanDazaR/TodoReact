import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import '../styles/Principal.scss';
import book from '../images/book.svg';
function Principal(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        // const inputCreateTask = document.getElementById("create-task");
        // inputCreateTask.value = '';
    }

    return(
        <form onSubmit={onSubmit} className="principal">
            <h1>Create a New Task</h1>
            <CreateTodo 
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
            />
            <CreateTodoButton 
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
            />
            <img src={book} alt="Book-img"></img>
        </form >
    )
}

export {Principal};