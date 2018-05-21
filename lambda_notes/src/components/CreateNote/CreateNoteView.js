import React, { Component } from 'react';
import '../CreateNote/CreateNoteView.css';

class CreateNoteView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      content: '',
      id: Date.now(),
     };
  }
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }
  render() {
    return (
      <div className="NoteView">
        <h2>Create New Note:</h2>
        <form>
          <input 
          type="text" 
          placeholder="Note Title" 
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          />
          <p>
            <textarea 
            row="50" cols="50" 
            placeholder="Note Content"
            name="content"
            value={this.state.content}
            onChange={this.handleInputChange}
            ></textarea>
          </p>
          <button className="NavButton">Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNoteView;