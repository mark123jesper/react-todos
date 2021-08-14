import React from 'react'
import TodoList from './TodoList'

const Main = () => {
    return (
        <div className='row d-flex justify-content-between flex-wrap'>
            <TodoList />
            <TodoList />
        </div>
    )
}

export default Main
