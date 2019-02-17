import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';
import SingleNote from './components/SingleNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
    }
  }

  componentDidMount() {
    let index = -1;

    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({
          note: response.data,
          index: index++,
        })
      })
  }

  addNote = data => {
    axios.post('https://fe-notes.herokuapp.com/note/create', data)
    .then(response => {
      this.setState({
        title: response.title,
        textBody: response.textBody,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <section className = 'appBody'>
          <Menu />

          <Route exact path = '/' render = {props => <NoteList {...props} notes = {this.state.note} />} />

          <Route path = '/new-note' render = {props => <NewNote {...props} notes = {this.state.note} addNote = {this.addNote}/>} />

          <Route path = '/note/:noteID' render = {props => <SingleNote {...props} notes = {this.state.note}/>} />
          </section>
      </div>
    );
  }
}

export default App;
