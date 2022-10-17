import React from "react";
import './styles/CreateTodo.scss';

function CreateTodo(){
    return (
        <div className="input-group">
            <label htmlFor="create-task">Write Your Task</label>
            <input type="text" id="create-task"/>
        </div>
    );
}

export {CreateTodo};