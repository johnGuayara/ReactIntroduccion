import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext= React.createContext();

function TodoProvider(props){
    const {item: todos,saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false);
    const [search , setSearch] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchTodos = [];
    if(!search.length >= 1){
        searchTodos = todos;
    }else{
        searchTodos = todos.filter(todo =>{
        const todoText =  todo.text.toLowerCase();
        const searchtext = search.toLowerCase();
        return todoText.includes(searchtext);
        }); 
    }

    

    const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text ,
        //   completed: true,
        // };
    }

    const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    // React.useEffect(()=>{
    //   console.log('useEffect');
    // },[totalTodos]);
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}
<TodoContext.Consumer></TodoContext.Consumer>
export {TodoContext,TodoProvider};