function Todo(){
return(
    <div className="card">
        <div className="card-body">
            <h3 className="card-title text-end">
                Titulo de la tarea
                <button className="btn btn-outline-success btn-sm ms-2">
                        Terminar
                </button>
            </h3>
            <p className="card-text text-end">
                Descripcion de la tarea
            </p>
            <hr/>
            <div className="d-flex justify-content-end">
                <button className="btn   btn-outline-primary btn-sm me-2">
                            Editar
                </button>
                <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                </button>
            </div>
        </div>
    </div>
)
}

export default Todo;