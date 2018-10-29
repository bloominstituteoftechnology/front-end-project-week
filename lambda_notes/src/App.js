import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

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
      .get(`https://fe-notes.herokuapp.com/note/get/id/${id}`)
      .then(response => this.setState({ activeNote: response.data }))
      .catch(error => console.log('Error: ', error));
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (e) => {
    const newNote = {
      tile: this.state.title,
      text: this.state.text,
    };
    this.setState({ title: '', text: ''});
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
        this.setState({
          title: '',
          text: '',
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
      .delete(`https://fe-notes.herokuapp.com/note/get/id/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };


  updateItem = () => {
    const newNotes = {
      tile: this.state.title,
      text: this.state.text,
    };
    this.setState({ title: '', text: '' });
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/id/${this.state.editingId}`,
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
