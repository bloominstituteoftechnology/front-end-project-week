import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Modal from './components/DeleteModal';

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Welcome!',
        text: `Please create a new note! Click for more information.
          You can create a new note by clicking the create new note button to the left.
          You can also edit and delete me by clicking on me and then using one of the handy controls at the top!`
      }
    ],
    title: '',
    text: '',
    note: {
      id: -1, 
      title: 'Please return to the notes page.', 
      text: 'You\'ve went and refreshed at the wrong time! Just view your notes to continue your lovely note experience.'
    },
    modal: false,
    nextId: 1
  };

  // for single note view
  storeNote = note => {
    this.setState({ note });
  };

  /* Form methods */

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    const { notes, title, text, nextId } = this.state;
    this.setState({
      notes: [{
        id: nextId,
        title,
        text
      }, ...notes],
      title: '',
      text: '',
      nextId: nextId + 1
    });
  };

  editNote = e => {
    e.preventDefault();
    const { notes, title, text, note } = this.state;
    this.setState({
      notes: notes.map(n => n.id === note.id ? {...n, title, text} : n),
      title: '',
      text: ''
    });
  };

  /* Modal methods */

  deleteNote = () => {
    const { notes, note } = this.state;
    this.toggleModal();
    this.setState({
      notes: notes.filter(n => n.id !== note.id)
    }, window.location="/");
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* Lifecycle methods */

  componentWillMount() {
    localStorage.getItem('notes') &&
    localStorage.getItem('nextId') &&
    this.setState({
      notes: JSON.parse(localStorage.getItem('notes')),
      nextId: JSON.parse(localStorage.getItem('nextId'))
    });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState.notes));
    localStorage.setItem('nextId', JSON.stringify(nextState.nextId));
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <h1>Lambda Notes</h1>
          <Link to="/"><Button color="info">View Your Notes</Button></Link>
          <Link to="/create"><Button color="info">+ Create New Note</Button></Link>
        </div>
        <div className="main-content">
          <Route
            path="/create"
            render={() => (
              <div className="note-form-container">
                <h2>Create New Note:</h2>
                <NoteForm 
                  onChange={this.onChange} 
                  onSubmit={this.addNote} 
                  title={this.state.title} 
                  text={this.state.text} 
                  formText="Save"
                />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <h2>Your Notes:</h2>
                <div className="notes">
                  {this.state.notes.map(note => (
                    <Link 
                      key={note.id} 
                      onClick={() => this.storeNote(note)} 
                      to={`/notes/${note.id}`}
                    >
                      <Note note={note} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          />
          <Route
            path="/notes/:id"
            render={() => (
              <div className="single-note-card">
                <Link to="/notes/delete" onClick={this.toggleModal}>delete</Link>
                <Link to="/edit">edit</Link>
                <Note note={this.state.note} single={true} />
              </div>
            )}
          />
          <Route
            path="/edit"
            render={() => (
              <div className="note-form-container">
                <h2>Edit Note:</h2>
                <NoteForm
                  onChange={this.onChange} 
                  onSubmit={this.editNote} 
                  title={this.state.title} 
                  text={this.state.text} 
                  formText="Update"
                />
              </div>
            )}
          />
          <Route
            path="/notes/delete"
            render={() => (
              <Modal
                toggle={this.toggleModal}
                modal={this.state.modal}
                delete={this.deleteNote}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
