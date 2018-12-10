import React, { Component } from 'react';

const TodoForm = props => {
    // console.log('props from todos', props)
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='tags' placeholder='Add tags..' onChange={props.handleChange}/> 
                <input type='text' name='title' placeholder='Add title..' onChange={props.handleChange}/> 
                <input type='text' name='textBody' placeholder='Add text..' onChange={props.handleChange}/> 
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default TodoForm;