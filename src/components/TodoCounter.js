import React from "react";
import './style/TodoCounter.css'
import { TodoContext } from "./TodoContext";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
 
    return(
        <h1 className="TodoCounter">Has completado {completedTodos} de {totalTodos}</h1>
    );
}
export {TodoCounter};