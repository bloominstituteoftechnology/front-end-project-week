import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
import { Note, CreateNote, DisplayNotes, EditNote, NavButtons, ViewNote } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        
        </header>
        <p className="App-intro">
        
        </p>
        {/*<Link to="/">
        <button type="button">
        Display Notes
        </button>
        </Link>
        <Link to="/createNote">
        <button type="button">
        Create Note
        </button>
        </Link>*/}
        <Route path="/createNote" component={CreateNote}></Route>
        <Route exact path="/" component={DisplayNotes}></Route>
        <Route path="/viewNote" component={ViewNote}></Route>

      </div>
    );
  }
}

export default App;
