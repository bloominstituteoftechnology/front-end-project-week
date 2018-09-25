import React from 'react';
import './Note.css';

const Note = props => {
    // console.log(props.match.params.id);
    // const matchedNote = props.noteList.find(
    //     note => note._id === parseInt(props.match.params.id, 10)
    //   );
    // console.log(matchedNote);
    
    return( 
        <div className="note-component">
            {/* <h2 className="note-title">{props.note.title}</h2>
            <p className="note-textBody">{props.note.textBody}</p>
            <h3>{props.note.id}</h3> */}
        </div>
    )
}

export default Note;