import React from "react";
import '../styles/CreateTodoButton.scss';
import { TodoContext } from "./TodoContext";

function CreateTodoButton(props) {
    const {
        addTodo,
        todos, 
        setTodoAlreadyExist
    } = React.useContext(TodoContext);

    const onSubmit = () => {
        // Utilizamos nuestra función para añadir nuestro TODO
        if (props.newTodoValue.length <= 0) {
            return;
        };

        if (!todos.find(todo => todo.text === props.newTodoValue)) {
            addTodo(props.newTodoValue);
            setTodoAlreadyExist(false);
        } else {
            setTodoAlreadyExist(true);

        }

    };

    return (
            <button
                type="submit"
                className="CreateTodoButton"
                onClick={onSubmit}
            >
                Create Task
            </button>
     
    );

}

export { CreateTodoButton };