import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {  text: 'Study Duolingo', completed: false},
//   {  text: 'React from 0', completed: false},
//   {  text: 'Canada Papers!', completed: false},
// ];

// Personal Custom HooK to manage the local Storage
function useLocalStorage(itemName, initialValue){
// Get values in the local storage
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
// Set the list with an empty array if the localStorage doesn't exist
    if(!localStorageItem){
      // Coverts a JavaScript value to a JavaScript Obj
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem= JSON.parse(localStorageItem);
    }
// React Custom Hook 
    const [item, setItem] = React.useState(parsedItem);

// Update the items and saved old items
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
  };
  return [
    item,
    saveItem
  ];
}

function App() {
// Using the Custom Hook localStorage
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
    
  );
}

export default App;
