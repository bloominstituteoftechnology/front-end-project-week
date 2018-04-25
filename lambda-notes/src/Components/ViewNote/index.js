import React from 'react';
import './view.css';

export const viewNote = props => {
    return (
        <div className="col-9 right__side">
            <div className="row">
                {props.Notes.map(note => {
                    return (
                        <div>
                            <h1>{note.title}</h1>
                            <div>
                                <p>{note.body}</p>
                            </div>
                        </div>
                    )
                })}  
            </div>
        </div>
    )
}   

