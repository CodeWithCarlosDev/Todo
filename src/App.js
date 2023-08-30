import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
    {id:1,title:"Titulo de la tarea 1", description:"Descripcion de la tarea 1",completed:false},
    {id:2,title:"Titulo de la tarea 2", description:"Descripcion de la tarea 2",completed:false},
    {id:3,title:"Titulo de la tarea 3", description:"Descripcion de la tarea 3",completed:false}
]

function App(){

    const [todos,setTodos] = useState(initialTodos);

    const deleteTodo = (todoId)=> {
        const changeTodos = todos.filter( todo => todo.id != todoId )
        setTodos(changeTodos)
    }

    const todoToogleComplete = (todoId)=> {
        const changeTodos = todos.map( todo => (
            todo.id === todoId 
            ? {...todo, completed:!todo.completed} 
            : todo
        ))
        setTodos(changeTodos);
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-5">
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        todoToogleComplete={todoToogleComplete}
                    />
                </div>
                <div className="col-5">
                    <TodoForm/>
                </div>
            </div>
        </div>
    )
}

export default App;