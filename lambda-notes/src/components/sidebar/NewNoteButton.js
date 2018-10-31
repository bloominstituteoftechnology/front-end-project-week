import React from 'react';
import { Link } from 'react-router-dom';

const NewNoteButton= props => {

    return (
    <div>
    <Link to='/NewNote'>
          New Note
         </Link>
    </div>
    )
}
export default NewNoteButton;