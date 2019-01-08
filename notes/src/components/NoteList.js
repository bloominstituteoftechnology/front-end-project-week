import React from 'react';

import NoteContianer from './NoteContainer';

import '../components/layout.css';

const NoteList = props => {
        return(
            <div className='rightSide'> 
                <h2>Your Notes:</h2>
                <div className='noteWrapper'>
                    {props.notes.map(note => 
                        <NoteContianer key={note._id} title={note.title} body={note.textBody} id={note._id} />
                    )}
                </div>
                
            </div>
        )
    }
export default NoteList;