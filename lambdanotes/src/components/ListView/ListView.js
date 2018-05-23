import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';

const ListView = (props) => {
    return (
        <div className='listViewContainer'>
            <h3 className='listViewHeader'>Your Notes:</h3>
            <div className='noteCardsCollection'>
                {props.notesList.map(note => (
                    <div onClick={() => props.setCurrentID(note.id)} className='entireNoteCardLink'>
                        <Link to={`/${note.id}`} className='noteCardLink'>
                            <div className='noteCard'>
                                <h6 className='noteTitle'>{note.title}</h6>
                                <p className='noteContent'>{note.content}</p>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListView;