import React from "react";
import { Link } from 'react-router-dom';


const NotePage = props => {
    let note = props.notes.find(note => `${note.id}` === props.match.params.id)
    const deleteHandler = e => {
        e.preventDefault()
        props.deleteNote(note.id)
        props.history.push('/')
    }
    
    return (
      <div>
        <Link to={`/note/${note.id}/edit`}>edit</Link>
        <span onClick={deleteHandler} style={{textDecoration: 'underline', cursor: 'pointer', color: '#551A8B', paddingLeft: '5px'}}>delete</span>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
    </div>  
    )
    
}

export default NotePage