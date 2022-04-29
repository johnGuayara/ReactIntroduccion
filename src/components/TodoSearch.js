import React from "react";
import './style/TodoSearch.css'
import { TodoContext } from "./TodoContext";
function TodoSearch(){

    const {search , setSearch} = React.useContext(TodoContext)

   const onSearchValueChange =(event)=>{
       console.log(event.target.value);
       setSearch(event.target.value);
   }
    return(
        <input type="text" className="TodoSearch" onChange={onSearchValueChange} value={search}/>
    );
}
export {TodoSearch};