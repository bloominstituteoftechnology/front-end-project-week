import React from 'react';

// components
import Note from './Note';

// style
import './NoteView.css';

const NoteView = ({ noteList, setSelectedNote }) => {
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
 
export default NoteView;