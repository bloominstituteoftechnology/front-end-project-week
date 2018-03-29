import React from 'react';
import { Link } from 'react-router-dom';
// import DeleteNote from './DeleteNote';
import { Col } from 'reactstrap';
import DeleteNote from './DeleteNote';

const NoteView = props => {
  console.log('props', props);
  return (
    <Col className='note'>
      <div className='note__options'>
        <Link className='link' to='/notes/:id/edit'>edit</Link>
        <DeleteNote label='Delete note'/>
      </div>
      <h4>{props.location.title}</h4>
      <p>{props.location.content}</p>
    </Col>
  )
}


export default NoteView;
