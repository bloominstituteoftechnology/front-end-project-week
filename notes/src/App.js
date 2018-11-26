import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import Note from './components/Note';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      updatedTitle: '',
      updatedText: '',
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        this.setState({ notes: res.data })
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }

  // componentDidUpdate() {
  //   axios
  //     .get('https://fe-notes.herokuapp.com/note/get/all')
  //     .then(res => {
  //       this.setState({ notes: res.data })
  //     })
  //     .catch(err => {
  //       console.log('Error: ', err)
  //     })
  // }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error: ', error);
      });
      this.setState({
          title: '',
          textBody: ''
        });
  };

  deleteItem = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
      this.setState();
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
    this.setState();
  };


   render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <NotesList 
        {...props}
        notes={this.state.notes} 
        handleInput={this.handleInput}
        />} />
      </div>
    );
  }
}

export default App;
