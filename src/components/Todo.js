function Todo({todo,deleteTodo,todoToogleComplete}){
    return(
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title text-end">
                    {todo.title}
                    <button 
                        onClick={ ()=> todoToogleComplete(todo.id) }  
                        className={`btn btn-sm ms-2 ${todo.completed?'btn-success':'btn-outline-success'}`}
                    >
                            { todo.completed ? "Completado":"Terminar" }
                    </button>
                </h3>
                <p className="card-text text-end">
                    {todo.description}
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <button className="btn   btn-outline-primary btn-sm me-2">
                                Editar
                    </button>
                    <button onClick={ ()=> deleteTodo(todo.id) } className="btn btn-outline-danger btn-sm">
                                Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;