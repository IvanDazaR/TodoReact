import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import '../styles/Principal.scss';
import book from '../images/book.svg';
function Principal(){
    return(
        <div className="principal">
            <h1>Create a New Task</h1>
            <CreateTodo />
            <CreateTodoButton />
            <img src={book} alt="Book-img"></img>
        </div>
    )
}

export {Principal};