import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';

 class Note extends Component {

   handleClick = () => {
     this.props.deleteNote(this.props.match.params.id)
   }

   render() {
    return !this.props.match.params.id
    ? (   //big note list
      <div className="note">
        <Link to={`/note-list/${this.props.note.id}`}>
          <h3 className='note-title'>{this.props.note.title}</h3>
         </Link>
        <p className='note-textBody'>{this.props.note.content}</p>
      </div>
    )
    : this.props.match.params.id == this.props.note.id  //individual note view
    ? (   <div className="note-full-view">
            <h3 className='notes-title'>{this.props.note.title}</h3>
            <p className='notes-full-text'>{this.props.note.content}</p>
          </div>
        )
    : ''
  }
}

export default Note
