import React from 'react';
import { Link } from 'react-router-dom'

// components
import Button from '../misc/Button';

// style
import './Note.css';

const Note = props => {
  if (props.match) {
    return (
      <React.Fragment>
        {
          props.noteList.filter(note => {
            return note.id === props.match.params.id;
          })
            .map(note => {
              const { id, title, content } = note;
              return (
                <div key={ Date.now() } className='note-wrapper'>
                  <div className='note-wrapper__note-action-wrapper'>
                    <Link to={ `edit/${ id }` } className='note-action-wrapper__note-edit-link'>
                      <Button
                        buttonClassName='note-edit-link__edit-button'
                        buttonContent={ 'Edit' }
                      />
                    </Link>
                    
                      <Button
                        buttonClassName='note-action-wrapper__delete-button'
                        buttonContent='Delete'
                        buttonOnClick={ () => props.setShowDeleteModal() }
                      />
                  </div>
                  <div className='note-wrapper__note-content-wrapper'>
                    <h2 className='note-content-wrapper__h2'>{ title }</h2>
                    <p className='note-content-wrapper__p'>{ content }</p>
                  </div>
                </div>
              )
            })
        }
        
        <div className={'note-action-wrapper__delete-modal-wrapper' + (props.showDeleteModal ? ' note-action-wrapper__delete-modal-wrapper--show' : ' null')}>
          <div>
            <h2>Are you sure you want to delete this?</h2>
          </div>
          <div className='delete-modal-wrapper__button-wrapper'>
            <Link className='button-wrapper__delete-note-link' to='/'>
              <button className='delete-note-link__button' onClick={ () => props.handleDeleteNote(props.noteList[0].id) }>DELETE</button>
            </Link>
            <button className='button-wrapper__no-button' onClick={ () => props.setShowDeleteModal() }>No</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
  
  return (
    <Link to={ `note/${ props.ID }` } className='note-container__note-link'>
      <div className='note-link__note-div'>
        <h2 className='note-div__h1'>{ props.title }</h2>
        <p className='note-div__p'>{ props.content }</p>
      </div>
    </Link>
  )
}
 
export default Note;