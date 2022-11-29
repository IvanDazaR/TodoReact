import React from "react";
import '../styles/CreateTodo.scss';

function CreateTodo(props){

    const onChange =(event)=> {

        props.setNewTodoValue(event.target.value);
    }
    // const inputRequired = () =>{
        
    // }
    return (
        <div className="input-group">
            <label className="input-group__lable" htmlFor="create-task">Write Your Task</label>
            <input 
                value={props.newTodoValue}
                onChange={onChange}
                type="text" 
                id="create-task"
                // onBlur={}
            /> 
        </div> 
    );
}

export {CreateTodo};