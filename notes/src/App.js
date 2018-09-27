import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Fuse from 'fuse.js';
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
import Note from './components/Note';
import NoteFormContainer from './components/NoteFormContainer';
import Modal from './components/DeleteModal';
import Dropdown from './components/SortDropdown';

const URL = 'https://notes-api-johnoro.herokuapp.com/api/notes';

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Welcome!',
        text: 'Please create a new note! Click for more information. You can create a new note by clicking the create new note button to the left. You can also edit and delete me by clicking on me and then using one of the handy controls at the top!'
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
    dropdown: false
  };

  /* Form methods */

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    const { notes, title, text } = this.state;
    if (title === '') return null;
    axios.post(URL, { title, text })
      .then(({ data }) => {
        this.setState({
          notes: [{
            id: data,
            title,
            text
          }, ...notes],
          title: '',
          text: ''
        }, this.redirect);
      })
      .catch(err => console.error(err));
  };

  editNote = e => {
    e.preventDefault();
    const { notes, title, text, note } = this.state;
    if (title === '') return null;
    axios.put(`${URL}/${note.id}`, { title, text })
      .then(() => {
        this.setState({
          notes: notes.map(n => n.id === note.id ? {...n, title, text} : n),
          title: '',
          text: ''
        }, this.redirect);
      })
      .catch(err => console.error(err));
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
    axios.delete(`${URL}/${note.id}`)
      .then(() => {
        this.setState({
          notes: notes.filter(n => n.id !== note.id)
        }, this.redirect);
      })
      .catch(err => console.error(err));
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* Dropdown/sort methods */

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { id } = this.state.notes[oldIndex];
    const id2 = this.state.notes[newIndex].id;
    this.switch(id, id2);
  };

  switch = (id, id2) => {
    axios.put(`${URL}/${id}/${id2}`)
      .then(() => {
        axios.get(URL)
          .then(({ data }) => {
            this.setState({ notes: data });
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  sortByTime = (dir) => {
    const parse = (note) => {
      return note.created_at.split(' ');
    };
    const sub = (parsed) => {
      return parsed[1].replace(/[-:]/g, '');
    }

    let sortCb;
    if (dir === 'desc') {
      sortCb = (a, b) => {
        const pa = parse(a);
        const pb = parse(b);
        if (pa[0] === pb[0]) {
          return sub(pa) - sub(pb); 
        } else {
          return pa[0] - pb[0];
        }
      };
    }
    else { // asc
      sortCb = (a, b) => {
        const pa = parse(a);
        const pb = parse(b);
        if (pa[0] === pb[0]) {
          return sub(pb) - sub(pa); 
        } else {
          return pb[0] - pa[0];
        }
      };
    }

    this.toggleDropdown();
    this.setState({
      notes: this.state.notes.slice().sort(sortCb)
    });
  };

  sortAlphabetically = () => {
    const sortCb = (a, b) => {
      const aStr = /[A-Za-z]+/.exec(a.title.slice(0, 20)),
        bStr = /[A-Za-z]+/.exec(b.title.slice(0, 20));
      if (aStr && bStr) {
        for (let i = 0; i < aStr.length && i < bStr.length; i++) {
          if (aStr[i] !== bStr[i]) {
            return aStr[i].localeCompare(bStr[i]);
          }
        }
      } else if (aStr) {
        return -1;
      } else if (bStr) {
        return 1;
      } else {
        return a - b;
      }
    };

    this.toggleDropdown();
    this.setState({
      notes: this.state.notes.sort().sort(sortCb)
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  };

  /* Misc. methods */

  clone = () => {
    const { notes, note } = this.state;
    const { title, text } = note;
    if (title === '') return null;
    axios.post(URL, { title, text })
      .then(({ data }) => {
        this.setState({
          notes: [{
            id: data,
            title,
            text
          }, ...notes],
          title: '',
          text: ''
        });
      })
      .catch(err => console.error(err));
  };

  search = e => {
    let filteredNotes;
    if (e.target.value === '') filteredNotes = null;
    else {
      const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [ { name: 'title', weight: .7 }, { name: 'text', weight: .3 } ]
      };
      filteredNotes = new Fuse(this.state.notes, options).search(e.target.value);
    }
    this.setState({ filteredNotes });
  };

  redirect = () => window.location='/'; // back to notes page

  storeNote = note => { // for single note view
    this.setState({ note });
  };

  formatForCSV = () => {
    return this.state.notes.map(({ title, text }) => {
      return { title, text };
    });
  };

  /* Lifecycle methods */

  componentDidMount() {
    axios.get(URL)
      .then(({ data }) => {
        if (data.length > 0) {
          this.setState({
            notes: data
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const notes = (this.state.filteredNotes ? this.state.filteredNotes : this.state.notes);
    return (
      <div className="App">
        <Sidebar formatForCSV={this.formatForCSV} />
        <div className="main-content">
          <Route
            path="/create"
            render={() => (
              <NoteFormContainer 
                onChange={this.onChange} 
                onSubmit={this.addNote} 
                title={this.state.title} 
                text={this.state.text}
                update={this.updateCreateInput}
                formText="Save"
                formTitle="Create New Note:"
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="notes-container">
                <h2>Your Notes:</h2>
                <div className="notes-list-controls">
                  <input 
                    name="search" 
                    onChange={this.search} 
                    className="search-input" 
                    placeholder="Search..." 
                    autoComplete="off"
                  />
                  <Dropdown 
                    toggle={this.toggleDropdown} 
                    dropdown={this.state.dropdown} 
                    sortByLatest={() => this.sortByTime('asc')}
                    sortByOldest={() => this.sortByTime('desc')}
                    sortAlphabetically={this.sortAlphabetically}
                  />
                </div>
                <Notes 
                  notes={notes} 
                  storeNote={this.storeNote} 
                  onSortEnd={this.onSortEnd}
                />
              </div>
            )}
          />
          <Route
            path="/notes/:id"
            render={() => (
              <div className="single-note-card">
                <Link to="/notes/delete" onClick={this.toggleModal}>delete</Link>
                <Link to="/edit">edit</Link>
                <Link to="/" onClick={this.clone}>clone</Link>
                <Note note={this.state.note} view="single" />
              </div>
            )}
          />
          <Route
            path="/edit"
            render={() => (
              <NoteFormContainer 
                onChange={this.onChange} 
                onSubmit={this.editNote} 
                title={this.state.title} 
                text={this.state.text} 
                update={this.updateEditInput}
                formText="Update"
                formTitle="Edit Note:"
              />
            )}
          />
          <Route
            path="/notes/delete"
            render={() => (
              <Modal
                toggle={this.toggleModal}
                modal={this.state.modal}
                del={this.deleteNote}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
