import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import '../styles/Second.scss';
import { TodoContext } from "./TodoContext";

import {TodosError} from './TodosError';
import {TodosLoading} from './TodosLoading';
import {EmptyTodos} from './EmptyTodos';

function Second(){
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
    } = React.useContext(TodoContext);


    return(
        <div className="second">
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {/* Manage UseEffect with loading and errors */}
                {error && <TodosError  error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map( todo => (
                    <TodoItem
                        // id={crypto.randomUUID()}
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        </div>
    );
}
export {Second};