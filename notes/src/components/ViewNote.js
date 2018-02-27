import React from 'react';
import { connect } from 'react-redux';
import { deleteNote} from '../actions';

class ViewNote extends React.Component {
  
  handleDeleteNote = (id) => {
    this.props.deleteNote(id);
    this.props.history.push('/');
  }

  render() {
    let note = this.props.location.note;

    if(!this.props.location.note){
      this.props.history.push('/');
      return null;
    }
    return (
      <div>
      	<div className="note">
          <div>Edit</div>
          <div onClick={() => {this.handleDeleteNote(note.id)}}>Delete</div>
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