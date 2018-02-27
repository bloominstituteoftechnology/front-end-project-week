import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';

class ViewNote extends React.Component {
  
  handleDeleteNote = (id) => {
    this.props.toggleModal();
    this.props.history.push('/modal');
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
            <span onClick={() => {this.handleEditNote(note)}}> edit </span><span onClick={() => {this.props.toggleModal(note.id)}}> delete </span>
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

export default connect(mapStateToProps, {toggleModal})(ViewNote);