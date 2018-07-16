import React from 'react';
import '../App.css'

const NoteCard = props => {
  const {
    title,
    textBody
  } = props.note;
  return (
    <div className="notecard">
      <div className="">
        <div>
          <div className="">
            <h2>{title}</h2>
          </div>
          <p className="">{textBody}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;

