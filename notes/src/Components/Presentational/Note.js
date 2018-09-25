import React from 'react';


export const Note = props => {
    return (

        <div onClick={() => {!props.match.params.id ? props.history.push(`notes/note/${props.note._id}`): () => {return null}}}>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
            {props.match.params.id ? <div className="button delete" onClick={() => {props.expungeNote(props.note._id); props.history.push('/notes')}}>Delete Me</div> : ""}
            {props.match.params.id ? <div className="button update" onClick={() => {props.history.push(`/forms/revise/${props.match.params.id}`)}}>Update Me</div> : ""}
            
        </div>
    )
}