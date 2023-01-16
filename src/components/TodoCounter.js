import React from "react";
import '../styles/TodoCounter.scss';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            You have completed {completedTodos} of {totalTodos} tasks
        </h2>
    );
}

export { TodoCounter };