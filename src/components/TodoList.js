
import Todo from "./Todo";


function TodoList({todos,deleteTodo,todoToogleComplete}){
 
    return(
        <div>
            <h1 className="text-end">Lista de tareas</h1>
            {  
                todos.map( todo => (
                    <Todo 
                        todo={todo}  
                        key={todo.id} 
                        deleteTodo={deleteTodo}
                        todoToogleComplete={todoToogleComplete} 
                    />
                ))
            }
            {  !todos.length && <p className="text-uppercase text-info text-wrap fs-2 text-center border "> Sin tareas pendiente</p> }
          
        </div>
    )
}

export default TodoList;