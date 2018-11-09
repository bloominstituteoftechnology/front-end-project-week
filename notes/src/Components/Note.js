import React, { Component } from 'react';
import axios from 'axios';

//import NoteCard from './NoteCard';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {},
      id: null,
    };   
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    console.log(id);
    this.setState({ id, notes: this.props.notes });
  }

  fetchNote = note => {
    if (note._id === this.state.id) {
      return (
        <div>
          <p>{note.title}</p>
          <p>{note.textBody}</p>
       {/*    <button onClick={e => {
            this.deleteNote(e, note.id);
          }}>
          Delete Note
          </button>  */}
        </div>
      );
    }
  };

  render() {

    return <div>
              {this.state.notes.map(note => this.fetchNote(note))}
            </div>;

  }
}
export default Note;