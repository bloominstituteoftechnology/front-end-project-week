import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './Note';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get('https://lambda-notes-build.herokuapp.com/api/notes').then(res => setNotes(res.data)).catch(err => console.log(err));
  },[]);
  return (
    <div className='notes-container'>
      <h2 className='your-notes'>Your Notes:</h2>
      <button className='sort-button'>Sort A-Z</button>
      {notes.map(note => {
        return (
          <Note key={note.id} id ={note.id} note={note} />
        );
      })}
    </div>
  );
}

export default NotesList;