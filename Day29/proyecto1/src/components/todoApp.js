import React, { useState } from 'react';
import "./todoApp.css";
import Todo from './todo';
import UseStateExplanation from './useStateExplanation';

const TodoApp = () => {
    const [title, setTitle] = useState("Valor inicial");
    const [todos, setTodos] = useState([]);

    function handleChange(event){
        const value = event.target.value;
        setTitle(value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
        setTitle("");
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);        
        setTodos(temp);
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
                    onChange={handleChange} // Función que actualiza a la vez que el usuario escribe.
                    placeholder="Ingresa el título del todo" 
                />
                <button
                    onClick={handleSubmit} // Llama a la función y permite la copia, modificación de los todos y pegado en la aplicación para mostrarlos de manera dinámica.
                    className='buttonCreate' 
                    type='submit' 
                >
                    Crear Todo
                </button>
                
            </form>

            <div className='todosContainer'>
                {
                    todos.map(item => (
                        <Todo key={item.id} item = {item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                    ))

                }
            </div>
        </div>
        </div>
    );
};

export default TodoApp;
