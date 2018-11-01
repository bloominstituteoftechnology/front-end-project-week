import React from "react";

import DeleteModal from './DeleteModal';

import '../styles/Styles.css';

class ReadNote extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalToggle: false
    }
  }

  deleteModalToggleButton = () => {
    this.setState({ modalToggle: !this.state.modalToggle });
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
        <div className='note-controls'>
          <span className='note-control edit-text-button' onClick={this.handleEditClick}>edit</span>
          <span className='note-control delete-text-button' onClick={this.deleteModalToggleButton}>
            delete
          </span>
          <DeleteModal 
            modalState={this.state.modalToggle} 
            deleteNote={this.props.deleteNote} 
            currentId={this.props._id}
            modalToggle={this.deleteModalToggleButton}
          />
        </div>
        <h1 className='note-title'>{this.props.title}</h1>
        <p className='note-text'>{this.props.textBody}</p>
      </div>
    );
  }
}

export default ReadNote;
