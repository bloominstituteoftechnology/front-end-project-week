import React from 'react';
import axios from 'axios';

// components
import Note from './Note';

import data from '../../data.json';

const NoteView = props => {
  // console.log(`NoteView: ${ props.noteList }`);
  return (
    <div>
      {
        props.noteList.map(note => {
          return (
            <Note key={ note.id } title={ note.title } content={ note.content } />
          )
        })
      }
    </div>
  )
}
 
export default NoteView;