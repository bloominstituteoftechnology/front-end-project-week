import React from 'react';


function Note(props) {
  return (
    <div className="noteCard">
      <div className="noteCardTitle">{props.title}</div>
      <div className="noteCardText">{props.textBody}</div>
    </div>
  )
}

Note.defaultProps = {
  title: '',
  textBody: ''
}


export default Note;