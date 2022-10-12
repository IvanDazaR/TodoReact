import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import './styles/Principal.scss';

function Principal(){
    return(
        <div className="principal">
            <h1>Create a New Task</h1>
            <h3>New Task</h3>
            <CreateTodo />
            <CreateTodoButton />
            <image src='./images/book.png'></image>
        </div>
    )
}

export {Principal};