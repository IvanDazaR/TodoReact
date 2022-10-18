import React from "react";
import './styles/TodoSearch.scss';

function TodoSearch({searchValue, setSearchValue}){
    
    const onSearchValueChange= (event)=>{
        console.log(event.target.value);
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