import React, { Component } from 'react';

class EditNote extends Component {
    state = {
      noteTitle: '',
      noteText: '',
    };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddNote = () => {
    const { noteTitle, noteText } = this.state;
    const noteData = { noteTitle, noteText };
    this.setState({ noteTitle: '', noteText: ''});
  };
  render () {
    return (
      <div className= 'noteList'>
          <h4> Edit Note: </h4>
        <input className='note_title'
          name="noteTitle"
          value={this.state.noteTitle}
          type="text"
          onChange={this.handleInputChange}
          placeholder="   Note Title"
        />
        <div>
           <input className='note_content'
          name="noteText"
          value={this.state.noteText}
          type="text"
          onChange={this.handleInputChange}
          placeholder=" Note Content"
        />
        </div>
        <button className="side_button" onClick={() => this.handleAddNote()}>Update</button>
      </div>
    );
  }
}



export default EditNote;