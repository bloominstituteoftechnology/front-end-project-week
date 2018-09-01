import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return(
        <div className='list-view'>
            <header className='list-header-container'>
                <h3 className='list-header'>Your Notes:</h3>
            </header>
            <div className='card-container'>
            {props.notes.map(note => (
                <div className='note-card' key={note._id}>
                    <Link to={`/notes/${note._id}`}>
                        <h3 className='note-title'>{note.title}</h3>
                    </Link>
                    <hr
                        size='1px'
                        color='darkgray'
                        width='160px'
                        align='center'
                    ></hr>
                    <p className='note-content'>{note.textBody}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ListView;
