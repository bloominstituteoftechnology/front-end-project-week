import React,  { Component } from 'react';




class CreateNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        noteList: [],
        fields:{
          noteTitle: '',
          noteContent: ''
        },

        note: "",
        error: false
      };
    }
  
    /*handleRemoveNote = noteId => {
      const noteList = this.state.noteList.map(note => {
        if (noteId === note.id) {
          note.completed = !note.completed;
        }
        return note;
      });
      this.setState({ noteList });
    };*/
    handleNoteChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    /*handleNoteChange = event => {
      const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({fields});
    };*/

   /* handleAddNote = event => {
      const noteList = [...this.state.noteList, this.state.fields];
      this.setState({
        noteList,
        fields: {
          noteTitle: '',
          noteContent: ''
        }
      });
      event.preventDefault();
    };*/
  
    handleAddNote = () => {
      if (this.state.note === "") {
        this.setState({ error: true });
        setTimeout(() => {
          this.setState({ error: false });
        }, 2400);
      } else {
        const noteList = this.state.noteList.slice(); //reference note array
        const fields = {
          // build  note object
          id: this.state.noteList.length + this.state.note,
          noteTitle: this.state.fields.noteTitle,
          noteContent: this.state.fields.noteContent,
          completed: false
        };
        noteList.push(fields); // add note to note list
        this.setState({ noteList, note: "" });
      }
    };
  
    render() {
      return (
        <div>
        <div>
          <h4>Create New Note</h4>
          <input 
            placeholder="Note Title"
            type="text"
            value={this.state.fields.noteTitle}
            name="note title"
            onChange={this.handleNoteChange}
          />
          </div>
          <div>
          <input
            placeholder="Create New Note"
            type="text"
            value={this.state.fields.noteContent}
            name="note"
            onChange={this.handleNoteChange}
          />
          <div>
          {this.state.error ? <div>Error note must not be empty text</div> : null}
          <button onClick={this.handleAddNote}>Save</button>
          </div>
        </div>
        </div>
      );
    }
  }
  
  export default CreateNote;