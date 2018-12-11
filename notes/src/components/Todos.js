import React, { Component } from 'react';
import './Todos.css';

const Todos = props => {
    return (
        <div className='todos-wrapper'>
            <div className='todos-card'>
                <div className='todos-title'>
                    {props.todo.title}
                </div>
                <div className='todos-textbody'>
                    {props.todo.textBody}
                </div>
                <div className='card-buttons'>
                    <input className='id-input' type='text' name='id' placeholder='Add ID..' onChange={props.handleChange}/> 
                    <input className='delete-button' type='submit' value='Delete Todo' onClick={props.deleteTodos}/>
                </div>
            </div>
        </div>
    )
}

export default Todos;