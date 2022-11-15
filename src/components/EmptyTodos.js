import React from "react";
import '../styles/EmptyTodos.scss';

function EmptyTodos (){
    return (
        <div className="empty-container">
            <p>Let’s do something interesting!</p>
            <p>
                <svg width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9L15 17.6603L15 0.339745L0 9ZM70 7.5L13.5 7.5L13.5 10.5L70 10.5L70 7.5Z" fill="white"/>
                </svg>
                Create your first task.
            </p>
            <p>(●'◡'●)</p>
        </div>
    );
}

export { EmptyTodos };