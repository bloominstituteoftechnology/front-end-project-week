import React from 'react';
import { Link } from 'react-router-dom'

const Note = props => {
  if (props.match) {
    return (
      props.noteList.filter(note => {
        return note.id === props.match.params.id;
      })
        .map(note => {
          return (
            <Link to={ `note/edit/${ note.id }` } key={ Date.now() }>
              <div>
                <h2>{ note.title }</h2>
                <p>{ note.content }</p>
              </div>
            </Link>
          )
        })
    )
  }
  
  return (
    <Link to={ `note/${ props.ID }` }>
      <div onClick={ () => props.setSelectedNote(props.ID) }>
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
    </Link>
  )
}
 
export default Note;