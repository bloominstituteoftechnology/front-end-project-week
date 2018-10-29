import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NotesList from './components/ListNotes';
import SingleNote from './components/DisplayedNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      text: '',
      udpatedTitle: '',
      updatedText: '',
      deleting: false
    }
  }

  componentDidMount() {
    const endpoint = 'https://fe-notes.herokuapp.com/note/get/all';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({notes: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  getItemById = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({ activeNote: response.data }))
      .catch(error => console.log('Error: ', error));
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const newNote = {
      title: this.state.title,
      text: this.state.textBody,
    };
    this.setState({ title: '', textBody: ''});
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
        this.setState({
          title: '',
          textBody: '',
          notes: response.data
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

 

  toggleDeletingOn = () => {
    this.setState({ deleting: true });
  };
  toggleDeletingOff = e => {
    e.preventDefault();
    this.setState({ deleting: false });
  };

  deleteItem = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };


 editingNote = (title, textBody) => {
    this.setState({ updatedTitle: title, updatedText: textBody });
  };

  editedNote = id => {
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
      title: this.state.updatedTitle,
      textBody: this.state.updatedText
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <NotesList 
        {...props}
        notes={this.state.notes} />} />
        <Route exact path='/note/:id' render={props => <SingleNote 
        {...props}
        notes={this.state.notes}
        deleting={this.state.deleting}
        toggleDeletingOn={this.toggleDeletingOn}
        toggleDeletingOff={this.toggleDeletingOff}
        deleteNote={this.deleteItem}
        editingNote={this.editingNote}
        />} />
      </div>
    );
  }
}

export default App;
