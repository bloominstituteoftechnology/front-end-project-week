import React from "react";

import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';

import '../styles/Styles.css';

class ReadNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deleteModalToggle: false,
      editModalToggle: false,
      _id: '',
      title: '',
      textBody: '',
      tabs: []
    }
  }

  deleteModalToggleButton = () => {
    this.setState({ deleteModalToggle: !this.state.deleteModalToggle });
  }
  
  editModalToggleButton = () => {
    this.setState({ editModalToggle: !this.state.editModalToggle });
  }

  handleEditClick = () => {
    console.log('readNote props: ', this.props);
    const newNoteContent = {
      title: this.props.title,
      textBody: this.props.textBody,
      tags: this.props.tags
    }
    this.props.editNote(this.props._id, newNoteContent);
  }

  render() {
    console.log(this.props)
    return (
      <div className="full-page-note">
        <DeleteModal 
          deleteModalState={this.state.deleteModalToggle} 
          deleteNote={this.props.deleteNote} 
          currentId={this.props._id}
          modalToggle={this.deleteModalToggleButton}
        />
        <EditModal
          editModalState={this.state.editModalToggle} 
          editNote={this.props.editNote}
          currentId={this.props._id}
          editModalToggle={this.props.editModalToggleBottmo}
        />

        <div className='note-controls'>
          <span className='note-control edit-text-button' onClick={this.handleEditClick}>edit</span>
          <span className='note-control delete-text-button' onClick={this.deleteModalToggleButton}>
            delete
          </span>
        </div>
        <h1 className='note-title'>{this.props.title}</h1>
        <p className='note-text'>{this.props.textBody}</p>
      </div>
    );
  }
}

export default ReadNote;