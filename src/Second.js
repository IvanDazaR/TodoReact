import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import './styles/Second.scss';

const todos = [
    {  text: 'Study Duolingo', completed: false},
    {  text: 'React from 0', completed: false},
    {  text: 'Canada Papers!', completed: false},
  ];

function Second(){
    return(
        <div className="second">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map(todo => (
                <TodoItem 
                key ={todo.text}
                text={todo.text}/>
                ))}
                </TodoList>
        </div>
    );
}
export {Second};