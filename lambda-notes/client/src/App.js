import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import axios from 'axios';
import NoteList from './components/Notes/NoteList'

class App extends Component {

  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        <h1>Lambda Notes</h1>
          <div className='App__left-buttons'>
            <span>View Your Notes</span>
          </div>
          <div className='App__left-buttons'>
            <span>+ Create New Note</span>
          </div>
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        <NoteList />
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
