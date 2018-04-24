import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import NoteList from './components/Notes/NoteList';
import CreateNote from './components/Notes/CreateNote';
//import ViewNote from './components/Notes/ViewNote';
import NoteNav from './components/Notes/NoteNav';

class App extends Component {

  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        <h1>Lambda Notes</h1>
          <Link to='/' ><div className='App__left-buttons'>
            <span>View Your Notes</span>
          </div></Link>
          <Link to='/NewNote'>
          <div className='App__left-buttons'>
            <span>+ Create New Note</span>
          </div></Link>
          
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        {/* <NoteList /> */}
        <NoteNav />
        <Route exact path='/NewNote' component={CreateNote} />
        <Route exact path='/' component={NoteList} />
        {/* <CreateNote /> */}
        {/* <ViewNote 
        name='somthing' 
        body='some body holder note text for simple testing'
        /> */}
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
