import React from "react";
import "../styles/TodoForm.scss";
import {TodoContext} from './TodoContext';

function TodoForm(props){
    const {
        // onCancel,
        deleteTodo,
        setOpenModal,

       } = React.useContext(TodoContext);
       

       const onDelete = () => {
            deleteTodo(props.textValue);
            setOpenModal(false);
       }
    return(
        <div className="TodoForm">
            <p>Do you want to delete "<span>{props.textValue}</span>" from your To Do List?</p>
            <div>
                <button onClick={() => setOpenModal(false)} className="button cancel-button">Cancel</button>
                <button onClick={onDelete} className="button accept-button">Accept</button>
            </div>

        </div>
    );
}

export {TodoForm};