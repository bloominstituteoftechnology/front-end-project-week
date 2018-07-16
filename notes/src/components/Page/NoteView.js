import React, { Component } from 'react';

class NoteView extends Component {
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
      <main className="note-view">
        <h2>{this.state.note.title}</h2>
        <span className="note-view__content">{this.state.note.noteContent}</span>
      </main>
    );
  }

}

export default NoteView;