import React from "react";
import { TodoContext } from "./TodoContext";
import './style/TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    const onCancel = ()=>{
        setOpenModal(false);
    }
     const onAdd = (event)=>{
         event.preventDefault();
         addTodo(newTodoValue);
         setOpenModal(false);
     }
    return(
        <form onSubmit={onAdd}>
            <label>Escribe Un Nuevo Todo</label>
            <textarea placeholder="Ejemplo:Debo ir de compras" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">Cncelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">Confirmar</button>
            </div>
        </form>
    );
}
export {TodoForm};