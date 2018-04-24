import React, { Component } from 'react';
import './components.css'

const Todo = props => {
    return (
        <div className="Todo__Container">
        <div className="Todo__Title">Your Notes:</div>
        <div className="Todo__CardsWrapper">
            {props.dummyData.map ((item) => {
            return (
                
                <div className="Todo__Card">
                    <div className="Todo__NoteTitle">Note Title</div>
                    {item}
                </div>
            );
            })}
        </div>
        </div>
        );
}

export default Todo;