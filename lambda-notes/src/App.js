import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Menu from './Menu';
import Notes from './Notes';
import AddNote from './AddNote';
import Note from './Note';
import EditNote from './EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      id: 4
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then((res) => {
        console.log(res.data);
        this.setState({
          notes: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.text,
    };
    axios.post('https://killer-notes.herokuapp.com/note/create',newNote)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    this.setState({
      title: '',
      textBody: '',
    });
    this.getNotes();
  }

  editHandler = (event) => {
    event.preventDefault();
    const id = parseInt(event.target.id,10);
    let notes = this.state.notes.slice();
    const editedNote = {
      title: this.state.title,
      textBody: this.state.text,
      id: id
    };
    notes[id] = editedNote;
    this.setState({
      notes: notes,
      title: '',
      textBody: ''
    });
  }

  deleteHandler = (e, id) => {
    e.preventDefault();
    id = parseInt(id,10);
    const index = this.state.notes.findIndex((note) => {
      return note.id === id;
    })
    let notes = this.state.notes.slice();
    notes.splice(index,1);
    this.setState({
      notes: notes
    });
  }

  render() {
    return (
      <div className="App">
        <div className='body'>
          <Route path='/' component={ Menu } />
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props => <AddNote {...props} state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />} />
          <Route path='/view/:id' render={props => <Note {...props} notes={this.state.notes} deleteHandler={this.deleteHandler} />} />
          <Route path='/edit/:id' render={props => <EditNote {...props} state={this.state} changeHandler={this.changeHandler} editHandler={this.editHandler} />} />
        </div>
      </div>
    );
  }
}

export default App;
