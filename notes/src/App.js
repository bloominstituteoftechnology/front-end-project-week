import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Sidebar from './components/Sidebar';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Modal from './components/DeleteModal';
import Dropdown from './components/SortDropdown';

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Welcome!',
        text: `Please create a new note! Click for more information. You can create a new note by clicking the create new note button to the left. You can also edit and delete me by clicking on me and then using one of the handy controls at the top!`
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
    dropdown: false,
    nextId: 1
  };

  /* Form methods */

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    const { notes, title, text, nextId } = this.state;
    if (title === '') return null;
    this.setState({
      notes: [{
        id: nextId,
        title,
        text
      }, ...notes],
      title: '',
      text: '',
      nextId: nextId + 1
    }, this.redirect);
  };

  editNote = e => {
    e.preventDefault();
    const { notes, title, text, note } = this.state;
    if (title === '') return null;
    this.setState({
      notes: notes.map(n => n.id === note.id ? {...n, title, text} : n),
      title: '',
      text: ''
    }, this.redirect);
  };

  updateEditInput = () => {
    const { title, text } = this.state.note;
    this.setState({ title, text });
  };

  updateCreateInput = () => {
    this.setState({ title: '', text: '' });
  };

  /* Modal/delete methods */

  deleteNote = () => {
    const { notes, note } = this.state;
    this.toggleModal();
    this.setState({
      notes: notes.filter(n => n.id !== note.id)
    }, this.redirect);
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* Dropdown/sort methods */

  sortByLatest = () => {
    const sortCb = (a, b) => b.id - a.id;
    this.toggleDropdown();
    this.setState({
      notes: this.state.notes.slice().sort(sortCb)
    });
  };

  sortByOldest = () => {
    const sortCb = (a, b) => a.id - b.id;
    this.toggleDropdown();
    this.setState({
      notes: this.state.notes.slice().sort(sortCb)
    });
  };

  sortAlphabetically = () => {
    const sortCb = (a, b) => {
      const aStr = /[A-Za-z]+/.exec(a.title),
        bStr = /[A-Za-z]+/.exec(b.title);
      if (aStr && bStr) {
        return aStr[0].localeCompare(bStr);
      } else {
        return a - b;
      }
    };
    this.toggleDropdown();
    this.setState({
      notes: this.state.notes.sort(sortCb)
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  };

  /* Misc. methods */

  redirect = () => window.location='/'; // back to notes page

  storeNote = note => { // for single note view
    this.setState({ note });
  };

  formatForCSV = () => {
    return this.state.notes.map(note => {
      const { title, text } = note;
      return { title, text };
    });
  };

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
        <Sidebar formatForCSV={this.formatForCSV} />
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
                  update={this.updateCreateInput}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="notes-container">
                <h2>Your Notes:</h2>
                <Dropdown 
                  toggle={this.toggleDropdown} 
                  dropdown={this.state.dropdown} 
                  sortByLatest={this.sortByLatest}
                  sortByOldest={this.sortByOldest}
                  sortAlphabetically={this.sortAlphabetically}
                />
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
                  update={this.updateEditInput}
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
