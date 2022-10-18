import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import '../styles/Second.scss';



function Second({searchValue, setSearchValue, total, completed, searchedTodos,completeTodo,deleteTodo}){
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
                {searchedTodos.map(todo => (
                <TodoItem 
                    key ={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={()=> completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
        </div>
    );
}
export {Second};