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
            <p>Do you want to delete "{props.textValue}" from your To Do List?</p>
            <button onClick={() => setOpenModal(false)} className="button cancel-button">Cancel</button>
            {/* <button onClick={deleteTodo(props.aux)} className="button accept-button">Accept</button> */}
            <button onClick={onDelete} className="button accept-button">Accept</button>

        </div>
    );
}

export {TodoForm};