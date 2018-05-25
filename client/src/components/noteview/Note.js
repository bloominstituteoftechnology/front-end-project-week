import React from 'react';
import { Link } from 'react-router-dom'

// components
import Button from '../misc/Button';
import DeleteModal from './DeleteModal';

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
        
        <DeleteModal
          showDeleteModal={ props.showDeleteModal }
          handleDeleteNote={ () => props.handleDeleteNote(props.noteList[0].id) }
          setShowDeleteModal={ () => props.setShowDeleteModal() }
        />
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