import React from 'react';
const Note = props => {
    return(
        <div>
            <div className="card-title">
                <h3>{props.note.title}</h3>
            </div>
            <div className="card-body">
                <h4>{props.note.textBody}</h4>
            </div>
           
            {/* <div className="card-tags">
                {props.note.tags.map((tag, index) => {
                    return (
                        <span key={index}>{tag}</span>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Note;