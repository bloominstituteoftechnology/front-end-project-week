import React, { Component } from 'react';
import './Todos.css';

const Todos = props => {
    return (
        <div className='todos-wrapper'>
            <div className='todos-title'>
                {props.todo.title}
            </div>
            <div className='todos-textbody'>
                {props.todo.textBody}
            </div>
        </div>
    )
}

export default Todos;