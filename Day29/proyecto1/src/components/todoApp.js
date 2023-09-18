import React, { useState } from 'react';
import "./todoApp.css";
import Todo from './todo';
import UseStateExplanation from './useStateExplanation';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
    const [title, setTitle] = useState("Valor inicial");
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        const temp = [newTodo, ...todos];
        setTodos(temp);
        setTitle("");
    }

    const handleUpdate = (id, value) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title: value } : todo
        );
        setTodos(updatedTodos);
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(item => item.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <UseStateExplanation />
            <div className='todoContainer'>
                <h1>Cuerpo de la aplicación: TODO list</h1>
                <form className='todoCreateForm' onSubmit={handleSubmit}>
                    <input
                        className='todoInput'
                        value={title}
                        onChange={handleChange}
                        placeholder="Ingresa el título del todo"
                    />
                    <button
                        onClick={handleSubmit}
                        className='buttonCreate'
                        type='submit'
                    >
                        Crear Tarea
                    </button>
                </form>

                <div className='todosContainer'>
                    {todos.map(item => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
