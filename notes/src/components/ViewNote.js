import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Link } from 'react-router-dom';

class ViewNote extends React.Component {
  
  handleDeleteNote = (id) => {
    this.props.deleteNote(id);
    this.props.history.push('/');
  }

  handleEditNote = (note) => {
    this.props.history.push({
    pathname: '/editnote',
    note: note
    });
  }

  render() {
    let note = this.props.location.note;

    if(!this.props.location.note){
      this.props.history.push('/');
      return null;
    }
    return (
      <div>
      	<div className="view-note">
          <div className="edit-delete">
              <span onClick={() => {this.handleEditNote(note)}}> edit </span><span onClick={() => {this.handleDeleteNote(note.id)}}> delete </span>
          </div>
       		<div className="note-title">{note.title}</div>
       		<div className="note-content">{note.content}</div>
       	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps, {deleteNote})(ViewNote);