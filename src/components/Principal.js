import React from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import '../styles/Principal.scss';
import book from '../images/book.svg';
import { TodoContext } from "./TodoContext"; 
import { BiError } from 'react-icons/bi';

function Principal(){

    const {
        newTodoValue,
        setNewTodoValue,
        field, 
        setField,
    } = React.useContext(TodoContext);

    
    const onSubmit = (event) => {
        event.preventDefault();

        if (field <= 0){
            setField(false);
        }else {
            setField(null);
        }
    }

    return(
        <form onSubmit={onSubmit} className="principal" name="myform">
            <h1>Create a New Task</h1>
            <CreateTodo 
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
                setField={setField}
            />
            {field === false && 
                <p>
                    <BiError />
                    <b>Error:</b> Fill the field.
                </p>}
            <CreateTodoButton 
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
            />
            <img src={book} alt="Book-img"></img>
        </form> 
    )
}

export {Principal};