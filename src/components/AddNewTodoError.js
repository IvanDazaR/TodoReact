import React from "react";
import '../styles/AddNewTodoError.scss';

function AddNewTodoError () {
    return (
        <div className="newTodoError">
            <p>This task already exists</p>
        </div>
    );
}

export { AddNewTodoError }; 