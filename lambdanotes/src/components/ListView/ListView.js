import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';

const ListView = (props) => {
    return (
        <div className='listViewContainer'>
            <h3 className='listViewHeader'>Your Notes:</h3>
            <div className='noteCardsCollection'>
                {props.notesList.map(note => (
                    <div onClick={() => props.setCurrentNote(note._id)} key={note._id} className='entireNoteCardLink'>
                        <Link to={`/${note._id}`} className='noteCardLink'>
                            <div className='noteCard'>
                                <h6 className='noteTitle'>{note.title}</h6>
                                <span className='noteContent'>{note.textBody}</span>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListView;