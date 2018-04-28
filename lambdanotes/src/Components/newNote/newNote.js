import React, { Component } from 'react';

class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteTitle: '',
      noteText: '',
    };
  }
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
          <h4> Create New Note: </h4>
        <input className='note_title'
          name="noteTitle"
          value={this.state.noteTitle}
          type="text"
          onChange={this.handleInputChange}
          placeholder="  Note Title"
        />
        <div>
           <input className='note_content'
          name="noteText"
          value={this.state.noteText}
          type="text"
          onChange={this.handleInputChange}
          placeholder="   Note Content"
        />
        </div>
        <button className="side_button" onClick={() => this.handleAddNote()}>Save</button>
      </div>
    );
  }
}



export default NewNote;