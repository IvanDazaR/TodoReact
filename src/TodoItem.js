import React from "react";
import './styles/TodoItem.scss';

function TodoItem (props){
    return(
        <li className="TodoItem">
            <label>
                <input type="checkbox" />
                <span className="checkbox"/>
            </label>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}

export {TodoItem};