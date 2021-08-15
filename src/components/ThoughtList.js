import React, { useState, useEffect } from 'react';
import Thought from './Thought';
import ThoughtForm from './ThoughtForm';

const retrieveData = localStorage.getItem('Thoughts') ? JSON.parse(localStorage.getItem('Thoughts')) : [];

const ThoughtList = () => {

    const [thoughts, setThoughts] = useState(retrieveData);

    const addThought = (thought) => {
        if (!thought.text || /^\s*$/.test(thought.text)) {
            return
        }
        const newThoughts = [thought, ...thoughts];
        setThoughts(newThoughts);
        console.log(thought, ...thoughts);
    };

    const updateThought = (thoughtId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setThoughts(prev => prev.map(item => item.id === thoughtId ? newValue : item))
    }

    const removeThought = (id) => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {

            const removeArr = [...thoughts].filter(thought => thought.id !== id);
            setThoughts(removeArr);

        } else {
            return false;
        };
    };

    const deleteAllThoughts = () => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {
            setThoughts([]);

        } else {
            return false;
        };
    };

    const completeThought = (id) => {
        let updatedThoughts = thoughts.map(thought => {
            if (thought.id === id) {
                thought.isComplete = !thought.isComplete
            }
            return thought;
        });
        setThoughts(updatedThoughts);
    };

    useEffect(() => {

        localStorage.setItem('Thoughts', JSON.stringify(thoughts));

    }, [thoughts])

    return (
        <div className='col-lg-6'>
            <ThoughtForm
                onSubmit={addThought}
                onClick={deleteAllThoughts}
            />
            <Thought
                thoughts={thoughts}
                completeThought={completeThought}
                removeThought={removeThought}
                updateThought={updateThought}
            />
        </div>
    );
}

export default ThoughtList
