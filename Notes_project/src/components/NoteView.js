import React from 'react'; 
import {Link} from 'react-router-dom';

const NoteView = () => {
    return(
        <div>
            <Link to={'/EditCard'}><h6> Edit </h6></Link>
            <h6> Delete </h6>
            <h1>Note View </h1>
        </div>
    )
}
export default NoteView;