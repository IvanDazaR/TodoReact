import React from "react";
import '../styles/TodoItem.scss';
import { TodoContext } from "./TodoContext";

function TodoItem (props){
   const {
    openModal,
    setOpenModal
   } = React.useContext(TodoContext);
    
    return(
        <li className="TodoItem">
            <label className="TodoItem-lable">
                <input className="TodoItem-input" type="checkbox" />
                <span 
                    className="checkbox"
                    onClick={props.onComplete}    
                />
            </label>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                // onClick={props.onDelete}
                onClick={() => setOpenModal(!openModal)} 
            >
                X
            </span>
        </li>
    );
}

export {TodoItem};