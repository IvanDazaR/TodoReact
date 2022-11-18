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

    // const defaultTodos = [
    //   { text: 'Cortar cebolla', completed: false },
    //   { text: 'Tomar el cursso de intro a React', completed: false },
    //   { text: 'Llorar con la llorona', completed: false },
    //   { text: 'LALALALAA', completed: false },
    // ];

function Second(){
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
    } = React.useContext(TodoContext);

    const prueba = searchedTodos.map((todo) => (
        <TodoItem 
            key ={crypto.randomUUID()}
            // key ={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
        ) );
    return(
        <div className="second">
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {/* Manage UseEffect with loading and errors */}
                {error && <TodosError  error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {prueba}
            </TodoList>
        </div>
    );
}
export {Second};