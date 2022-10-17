import React from "react";
import './styles/TodoSearch.scss';

function TodoSearch(){
    const onSearchValueChange= (event)=>{
        console.log(event.target.value);
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Search your Task"
            onChange={onSearchValueChange}    
        />
    );
}
export {TodoSearch};