import React, { useState, useEffect, useRef } from 'react'

const ThoughtForm = (props, { deleteAllHandler }) => {

    const [input, setInput] = useState(props.edit ? props.edit.text : '');
    const [date, setDate] = useState(props.edit ? props.edit.date : '');

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

        if (input !== '' && date !== '') {

            props.onSubmit({
                id: Date.now(),
                text: input,
                date: date
            });
            setInput('');
            setDate('');

        } else {

            alert('Invalid Input. Please Try Again.');

        }
    }

    const handleDeleteAll = (e) => {
        e.preventDefault();

        props.onClick({
            id: null,
            text: null,
            date: null
        });
        setInput('');
        setDate('');

    }

    return (
        <div>

            {props.edit ?
                (
                    <form onSubmit={handleSubmit} className='m-2'>
                        <div className='text-center'>
                            <h4>Thoughts for the Day</h4>
                        </div>

                        <input
                            className='form-control'
                            type="date"
                            min={dateToday}
                            max={dateToday}
                            value={date}
                            onChange={handleDate}
                            ref={inputRef}
                        />

                        <div>
                            <textarea
                                className='form-control  mt-1'
                                value={input}
                                placeholder='Place your Thoughts Here'
                                onChange={handleChange}
                                ref={inputRef}
                                rows='10'
                            />
                        </div>

                        <div>
                            <button className='btn btn-success col-12'>
                                Submit Edit
                            </button>
                        </div>
                    </form>

                ) : (

                    <form onSubmit={handleSubmit} className='m-2'>
                        <div className='text-center'>
                            <h4>Thoughts for the Day</h4>
                        </div>

                        <input
                            className='form-control'
                            type="date"
                            min={dateToday}
                            max={dateToday}
                            value={date}
                            onChange={handleDate}
                            ref={inputRef}
                        />

                        <div>
                            <textarea
                                className='form-control mt-1'
                                value={input}
                                placeholder='Place To-Do'
                                onChange={handleChange}
                                ref={inputRef}
                                rows='10'
                            />
                        </div>

                        <div>
                            <button className='btn btn-success col-12'>
                                Add your Thoughts
                            </button>
                        </div>

                        <div>
                            <button type='button' className='btn btn-danger' onClick={handleDeleteAll} >
                                Delete All
                            </button>
                        </div>
                    </form>

                )}
        </div>
    )
}

export default ThoughtForm
