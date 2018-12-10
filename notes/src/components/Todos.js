import React, { Component } from 'react';

const Todos = props => {
    return (
        <div>
            {props.todo.title}
            {props.todo.textBody}
        </div>
    )
}

export default Todos;