import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const ViewNote = props => {
    console.log('hey props', props);
  return(
    <div className='ViewNote-container'>
    <h1>WORK</h1>
    <h2 className='ViewNote-title'>{props.note.title}</h2>
    <p className='ViewNote-content'>{props.note.content}</p>
    </div>
    )
}

export default ViewNote;