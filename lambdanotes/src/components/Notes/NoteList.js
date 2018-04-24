import React from 'react'
import Note from './Note'

const noteList = props => {
    return (
        <div className='col-9 right__side'>
            <div className="row">
                <h4>Your Notes:</h4>
            </div>
            <div className="row">
                {props.notes.map((note) => {
                    return (
                        <div className="col-4">
                            <Note note={note} key={note.id} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default noteList;