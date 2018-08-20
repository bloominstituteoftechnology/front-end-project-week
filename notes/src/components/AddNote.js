import React, { Component } from 'react';
import '../App.css';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      id: null,
      title: "",
      note: ""
    };
  }

  
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveHandler = e => {
    e.preventDefault();
    const newNote = this.state.notes.slice(); 
    newNote.push({
      id: this.state.id,
      title: this.state.title,
      note: this.state.note
    });
    this.setState({notes: newNote, id: null, title: "", note: "" });
};

  render() {
    console.log('inputing', this.state.notes)
    return (
      <div className="form">
        <div className="form-title">Create New Note:</div>

        <div className="form-body">
        <form onSubmit={this.onSaveHandler}>
          <input
            type="text"
            className="form-inputtitle"
            name="title"
            onChange={this.inputHandler}
            placeholder="Note Title"
            value={this.state.title}
          />
          <input
            type="text"
            className="form-inputnote"
            name="note"
            onChange={this.inputHandler}
            placeholder="Note Content"
            value={this.state.note}
          />
          <button className="form-button">Save</button>
        </form>
        </div>
      </div>
    );
  }
}
