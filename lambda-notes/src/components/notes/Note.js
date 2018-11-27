import React from 'react';
import './Notes.css';


const Note = (props) => {
    return (
        <div className="single-note">
            <h4 className="note-title">
                {/* Note Title */}
                {props.note.title}
            </h4>
            <div className="module line-clamp">
            <p className="text-body">
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ut, harum quae cupiditate omnis eaque dolorum sed odio veritatis dolorem eum necessitatibus nisi ratione incidunt culpa labore velit ab laboriosam? */}
                {props.note.textBody}
            </p>
            </div>
        </div>
    )
}

export default Note;