import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../styles/App.css';
import NotesForm from './NotesForm';
import Notes from './Notes'
import SideBar from './sidebar';
import SingleNoteView from './SIngleNoteView';
import Edit from './Edit';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='left-side'>
          <SideBar />
        </div>
        <div className='right-side'>
          <Route exact path='/' component={Notes} />
          <Route exact path='/create-note' component={NotesForm} />
          <Route path='/notes/:id' component={SingleNoteView} />
          <Route path='/updateNote/:id' render={props => <Edit {...props} />} />
        </div>
      </div>
    );
  }
}

export default App;