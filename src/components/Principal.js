import React from "react";


function Principal({ children, field, setField}){

    
    const onSubmit = (event) => {
        event.preventDefault();

        if (field <= 0){
            setField(false);
        }else {
            setField(null);
        }
    }
    
    return(
        <form onSubmit={onSubmit} className="principal" name="myform">
            { children }
        </form> 
    )
}

export {Principal};