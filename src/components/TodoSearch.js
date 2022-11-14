import React from "react";
import '../styles/TodoSearch.scss';
import { TodoContext } from "./TodoContext";


function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValueChange= (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <input 
            value={searchValue}
            className="TodoSearch" 
            placeholder="Search your Task"
            onChange={onSearchValueChange}    
        />
    );
}
export {TodoSearch};