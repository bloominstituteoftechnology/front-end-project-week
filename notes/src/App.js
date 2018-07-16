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
          title: 'Note 1',
          body: 'nto ntoeo o teotn eo nto ntoeo o teotn eo nto ntoeo o teotn eo nto ntoeo o teotn eo'
        },
        {
          title: 'Note 2',
          body: 'jgoi gjoaj ojgoa'
        },
        {
          title: 'Note 3',
          body: 'uo oiutiot giouo oiutiot giouo oiutiot giouo oiutiot giouo oiutiot gio'
        },
        {
          title: 'Note 4',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note 5',
          body: 'uo oiutiot gio'
        }
        ,{
          title: 'Note 6',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note 7',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note 7',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note 7',
          body: 'uo oiutiot gio'
        },
        {
          title: 'Note 7',
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
