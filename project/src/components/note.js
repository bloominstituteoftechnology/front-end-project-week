import React from 'react';



const Note = props => {
  
  return (
    <div>
      <div>
          <button>edit</button>
          <button>delete</button>
          <h3>{props.note.title}</h3>

      </div>
    </div>

  )
}

export default Note;