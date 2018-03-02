import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './NavBar';
import ViewNotes from './ViewNotes';
import CreateNote from './CreateNote'
import ViewSingleNote from './ViewSingleNote'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route path="/" component={ViewNotes} exact />
          <Route path="/viewnotes" component={ViewNotes} exact />
          <Route path="/createnote" component={CreateNote} exact />
          <Route path="/viewsinglenote/:id"
            render={props => {
              return <ViewSingleNote id={props.match.params.id} />}
            }
          />
        </div>
      </Router>
    );
  }

}

export default App;
