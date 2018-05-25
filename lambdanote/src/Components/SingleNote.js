import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import './SingleNote.css';

class SingleNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
          //   const thisNote = this.props.notes.filter(note => this.props.match.params.id === note.id);
      };
  }
  render()  {
    
    return (
        <div className='single-note'>
        <div className='click-container'>
        <Link to='/edit'><p className='viewNote-btn'>edit</p></Link>
        <DeleteNote />
        </div>
        <div className='content'>
            <h3 className='single-note-header'>{this.props.title}</h3>            
            <p>{this.props.text}</p>
            </div>
        </div>
    )
}
}


export default SingleNote;