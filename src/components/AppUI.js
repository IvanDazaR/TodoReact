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
    completeTodo,
    deleteTodo,
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
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </React.Fragment>
    );
}

export {AppUI};