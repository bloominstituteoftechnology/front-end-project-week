import React from 'react';

//components
import Note from './Note';

//styling
import './ListView.css';

const listView = props => {
    return (
        <div className='listView'>
            <h3>Your Notes:</h3>
            <div className='notesWrapper'>
                {props.noteList.map(note => {
                    return (
                        <div key={note.id}>
                            <Note
                                note={note}
                                getNote={props.getNote}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default listView;