const TaskList = ({tasks}) =>{
    return(
        <>
        <div>
            <h4>Lista de Tarefas:</h4>
            <ol>
                {/* iterando sobre a lista de tarefas */}
                {tasks.map((task) => (
                    < key>{task.text}</li>
                ))}
                

            </ol>
        </div>
        </>
    )
}
export default TaskList