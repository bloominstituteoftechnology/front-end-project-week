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
    console.log(this.state.textBody);
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
    const id = event.target.id;
    let title = '';
    let text = '';
    
    const editedNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    const url = "http://killer-notes.herokuapp.com/note/edit/" + id;
    axios.put(url, editedNote)
      .then((res) => {
        console.log(res);
        this.getNotes();
      })
      .catch((err) => {
        console.log(err);
      })
    this.setState({
      title: '',
      textBody: ''
    });
  }

  deleteHandler = (e, id) => {
    e.preventDefault();
    const url = "http://killer-notes.herokuapp.com/note/delete/" + id;
    axios.delete(url)
      .then((res) => {
        console.log(res);
        this.getNotes();
      })
      .catch((err) => {
        console.log(err);
      })
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
