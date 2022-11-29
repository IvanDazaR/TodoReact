import React from "react";
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