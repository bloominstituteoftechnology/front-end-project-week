import React from 'react';

const NotesList = props => {
    return (
        <div className='list-view'>
            <div className='notes-sidebar'>
                <h1 className='title'>Lambda Notes</h1>
                <button>View Your Notes</button>
                <button>+ Create New Note</button>
            </div>
            <div className='notes-section'>
                <h3 className='notes-title'>Your Notes:</h3>
                {props.notesList.map((eachNote) => {
                    return (
                        <div key={eachNote._id} className='each-note'>
                            <h4 className='each-note-title'>{eachNote.title}</h4>
                            <p>{eachNote.textBody}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default NotesList;