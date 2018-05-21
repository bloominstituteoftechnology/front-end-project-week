import React,  { Component } from 'react';




class CreateNote extends Component {
    constructor() {
      super();
      this.state = {
        noteList: [
            {
                noteTitle: 'noteContent'
            }
        ],
        note: "",
        error: false
      };
    }
  
    handleRemoveNote = noteId => {
      const noteList = this.state.noteList.map(note => {
        if (noteId === note.id) {
          note.completed = !note.completed;
        }
        return note;
      });
      this.setState({ noteList });
    };
  
    handleNoteChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleAddNote = () => {
      if (this.state.note === "") {
        this.setState({ error: true });
        setTimeout(() => {
          this.setState({ error: false });
        }, 2400);
      } else {
        const noteList = this.state.noteList.slice(); //reference note array
        const note = {
          // build  note object
          id: this.state.noteList.length + this.state.note,
          title: this.state.note,
          completed: false
        };
        noteList.push(note); // add note to note list
        this.setState({ noteList, note: "" });
      }
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.state.note}
            name="note"
            onChange={this.handleNoteChange}
          />
          {this.state.error ? <div>Error note must not be empty text</div> : null}
          <button onClick={this.handleAddNote}>Save</button>
        </div>
      );
    }
  }
  
  export default CreateNote;