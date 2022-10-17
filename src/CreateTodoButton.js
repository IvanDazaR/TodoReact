import React from "react";
import './styles/CreateTodoButton.scss';

function CreateTodoButton(){
    const onClickButton = (msg)=>{
        alert(msg)
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={() =>onClickButton("Button Clicked!!")}
        >
            Create Task
        </button>
    );
    
}

export {CreateTodoButton};