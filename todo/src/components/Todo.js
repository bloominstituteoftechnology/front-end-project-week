import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
        <p classname={props.value.completed ? "completed" : null} onClick={() => props.handleClick(props.value.id)} >
            {props.value.task}
        </p>
    )
}

export default Todo;