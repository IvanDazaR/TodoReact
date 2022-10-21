import React from "react";
// import { TodoContext } from "./TodoContext";
import { Principal } from "./Principal";
import { Second } from "./Second";


function AppUI(){
    return (
      <React.Fragment>
        <Principal />
        <Second />
      </React.Fragment>
    );
  
}

export {AppUI};