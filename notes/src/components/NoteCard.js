import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown'

const NoteCard = props => {
    return (  
        <div className="note-card">
            <Link className="note-link " to={`/note/${props.note._id}`}>
    <div>
          <h4>{props.note.title}</h4>
          <div className="card" />
          <div className="note-card-body">
            <Markdown source={props.note.textBody} />
    </div>
    </div>
        </Link>
</div>

    );
}
 
export default NoteCard