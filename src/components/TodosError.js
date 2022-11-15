import React from "react";
import '../styles/TodosError.scss';

function TodosError ({ error }) {
    return (
        <div className="error-container">
            <p>How... ?</p>
            <p>An error has occurred!{error}</p>
            <p>¯\_(ツ)_/¯</p>
        </div>
    );
}

export { TodosError };