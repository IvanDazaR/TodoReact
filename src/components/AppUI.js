import React from "react";
// import { TodoContext } from "./TodoContext";
import { Principal } from "./Principal";
import { Second } from "./Second";
// import {Modal} from './Modal';
// import { TodoForm } from "./TodoForm";


function AppUI(){
    //   const {
    //     // searchedTodos,
    //     openModal,
    //     // setOpenModal,
    // } = React.useContext(TodoContext);
    return (
      <React.Fragment>
        <Principal />
        <Second />
        {/* {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )} */}
      </React.Fragment>
    );
  
}

export {AppUI};