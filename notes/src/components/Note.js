import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import './App.css';
// import Note from './Note';



 class Note extends Component {

   handleClick = (event) => {
     this.props.deleteNote(this.props.match.params.id)
   }

   render() {
    return !this.props.match.params.id
    ? (   //big note list
      // <Route
      <div className="note">
        <Link to={`/note-list/${this.props.note._id}`}>
          <h3 className='note-title'>{this.props.note.title}</h3>
         </Link>
        <p className='note-textBody'>{this.props.note.textBody}</p>
        {/* <div
          className='delete-button'
          // onClick={this.handleClick}>Delete Me
        ></div> */}
      </div>
    )
    : this.props.match.params.id === this.props.note._id  //individual note view
    ? (   <div className="note-full-view">
            <h3 class='notes-title'>{this.props.note.title}</h3>
            <p className='notes-full-text'>{this.props.note.textBody}</p>
              {/* <Link to={`/note-list/${this.props.note._id}`}> My Home </Link> */}
          </div>
        )
    : ''
  }
}

export default Note
