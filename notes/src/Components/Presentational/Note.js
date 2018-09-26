import React from 'react';


export const Note = props => {
    const fontSize = () => { if(props.note.textBody.length <= 20){
        return '30px';
    } else if (props.note.textBody.length <= 100) {
        return '20px';
    } else if (props.note.textBody.length > 100) {
        return '14px'
    }
}



    return (
        <div 
        id={props.id} 
        key={props.id}  
        className="note" 
        onClick={() => 
        {!props.match.params.id ? props.history.push(`notes/note/${props.note._id}`): () => {return null}}}
        >
            <div className="note-container">
                <h3>{props.note.title}</h3>
                <p style={{fontSize:!props.match.params.id ? fontSize() : '16px'}}>{props.note.textBody}</p>
                {props.match.params.id ? <div className="button delete" onClick={() => {props.expungeNote(props.note._id); props.history.push('/notes')}}>Delete Me</div> : ""}
                {props.match.params.id ? <div className="button update" onClick={() => {props.history.push(`/forms/revise/${props.match.params.id}`)}}>Update Me</div> : ""}
            </div>
        </div>
    )
}