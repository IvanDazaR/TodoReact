import React from "react";
import "../styles/TodoForm.scss";

function TodoForm(
    {
        textValue,
        deleteTodo,
        setOpenModal,
    }) {

    const onDelete = () => {
        deleteTodo(textValue);
        setOpenModal(false);
    }
    return (
        <div className="TodoForm">
            <p>Do you want to delete "<span>{textValue}</span>" from your To Do List?</p>
            <div>
                <button onClick={() => setOpenModal(false)} className="button cancel-button">Cancel</button>
                <button onClick={onDelete} className="button accept-button">Accept</button>
            </div>

        </div>
    );
}

export { TodoForm };