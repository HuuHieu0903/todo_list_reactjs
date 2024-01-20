import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
uuidv4();

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todolist")) || []);
    }, []);
    const numOfJob = todos.filter(todo => todo.done === false).length;

    const addTodo = (job) => {
        const newTodos = [
            ...todos,
            {
                id: uuidv4(),
                job: job,
                done: false,
                time: new Date().getHours() + ":" + new Date().getMinutes(),
            },
        ];
        setTodos(newTodos);
        localStorage.setItem("todolist", JSON.stringify(newTodos));
    };
    
    const toggleDone = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) return {...todo, done: !todo.done};
            return todo;
        })
        setTodos(newTodos);
        localStorage.setItem("todolist", JSON.stringify(newTodos));
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todolist", JSON.stringify(newTodos));
    };

    return (
        <Fragment>
            <TodoForm addTodo={addTodo} numOfJob={numOfJob}/>
            <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
        </Fragment>
    );
}
