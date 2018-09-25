import React, { Component } from 'react';
import { deleteNote, createNote } from '../actions'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
// import Note from './Note';



 class Note extends Component {

   handleClick = (event) => {
     console.log(event)
     console.log(this.props.match.params);
     this.props.deleteNote(this.props.match.params.id)
     console.log('finished delete');
   }

   // console.log('Note:', props);
   // console.log('Path:', this.props.match.path);
   // console.log('Url:', this.props.match.url);
   // console.log(this.props.match.params.id);
   // console.log(this.props.note._id);
   // if (this.props.match.params.id == this.props.note._id) {
   render() {
    return !this.props.match.params.id
    ? (
      // <Route
      <div className="note">
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.textBody}</p>
        {/* <div
          className='delete-button'
          // onClick={this.handleClick}>Delete Me
        ></div> */}
          <Link to={`/note-list/${this.props.note._id}`}>My Home </Link>
      </div>
    )
    : this.props.match.params.id == this.props.note._id
    ? (      <div className="note">
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.textBody}</p>
            <button
              className='delete-button'
              onClick={this.handleClick}>Delete Me</button>
              <Link to={`/note-list/${this.props.note._id}`}> My Home </Link>
          </div>
        )
    : ''
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps, { deleteNote, createNote })(Note))
