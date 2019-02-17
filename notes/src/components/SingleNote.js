import React from 'react';
import '../App.css';

const SingleNote = props => {
    const note = props.notes.find(note => `${note._id}` === props.match.params.noteID);

    if (note === undefined) {
        return <h1>loading...</h1>
    }
    else {
        return  (
            <section className = 'single-note'>
                <div className = 'note-title-single'>
                    <h3>{note.title}</h3>
                </div>

                <div>
                    <p>{note.textBody}</p>
                </div>
                </section> 
        )  
    }

}



export default SingleNote;