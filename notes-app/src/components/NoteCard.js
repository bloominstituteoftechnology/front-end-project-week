import React from 'react';


function NoteCard(props) {
  return (
    <div className="noteCard">
      <div className="noteCardTitle">{props.title}</div>
      <div className="noteCardText">{props.textBody}</div>
    </div>
  )
}

NoteCard.defaultProps = {
  title: '',
  textBody: ''
}


export default NoteCard;