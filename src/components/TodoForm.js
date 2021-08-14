import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('');
    const [date, setDate] = useState('');

    const inputRef = useRef(null);
    const today = new Date();
    const dateToday = today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today
        .getMonth() + 1) + '-' + (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate());

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Date.now(),
            text: input,
            date: date
        });
        setInput('')
        setDate('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Thoughts for the Day
                <input
                    className='form-control mt-2'
                    type="date"
                    min={dateToday}
                    max={dateToday}
                    value={date}
                    onChange={handleDate}
                    ref={inputRef}
                />

                <div>
                    <textarea
                        className='form-control mt-2'
                        value={input}
                        placeholder='Place To-Do'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>

                <div>
                    <button className='btn btn-success col-12 mt-2'>
                        Add To-Do
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
