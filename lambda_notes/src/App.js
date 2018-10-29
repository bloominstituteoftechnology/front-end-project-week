import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NotesList from './components/ListNotes';
import Note from './components/Notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      text: '',
      activeNote: null,
      editingId: null,
      isEditing: false
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

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ textBody: event.target.value });
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

  deleteItem = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };


  updateItem = () => {
    const newNotes = {
      title: this.state.title,
      text: this.state.textBody,
    };
    this.setState({ title: '', textBody: '' });
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.state.editingId}`,
        newNotes
      )
      .then(response => {
        this.setState({
          notes: response.data,
          editingId: null,
          isEditing: false,
        });
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      note,
      isEditing: true,
      editingId: note._id
    });
  };


  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <NotesList 
        {...props}
        notes={this.state.notes}
        getItemById={this.getItemById} />} />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              title={this.state.title}
              text={this.state.textBody}
              deleteItem={this.deleteItem}
              handleTitleChange={this.handleTitleChange}
              handleTextChange={this.handleTextChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
