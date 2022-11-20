import React from "react";
import '../styles/TodoItem.scss';
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { IoIosCloseCircleOutline } from 'react-icons/io';

function TodoItem (props){
    
    const {
        openModal,
        setOpenModal,
        setTextValue,
        textValue,
    } = React.useContext(TodoContext);

    const [isChecked, setIsChecked] = React.useState(props.completed ? true : false);

const onClickXButton = () => {
        setTextValue(props.text);
        setOpenModal(true);
    };
    
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
    return(
        <>
            <li className="TodoItem">
                <label className="TodoItem-lable">
                    <input 
                        className="TodoItem-input" 
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange}
                    />
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
                    <IoIosCloseCircleOutline />
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