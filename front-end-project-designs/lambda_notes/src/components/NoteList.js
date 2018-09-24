import  React from 'react';

const NoteList =(props) =>{
    return (
        <div className="notelist-wrapper">
            <h1>Hi</h1>
            {/* {props.noteList.map(note => (
                <div className="note-card" 
                     key={note.id}
                     onClick={() => props.history.push(`/note/get/${note.id}`)}>
                    <h2 className="note-title">{note.title}</h2>
                    <p className="note-textBody">{note.textBody}</p>

                </div>
            ))} */}
        </div>
      
    )
}

export default NoteList;