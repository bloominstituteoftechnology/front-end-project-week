import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import '../styles/App.css';
import NotesForm from './NotesForm';
import Notes from './Notes'
import SideBar from './sidebar';
import SingleNoteView from './SIngleNoteView';



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
          <Route path="/note/:id" component={SingleNoteView} />
        </div>

      </div>
    );
  }
}

export default App;