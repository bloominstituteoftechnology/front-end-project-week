import React from 'react';

const Note = props => {
    return(
        <div className="card">
            <div className="card-title">
                <h2>{props.note.title}</h2>
            </div>
            <div className="card-body">
                <h3>{props.note.textBody}</h3>
            </div>
            <div className="card-tags">
                {props.note.tags.map((tag, index) => {
                    return (
                        <span key={index}>{tag}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Note;