import React from "react";
import '../styles/TodoList.scss'

function TodoList(props){
    const renderFunc =  props.children || props.render;
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchReasults(props.searchText)}


            <ul>
                {props.searchedTodos.map(renderFunc)}
                {/* {props.children} */}
            </ul>
        </section>
    );
}

export {TodoList};