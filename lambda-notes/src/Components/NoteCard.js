import React from 'react'; 

const NoteCard = props => {
  
  return (
    <div onClick={() => props.history.push(`note/${props.note._id}`)}
      className={'note-card'}>
      <h3>{props.note.title}</h3> 
      <hr/>
      <p>{props.note.textBody}</p>
    </div>
  )
}

export default NoteCard;