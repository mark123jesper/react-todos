import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const retrieveData = localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [];

const TodoList = () => {

    const [todos, setTodos] = useState(retrieveData);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    const removeTodo = (id) => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {

            const removeArr = [...todos].filter(todo => todo.id !== id);
            setTodos(removeArr);

        } else {
            return false;
        };
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    useEffect(() => {

        localStorage.setItem('Todos', JSON.stringify(todos));

    }, [todos])

    return (
        <div className='col-lg-6'>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList
