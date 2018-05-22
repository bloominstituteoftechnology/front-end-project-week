import React from 'react';

// components
import Note from './Note';

const NoteView = props => {
  return (
    <div className='noteview__note-container'>
      {
        props.noteList.map(note => {
          return (
            <Note
              key={ note.id }
              ID={ note.id }
              title={ note.title }
              content={ note.content }
              setSelectedNote={ props.setSelectedNote }
            />
          )
        })
      }
    </div>
  )
}
 
export default NoteView;