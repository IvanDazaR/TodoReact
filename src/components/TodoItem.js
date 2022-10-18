import React from "react";
import '../styles/TodoItem.scss';

function TodoItem (props){
   
    
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
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {TodoItem};