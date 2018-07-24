import React from 'react';
import { Link } from 'react-router-dom';


const NoteView = () => {
    return ( 
        <div>
            <div>
                <Link to='/edit-note'>edit</Link>
                <Link to='/'>delete</Link>
            </div>
            <h3></h3>
            <span></span>
        </div>
     );
}
 
export default NoteView;