import React, { Component } from "react";
import axios from "axios";
import Note from "../Note/Note.js";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  // componentDidMount() {
  //   this.getNotes();
  // }

  // getNotes = () => {
  //   axios
  //     .get(`http://localhost:5000/notes`)
  //     //   fetch data and store it in state
  //     .then(response => {
  //       //   console.log('response:', response);
  //       this.setState({ notes: response.data });
  //     })
  //     .catch(error => {
  //       console.error("Server Error", error);
  //     });
  // };

  render() {
    // const { title, content, id } = this.state.notes;
    return (
      <div>
        <h1 className="notesList__title">Your Notes:</h1>
        {this.props.notes.map(note => (
          <div>
            <Note
              className="notesList"
              key={note.id}
              note={note}
              // getNotes={() => this.componentDidMount()}
            />
          </div>
        ))}
      </div>
    );
  }
}
