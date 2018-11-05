import React from 'react';


function NoteCard(props) {

  return (
    <div className="noteCard">
      <div className="noteCardTitle">{props.note.title}</div>
      <div className="noteCardText">{props.note.textBody}</div>
    </div>
  )
}

NoteCard.defaultProps = {
  title: '',
  textBody: ''
}


export default NoteCard;