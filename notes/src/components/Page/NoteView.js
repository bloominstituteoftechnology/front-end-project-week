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

  onClickEdit = e => {
    e.preventDefault();
    window.location.href = `/edit/${this.state.id}`;
  }

  onClickDelete = e => {
    e.preventDefault();
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
        <div className="note-view-control">
          <button className="note-view-control__button" onClick={e => this.onClickEdit(e)}>edit</button>
          <button className="note-view-control__button" onClick={e => this.onClickDelete(e)}>delete</button>
        </div>
        <h2>{this.state.note.title}</h2>
        <span className="note-view__content">{this.state.note.noteContent}</span>
      </main>
    );
  }

}

export default NoteView;