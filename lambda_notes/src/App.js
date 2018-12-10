import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NotesList from './components/ListNotes';
import SingleNote from './components/DisplayedNote';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import Authenticate from './authentication/Authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      content: '',
      updatedTitle: '',
      updatedText: '',
      deleting: false,
      filteredNotes: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    const endpoint = 'http://localhost:9000/api/notes';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({notes: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  componentDidUpdate() {
    const endpoint = 'http://localhost:9000/api/notes';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({notes: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    axios
      .post('http://localhost:9000/api/notes', {
        title: this.state.title,
        content: this.state.content
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error: ', error);
      });
      this.setState({
          title: '',
          content: ''
        });
  };

  toggleDeletingOn = () => {
    this.setState({ deleting: true });
  };
  toggleDeletingOff = () => {
    this.setState({ deleting: false });
  };

  deleteItem = id => {
    axios
      .delete(`http://localhost:9000/api/notes/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
      this.setState();
  };


 editingNote = (title, content) => {
    this.setState({ updatedTitle: title, updatedText: content });
  };

  editedNote = id => {
    axios
      .put(`http://localhost:9000/api/notes/${id}`, {
        title: this.state.updatedTitle,
        content: this.state.updatedText
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    this.setState();
  };

  searchNoteHandler = () => {
    const notes = this.state.notes.filter(note => {
      if (note.title.includes(this.state.searchTerm)) {
        return note;
      }
    })
    this.setState({filteredNotes: notes});
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' render={props => <NotesList 
        {...props}
        notes={this.state.filteredNotes.length > 0 
          ? this.state.filteredNotes
          : this.state.notes} 
        searchNote={this.searchNoteHandler}
        searchTerm={this.state.searchTerm}
        handleInput={this.handleInput}
        />} />
        <Route exact path='/note/:id' render={props => <SingleNote 
        {...props}
        notes={this.state.notes}
        deleting={this.state.deleting}
        toggleDeletingOn={this.toggleDeletingOn}
        toggleDeletingOff={this.toggleDeletingOff}
        deleteNote={this.deleteItem}
        editingNote={this.editingNote}
        />} />
        <Route exact path='/createnote' render={props => <CreateNote 
        {...props}
        title={this.state.title}
        textBody={this.state.textBody}
        handleInput={this.handleInput}
        submit={this.handleSubmit}
        />} />
        <Route exact path='/note/:id/edit' render={props => <EditNote 
        {...props}
        notes={this.state.notes}
        updatedTitle={this.state.updatedTitle}
        updatedText={this.state.updatedText}
        handleInput={this.handleInput}
        editedNote={this.editedNote}
        />} />
      </div>
    );
  }
}

export default Authenticate(App);
