import React from "react";
import { Principal } from "./Principal";
import { Second } from "./Second";

const defaultTodos = [
  {  text: 'Study Duolingo', completed: false},
  {  text: 'React from 0', completed: false},
  {  text: 'Canada Papers!', completed: false},
];

function App() {

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
      />
    </React.Fragment>
    
  );
}

export default App;
