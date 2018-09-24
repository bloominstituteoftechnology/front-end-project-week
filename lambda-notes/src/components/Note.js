import React from 'react';
import { Link } from 'react-router-dom';
import Editnote from './Editnote';
import Deletenote from './Deletenote';

const Note = props => {

        return (
            <div className="note">
                <div className="noteHeader">
                    <Link to='/notes/:_id/edit' component={Editnote}>Edit</Link>
                    <Link to='/notes/:_id/delete' component={Deletenote}>Delete</Link>
                </div>
                <div className='noteBody'>
                    <h1>{props.note.title}</h1>
                    <h3>{props.note.textBody}</h3>
                </div>
            </div>
            
        )
    
}

export default Note;