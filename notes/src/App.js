import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Note Title',
          body: 'Morbi pettenesque o teotn eo nto ntoeo o teotn eo nto ntoeo o teotn eo nto ntoeo o teotn eo'
        },
        {
          title: 'Note Title',
          body: 'jgoi gjoaj ojgoa'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot giouo oiutiot giouo oiutiot giouo oiutiot giouo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        }
        ,{
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note Title',
          body: 'uo oiutiot gio'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={props => <NotesList {...props}
          notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
