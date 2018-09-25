import  React from 'react';
import Note from './Note';
import './Note.css';

const NoteList =(props) =>{
    return (
        <div className="notelist-wrapper">
            <h1>Your Notes:</h1>
            {/* {console.log(props)} */}
            <div className="note-card-container">
                {props.noteList.map(note => (
                    <div className="note-card" 
                        key={note._id}
                        onClick={() => props.history.push(`/note/${note._id}`)}>
                        {/* <Note {...props} 
                                note={note}/> */}
                        
                        <h2 className="note-title">{note.title}</h2>
                        <p className="note-textBody">{note.textBody}</p>
                        <h3>{note._id}</h3>

                    </div>
                ))}
            </div>
        </div>
      
    )
}

export default NoteList;