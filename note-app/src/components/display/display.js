import React from 'react';
import './display.css';

const Display = (props) => {
    return (
    <div className='Display'>
        <div className='Display__buttons'>
            <div className='edit'> edit</div>
            <div className='delete'> delete</div>
        </div>
        <div className='Display__content header'> {props.header}</div>
        <div className='Display__content'>{props.title}</div>
        <div className='Display__content'>{props.body}</div>


    </div> 
    )}
export default Display;