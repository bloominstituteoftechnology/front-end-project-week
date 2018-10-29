import React from 'react';
import Note from './Note';

const NoteList = ({ notes, noteClicked, history}) => {
    if (!notes.length) return <h2>Loading Notes ...</h2>;
    return (
        <div className='container'>
            <h2>Your Notes</h2>
            <div className={'note-list'}>
                {notes.map(note => 
                    <Note 
                        note={note} 
                        key={note._id} 
                        noteClicked={e => noteClicked(e, note._id, history)}
                    />)}
            </div>
        </div>
    );
}

export default NoteList;
