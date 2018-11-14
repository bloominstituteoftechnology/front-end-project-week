import React from 'react';

const Todo = props => {
    return (
        <li classname={props.value.completed ? "completed" : null}>
            {props.value.task}
        </li>
    )
}

export default Todo;