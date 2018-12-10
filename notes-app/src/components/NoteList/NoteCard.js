import React from 'react';

const NoteCard = props => {
    let { title, textBody, _id } = props.note
    console.log(props.note._id)
    return (
        <div className="note-card" onClick={() => 
        props.history.push(`/card/${_id}`)
        
        }>
            <h3>{title}</h3>
            <p>{textBody}</p>
        </div>
    )
}

export default NoteCard;