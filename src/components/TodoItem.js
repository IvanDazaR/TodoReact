import React from "react";
import '../styles/TodoItem.scss';
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { IoIosCloseCircleOutline } from 'react-icons/io';

function TodoItem(
    {
        completed, 
        text, 
        onComplete,
        setTextValue, 
        textValue, 
        openModal, 
        setOpenModal,
        deleteTodo
    }) {

    const [isChecked, setIsChecked] = React.useState(completed ? true : false);

    const onClickXButton = () => {
        setTextValue(text);
        setOpenModal(true);
    };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    
    return (
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
                        onClick={onComplete}
                    />
                </label>
                <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                    {text}
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
                    <TodoForm 
                        textValue={textValue} 
                        setOpenModal={setOpenModal}
                        deleteTodo={deleteTodo}
                    />

                </Modal>
            )}
        </>
    );
}

export { TodoItem };