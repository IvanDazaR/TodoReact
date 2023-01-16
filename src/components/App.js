import React from "react";
import { useTodos } from "./useTodos";

import { Principal } from "./Principal";
import { Second } from "./Second";


import { CreateTodoButton } from "./CreateTodoButton";
import { CreateTodo } from "./CreateTodo";
import '../styles/Principal.scss';
import book from '../images/book.svg';
import { BiError } from 'react-icons/bi';
import { AddNewTodoError } from './AddNewTodoError';

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodosError } from './TodosError';
import { TodosLoading } from './TodosLoading';
import { EmptyTodos } from './EmptyTodos';
import {EmptySearchReasults} from './EmptySearchResults';

function App() {
  const {
    newTodoValue,
    setNewTodoValue,
    field,
    setField,
    todoAlreadyExist,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    setTextValue,
    textValue,
    openModal,
    setOpenModal,
    addTodo,
    todos,
    setTodoAlreadyExist,
  } = useTodos();

   return (
    <React.Fragment>
      <Principal field={field} setField={setField}>
        <h1>Create a New Task</h1>
        <CreateTodo
          newTodoValue={newTodoValue}
          setNewTodoValue={setNewTodoValue}
          setField={setField}
        />

        {field === false ?
          <p>
            <BiError />
            <b>Error:</b> Fill the field.
          </p>
          : todoAlreadyExist === true &&
          <AddNewTodoError />
        }

        <CreateTodoButton
          newTodoValue={newTodoValue}
          setNewTodoValue={setNewTodoValue}
          addTodo={addTodo}
          todos={todos}
          setTodoAlreadyExist={setTodoAlreadyExist}
        />
        <img src={book} alt="Book-img"></img>
      </Principal>

      <Second>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}
          onEmptySearchReasults={(searchText) => <EmptySearchReasults searchText={searchText}/>}
          // render={todo => (
          //   <TodoItem
          //     // id={crypto.randomUUID()}
          //     key={todo.text}
          //     text={todo.text}
          //     completed={todo.completed}
          //     onComplete={() => completeTodo(todo.text)}
          //     onDelete={() => deleteTodo(todo.text)}
          //     setTextValue={setTextValue}
          //     textValue={textValue}
          //     openModal={openModal}
          //     setOpenModal={setOpenModal}
          //     deleteTodo={deleteTodo}
          //   />
          // )}
        >
          {todo => (
            <TodoItem
              // id={crypto.randomUUID()}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              setTextValue={setTextValue}
              textValue={textValue}
              openModal={openModal}
              setOpenModal={setOpenModal}
              deleteTodo={deleteTodo}
            />
          )}
        </TodoList>
        
      </Second>
    </React.Fragment>
  );
}

export default App;
