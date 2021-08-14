import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    };

    return todos.map((todo) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={todo.id}
        >
            <div className='d-flex'>
                <div onClick={() => completeTodo(todo.id)}>
                    {todo.date}
                </div>

                <div className="icons">
                    <AiFillCloseCircle
                        onClick={() => removeTodo(todo.id)}
                        className="delete-icon"
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: todo.id, text: todo.text, date: todo.date })}
                        className="edit-icon"
                    />
                </div>
            </div>

            <div onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

        </div>
    ))
}

export default Todo
