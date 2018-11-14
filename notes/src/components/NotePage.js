import React from "react";


const NotePage = props => {
    let note = props.notes.find(note => `${note.id}` === props.match.params.id)
    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
    </div>  
    )
    
}

export default NotePage