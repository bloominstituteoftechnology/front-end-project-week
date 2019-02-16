import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

class EditNote extends Component {
  constructor(props) {
      super(props);
      this.state = {
          noteToEdit: {},
          updatedTitle: null,
          updatedText: null,
          loading: true
      }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
}
  updateTitleInputChangehandler
  updateTeaxtBodyInputChangehandler
  fetchNote 
  submitEditedNote

  render() {
    return (
      <div className="contentContainer">
          <h2>Edit Note:</h2>
        <form className="form" onSubmit={this.addNew}>
          <input className="title" 
                type='text' 
                name='title'
                onChange={this.updateTitleInputChangehandler}
                value={this.state.noteToEdit.title} />
  
            <input className="textBody" 
                type='text' 
                name='textBody'
                onChange={this.updateTeaxtBodyInputChangehandler}
                value={this.state.textBody} />
            <button className="button" type='submit'>Save</button>       
        </form>
      </div>
    )}
  }
  export default EditNote;