import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={Notes}/>
        <Route exact path="/notes" component={Notes}/>
        <Route path="/notes/:id" render={ (props) => <Note  {...props} note={this.props.note} />} />
        <Route path="/create" component={CreateNote}/>
        <Route path="/note/edit/:id" component={CreateNote}/>
      </div>
    );
  }
}

export default App;