import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import Note from './components/Note';
import NewNote from './components/NewNote';

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    };
  }

  // componentDidMount() {
  //   axios
  //   .get('https://killer-notes.herokuapp.com/note/get/all')
  //   .then(res => {
  //     this.setState(() => ({ notes: res.data }));
  //   })
  //   .catch(err => {
  //     console.error('Server Error', err);
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='note-container'>
          <Route exact path='/' render={props => (
            <NoteList {...props} />
          )} />
          {/* <Route path='/notes/:id' render={props => {
            <Note {...props} /> 
          }} /> */}
          {/* <Route path='/notes/:id' component={Note} /> */}
          <Route path='/new' component={NewNote} />
        </div>
      </div>
    );
  }
}

export default App;
