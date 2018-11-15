import React from 'react';

const NotesList = props => {
    return (
        <div>
            <div className='notes-sidebar'>
                <h1>Lambda Notes</h1>
                <button>View Your Notes</button>
                <button>+ Create New Note</button>
            </div>
            <div className='notes-section'>
                {props.notesList.map((eachNote) => {
                    return (
                        <div key={eachNote._id} className='each-note'>
                            <h4>{eachNote.title}</h4>
                            <p>{eachNote.textBody}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default NotesList;