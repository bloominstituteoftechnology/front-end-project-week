import React from 'react'; 

const NoteCard = props => {
  
  return (
    <div className={'note-card'}>
      <h3>{props.note.title}</h3> 
      <hr/>
      <p>{props.note.textBody}</p>
    </div>
  )
}

export default NoteCard;