import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <h1>Your Notes:</h1>
            <ul className='note-list'>
                {props.notes.map(note => {
                    return (
                        <Link to={`/view/${note.id}`} key={Math.random()} className='note'>
                            <h1>{note.title}</h1>
                            <hr />
                            <p>{note.content}</p>
                        </Link>    
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListView;