import React from "react";
import { AppUI } from "./AppUI";
const defaultTodos = [
  {  text: 'Study Duolingo', completed: false},
  {  text: 'React from 0', completed: false},
  {  text: 'Canada Papers!', completed: false},
];

function App(props) {

  const [todos, setTodos] = React.useState(defaultTodos);
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
  }
  return (
    <AppUI 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      setTodos={setTodos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
    />
    
  );
}

export default App;
