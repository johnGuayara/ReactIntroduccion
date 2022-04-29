import React from "react";

import { TodoCounter } from './TodoCounter';
import { TodoContext } from "./TodoContext";
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function AppUi()
{
    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

                    <TodoList> 
                    {error && <p>404 not faund</p>}
                    {loading && <p>Cargando...</p>}
                    {(!loading && !searchTodos.lenght) && <p>Crea tu primer todo</p>}
                    {
                        searchTodos.map(todo =>
                            (
                                <TodoItem
                                    key={todo.text} 
                                    text={todo.text} 
                                    completed={todo.completed} 
                                    onComplete={()=>completeTodo(todo.text)} 
                                    onDelete={()=>deleteTodo(todo.text)}/>
                            ))
                    }
                </TodoList>

        {!! openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}

        <CreateTodoButton
        setOpenModal={setOpenModal}/>
    </React.Fragment>  
    
    );
}
export {AppUi};