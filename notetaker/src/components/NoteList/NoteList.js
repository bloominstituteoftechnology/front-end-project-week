import React, { Component } from "react";
import  Note  from '../Note/Note.js';

const NoteList = props => {
    return <div>
        <h2>Your Notes:</h2>
        <div className='notelist'>
        {props.notes.map(note => <Note key ={note} note={note} />)}
        </div>
      </div>;
  };

export default NoteList;