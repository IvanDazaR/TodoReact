import React from "react";
import './styles/TodoCounter.scss';

function TodoCounter({total, completed}){
    return (
        <h2 className="TodoCounter">You have completed {completed} of {total} tasks</h2>
    );
}

export {TodoCounter};