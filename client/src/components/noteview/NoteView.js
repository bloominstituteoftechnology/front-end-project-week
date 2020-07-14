import React from 'react';

// components
import Note from './Note';

// style
import './NoteView.css';

const NoteView = ({ noteList, setSelectedNote }) => {
  if (noteList.length > 0) {
    return (
      <div className='noteview__note-container'>
        {
          noteList.map(note => {
            const { id, title, content } = note;
            return (
              <Note
                key={ id }
                ID={ id }
                title={ title }
                content={ content }
                setSelectedNote={ setSelectedNote }
              />
            )
          })
        }
      </div>
    )
  }
  return (
    <div className='note-container-empty'>
      <h1>Congratulations, you're up to date with all of your tasks!</h1>
    </div>
  )
}
 
export default NoteView;