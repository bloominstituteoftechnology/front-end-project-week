import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import { Col } from 'reactstrap';

const NoteView = props => {
  console.log('props', props);
  return (
    <Col className='note'>
      <div className='note__options'>
        <Link className='link' to='/notes/edit/:id'>Edit</Link>
        <DeleteNote label='Delete note'/>
      </div>
      <h4>{props.match.params.title}</h4>
      <p>{props.match.params.content}</p>
    </Col>
  )
}


export default NoteView;
