import React from 'react';
import { Link } from 'react-router-dom'

// components
import Button from '../misc/Button';

// style
import './Note.css';

const Note = props => {
  if (props.match) {
    return (
      props.noteList.filter(note => {
        return note.id === props.match.params.id;
      })
        .map(note => {
          return (
            <div key={ Date.now() }>
              <div className=''>
                <Link to={ `edit/${ note.id }` }>
                  <Button
                    buttonContent={ 'Edit' }
                    buttonOnClick={ () => props.setEditValues(note.title, note.content) }
                  />
                </Link>

                <Button
                  buttonContent='Delete'
                  buttonOnClick={ () => props.handleDeleteNote(note.id) }
                />
              </div>
              
              <h2>{ note.title }</h2>
              <p>{ note.content }</p>
            </div>
          )
        })
    )
  }
  
  return (
    <Link to={ `note/${ props.ID }` } className='note-container__note-link'>
      <div className='note-link__note-div' onClick={ () => props.setSelectedNote(props.ID) }>
        <h2 className='note-div__h1'>{ props.title }</h2>
        <p className='note-div__p'>{ props.content }</p>
      </div>
    </Link>
  )
}
 
export default Note;