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

    return (

        <div className="m-2 mb-4 border-rounded">

            {todos.map((todo) => (
                <div
                    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={todo.id}
                >
                    <div className='d-flex col-12 p-2 justify-content-between'>
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

                    <pre onClick={() => completeTodo(todo.id)} className='col-12 p-2'>
                        {todo.text}
                    </pre>

                </div>
            ))}
        </div>
    )
}

export default Todo
