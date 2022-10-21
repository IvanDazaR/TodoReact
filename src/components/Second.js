import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import '../styles/Second.scss';
import { TodoContext } from "./TodoContext";

    // const defaultTodos = [
    //   { text: 'Cortar cebolla', completed: true },
    //   { text: 'Tomar el cursso de intro a React', completed: false },
    //   { text: 'Llorar con la llorona', completed: true },
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
    return(
        <div className="second">
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {/* Manage UseEffect with loading and errors */}
                {error && <p>Desesperate, hubo un error...</p> }
                {loading && <p>Estamos cargando, no desesperes...</p> }
                {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do!</p> }
    
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