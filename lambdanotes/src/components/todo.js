import React, { Component } from 'react';
import './components.css'

const Todo = props => {
    // const todo = props.cardinfo;
    return (
        <div className="Todo__Container">
            <div className="Todo__Title">Your Notes:</div>
                <div className="Todo__CardsWrapper">
                    {props.cardinfo.map ((item) => {
                        const { title, content } = item;
                        return (
                            <div className="Todo__Card">
                                <div className="Todo__NoteTitle">{title}</div>
                                <div className="Todo__NoteContent">{content}</div>
                            </div>
                        );
                    })}
                </div>
        </div>
        );
}

export default Todo;