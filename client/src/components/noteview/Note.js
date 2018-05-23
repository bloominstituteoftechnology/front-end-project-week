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
            <div key={ Date.now() } className='note-wrapper'>
              <div className='note-wrapper__note-action-wrapper'>
                <Link to={ `edit/${ note.id }` } className='note-action-wrapper__note-edit-link'>
                  <Button
                    buttonClassName='note-edit-link__edit-button'
                    buttonContent={ 'Edit' }
                    buttonOnClick={ () => props.setEditValues(note.title, note.content) }
                  />
                </Link>

                <Button
                  buttonClassName='note-action-wrapper__delete-button'
                  buttonContent='Delete'
                  buttonOnClick={ () => props.handleDeleteNote(note.id) }
                />
              </div>
              
              <div className='note-wrapper__note-content-wrapper'>
                <h2 className='note-content-wrapper__h2'>{ note.title }</h2>
                <p className='note-content-wrapper__p'>{ note.content }</p>
              </div>
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