import React from "react";
import "../styles/TodoForm.scss";
import {TodoContext} from './TodoContext';

function TodoForm(props){
    const {
        // onCancel,
        deleteTodo,
        setOpenModal,

       } = React.useContext(TodoContext);
    return(
        <div className="TodoForm">
            <p>Do you want to delete {" "} from your To Do List?</p>
            <button onClick={() => setOpenModal(false)} className="button cancel-button">Cancel</button>
            <button onClick={props.onDeletee} className="button accept-button">Accept</button>
            {/* <button onClick={ onDelete } className="button accept-button">Accept</button> */}

        </div>
    );
}

export {TodoForm};