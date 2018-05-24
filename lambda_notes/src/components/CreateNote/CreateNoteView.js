import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CreateNote/CreateNoteView.css';

class CreateNoteView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      content: '',
     };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitInputChange = this.submitInputChange.bind(this);
  }

  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value});
  }
  
  submitInputChange = (props) => {
    let note = this.state;
    this.props.addNote(note);
    this.setState({title: '', content: ''});
  }

  render() {
    return (
      <div className="NoteView">
        <p className="CreateNote-Header">Create New Note:</p>
        <form className="Form">
          <input 
          className="TitleInput"
          type="text" 
          placeholder="Note Title" 
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          />
          <p>
            <textarea
            className="ContentInput" 
            row="50" cols="50" 
            placeholder="Note Content"
            name="content"
            value={this.state.content}
            onChange={this.handleInputChange}
            ></textarea>
          </p>
        </form>
        <Link to="/home">
          <button 
          onClick={this.submitInputChange}
          className="CreateViewButton">
            Save
          </button>
        </Link>
      </div>
    );
  }
}

export default CreateNoteView;