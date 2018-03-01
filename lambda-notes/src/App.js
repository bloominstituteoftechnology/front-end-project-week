import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ViewNotes from './components/ViewNotes';
import DisplayOne from './components/DisplayOne';
import CreateNote from './components/CreateNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ViewNotes} />
          <Route path="/create" component={CreateNote} />
          <Route path="/notes/:id" component={DisplayOne} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;