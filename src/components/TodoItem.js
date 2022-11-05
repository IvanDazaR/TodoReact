import React from "react";
import '../styles/TodoItem.scss';
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function TodoItem (props){

    const {
        openModal,
        setOpenModal,
        setTextValue,
        textValue,
    } = React.useContext(TodoContext);

    
    // const [state, setState] = React.useState("Soy el inicial");

// console.log(textValue);


const onClickXButton = () => {
        setTextValue(props.text);
        setOpenModal(true);
    };
   
    return(
        <>
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
                    onClick={onClickXButton}
                >
                    X
                </span>
            </li>

           
            {!!openModal && (
                <Modal>
                    <TodoForm  textValue={textValue}/>
                    
                </Modal>
            )}
        </>
    );
}

export {TodoItem};