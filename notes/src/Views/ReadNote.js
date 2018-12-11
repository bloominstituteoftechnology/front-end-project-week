import React from "react";

import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';

import '../styles/Styles.css';

class ReadNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deleteModalState: false,
      editModalState: false
    }
  }

  deleteModalToggle = () => {
    this.setState({ deleteModalToggle: !this.state.deleteModalToggle });
  }
  
  editModalToggle = () => {
    this.setState({ editModalToggle: !this.state.editModalToggle });
  }

  handleEditClick = () => {
    console.log('edit click props: ', this.props);
    const newNoteContent = {
      title: this.props.title,
      textBody: this.props.textBody
    }
    this.props.editNote(this.props.id, newNoteContent);
  }

  handleDeleteClick = () => {
    console.log('Delete click props: ', this.props);
    this.deleteModalToggle;

  }

  render() {
    console.log("ReadNote props\n", this.state.id, this.state.title, this.state.textBody)
    return (
      <div className="full-page-note">
        <DeleteModal 
          deleteModalState={this.state.deleteModalState} 
          deleteNote={this.props.deleteNote} 
          currentId={this.props.id}
          modalToggle={this.handleDeleteClick}
        />
        <EditModal
          editModalState={this.state.editModalState} 
          editNote={this.props.editNote}
          currentId={this.props.id}
          editModalToggle={this.handleEditClick}
        />

        <div className='note-controls'>
          <span className='note-control edit-text-button' onClick={this.handleEditClick}>edit</span>
          <span className='note-control delete-text-button' onClick={this.handleDeleteClick}>
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