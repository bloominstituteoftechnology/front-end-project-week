import React, { Component } from 'react';
import Form from '../Form';

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: null,
        title: '',
        noteContent: ''
      }
    };
  }

  componentDidUpdate(prevProps) {
    let id;

    if(prevProps.notes !== this.props.notes) {
      if (this.props.match) {
        let notes = this.props.notes.slice();
        id = this.props.match.params.noteID;
        notes = notes.filter(item => item.id === id);
        console.log(notes[0]);
        if (notes[0]) {
          this.setState({ note: {
            id: notes[0].id,
            title: notes[0].title,
            noteContent: notes[0].noteContent
          }});
        }
      }
    }

  }

  render() {
    return (
      <main className="edit-view">
        <h2>Edit Note:</h2>
        <Form buttonText='Update' onSubmitNote={this.props.onSubmitNote} note={this.state.note} />
      </main>
    );
  }
}

export default EditView;