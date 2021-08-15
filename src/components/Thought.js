import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import ThoughtForm from './ThoughtForm';

const Thought = ({ thoughts, completeThought, removeThought, updateThought }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateThought(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <ThoughtForm edit={edit} onSubmit={submitUpdate} />
    };

    return (

        <div className="m-2 mb-4 border-rounded">

            {thoughts.map((thought) => (
                <div
                    className={thought.isComplete ? 'todo-row complete' : 'todo-row'}
                    key={thought.id}
                >
                    <div className='d-flex col-12 p-2 justify-content-between'>
                        <div onClick={() => completeThought(thought.id)}>
                            {thought.date}
                        </div>

                        <div className="icons">
                            <AiFillCloseCircle
                                onClick={() => removeThought(thought.id)}
                                className="delete-icon"
                            />
                            <TiEdit
                                onClick={() => setEdit({ id: thought.id, text: thought.text, date: thought.date })}
                                className="edit-icon"
                            />
                        </div>
                    </div>

                    <pre onClick={() => completeThought(thought.id)} className='col-12 p-2'>
                        {thought.text}
                    </pre>

                </div>
            ))}
        </div>
    )
}

export default Thought
