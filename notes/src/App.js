import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Notes from './components/Notes';
import Note from './components/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{display: 'inline'}}>Lambda Notes</h1>
        <Route path="/" component={NavBar} />
        {/*create Routes here*/}
        <Route path="/notes" component={Notes} />
        <Route path="/note/:id" component={Note} />
      </div>
    );
  }
}

export default App;
