import React from "react";
import '../styles/TodoSearch.scss';


function TodoSearch({searchValue, setSearchValue, loading}){
    
    
    const onSearchValueChange= (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <input 
            value={searchValue}
            className="TodoSearch" 
            placeholder="Search your Task"
            onChange={onSearchValueChange} 
            disabled={loading}   
        />
    );
}
export {TodoSearch};