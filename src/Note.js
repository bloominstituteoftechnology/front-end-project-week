import React from 'react';
import { Link } from 'react-router-dom';

const Note = (props) => {
    return(
        <div>
            <Link to={`/notes/${props.note.id}`}>
                <div>
                    <h3>Note Title</h3>
                    <p>“All this she must possess,” added Darcy, “and to all this she must yet add something more substantial, in the improvement of her mind by extensive reading.”

“I am no longer surprised at your knowing only six accomplished women. I rather wonder now at your knowing any.”</p>
                </div>
            </Link>
        </div>
    )
}

export default Note;