import React from "react";
import '../styles/TodosLoading.scss'

function TodosLoading (){
    return (
        <div className="loader">
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
            <span>loading...</span>
        </div>
    );
}

export { TodosLoading };