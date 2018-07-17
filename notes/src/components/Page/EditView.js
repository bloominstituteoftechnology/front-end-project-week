import React, { Component } from 'react';
import Form from '../Form';

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      note: {
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
        id = Number(this.props.match.params.noteID);
        this.setState({id: id});
        console.log(id, notes);
        notes = notes.filter(item => item.id === id);
        console.log(notes[0]);
        if (notes[0]) {
          this.setState({ note: {
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
        <Form buttonText='Update' onSubmitNote={this.props.onSubmitNote} id={this.state.id} note={this.state.note} />
      </main>
    );
  }
}

export default EditView;