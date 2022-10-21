import React from "react";
import '../styles/TodoCounter.scss';
import { TodoContext } from "./TodoContext";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} tasks</h2>
    );
}

export {TodoCounter};