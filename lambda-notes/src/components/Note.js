import React, { Component } from 'react';
import '../css/index.css';
import NewNote from'./NewNote';

const Note = (props) => {
  return (
    <div className="Note">
      <NewNote />
    </div>
  )
}

export default Note;