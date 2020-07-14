import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = props => {

    

    return (
        <div className='list-block'>
            <h2>Your Notes: </h2>
            <div className='list'>
                {props.notes.map((note) => {
                    return <Link key={note.id} to={`/notes/${note.id}`} className='note'>
                        <div>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                    </Link>
                })}
            </div>
        </div>);
}

export default NoteList;


