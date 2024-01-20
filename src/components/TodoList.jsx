export default function TodoList({ todos, toggleDone, deleteTodo }) {
    const Todo = ({ todo }) => {
        return (
            <div className="job">
                <i 
                    className="fa-regular fa-trash-can job__delete-icon" 
                    onClick={() => {
                        deleteTodo(todo.id)}
                    }
                ></i>
                <div className="checkbox" onClick={() => toggleDone(todo.id)}>
                    {todo.done ? <i className="fa-solid fa-check trash"></i> : ""}
                </div>
                <p className={`job__name ${todo.done ? "done" : ""}`}>{todo.job}</p>
                <p className="time-create">{todo.time}</p>
            </div>
        );
    };

    return (
        <div className="jobs">
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id}/>
            ))}
        </div>
    );
}
