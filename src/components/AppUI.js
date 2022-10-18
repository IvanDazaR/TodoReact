import React from "react";
import { Principal } from "./Principal";
import { Second } from "./Second";


function AppUI({
    searchValue,
    setSearchValue,
    todos,
    setTodos,
    totalTodos,
    completedTodos,
    searchedTodos,
}){
    return(
    <React.Fragment>
      <Principal />
      <Second 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todos={todos}
        setTodos={setTodos}
        total={totalTodos}
        completed={completedTodos}
        searchedTodos={searchedTodos}
      />
    </React.Fragment>
    );
}

export {AppUI};