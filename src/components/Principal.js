import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import '../styles/Principal.scss';
import book from '../images/book.svg';
import { TodoContext } from "./TodoContext"; 

function Principal(){

    const {
        newTodoValue,
        setNewTodoValue,
    } = React.useContext(TodoContext);
    
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={onSubmit} className="principal" name="myform">
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