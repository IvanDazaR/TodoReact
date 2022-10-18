import React from "react";
import { Principal } from "./Principal";
import { Second } from "./Second";

const defaultTodos = [
  {  text: 'Study Duolingo', completed: true},
  {  text: 'React from 0', completed: false},
  {  text: 'Canada Papers!', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

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
      />
    </React.Fragment>
    
  );
}

export default App;
