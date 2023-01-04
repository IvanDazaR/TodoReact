import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props){
    // Using the Custom Hook localStorage
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [todoAlreadyExist, setTodoAlreadyExist] = React.useState(null);
    const [field, setField] = React.useState(null);
    const [textValue, setTextValue] = React.useState("");
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if(!searchValue.length >= 1){
        
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText);
        });
    };

    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
        setNewTodoValue('');
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        setOpenModal(false);
    };


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            textValue,
            setTextValue,
            newTodoValue,
            setNewTodoValue,
            field, 
            setField,
            todos,
            todoAlreadyExist, 
            setTodoAlreadyExist
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};