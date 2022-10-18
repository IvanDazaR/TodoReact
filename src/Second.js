import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import './styles/Second.scss';



function Second({searchValue, setSearchValue, todos, setTodos, total, completed, searcheedTodos}){

    

    return(
        <div className="second">
            <TodoCounter 
                completed ={completed}
                total={total}
            />
            <TodoSearch  
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {searcheedTodos.map(todo => (
                <TodoItem 
                key ={todo.text}
                text={todo.text}/>
                ))}
                </TodoList>
        </div>
    );
}
export {Second};