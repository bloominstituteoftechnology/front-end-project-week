import React from 'react';
import {Link} from 'react-router-dom';

const NoteCard = props => {
  return (
    <div className="card-main-container">
      <div className="card-header-container">
        <Link to={`/note/${props.id}`}><h3>{props.title}</h3></Link>
      </div>
      {/* just show preview for now, implement SUMMRY api when mvp is done */}
      <div className="card-body-container">
        <p className="text-body">{props.textBody}</p>
      </div>
    </div>
  )
}

export default NoteCard;