import React from 'react'
import ThoughtList from './ThoughtList'
import TodoList from './TodoList'

const Main = () => {
    return (
        <div className='row d-flex justify-content-between flex-wrap'>
            <TodoList />
            <ThoughtList />
        </div>
    )
}

export default Main
