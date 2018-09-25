import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NoteCard(props) {
  const { title, textBody, _id } = props.note;
  console.log(props);
  return(
    <div className='note-card'>
      <Link to={`notes/${_id}`}>
        <h3>{ title }</h3> 
      </Link>
      <p>{ textBody }</p>
    </div>
  );
}

export default NoteCard;