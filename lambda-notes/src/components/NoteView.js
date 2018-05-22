import React from 'react';
import { Link } from 'react-router-dom';

const NoteView = (props) => {
  // console.log(props)
  
  const selectedNote = props.notes.filter((current) => {
    return current.id === Number(props.match.params.id)
  })

  return (
    <React.Fragment>
      <div className="float-right">
        <Link to={`/edit/${selectedNote[0].id}`} className="links"><u>edit</u> </Link>
        <Link to="/" className="links ml-3" onClick={() => props.delete(selectedNote[0].id)}><u>delete</u></Link>
      </div>
      <h3>{selectedNote[0].title}</h3>
      <p>{selectedNote[0].body}</p>
    </React.Fragment>
  )
}
 
export default NoteView;