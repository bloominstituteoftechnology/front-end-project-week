import React, { Component } from 'react';
import '../css/index.css';

export const Note = (props) => {
  console.log('The properties of Note are:', props);
  return (
    <div className="Note">
      <div className="Note__title">
        {props.note.title}
      </div>
      <div className="Note__text">
        {props.note.text}
      </div>
    </div>
  )
}