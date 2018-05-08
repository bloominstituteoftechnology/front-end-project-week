import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Link, NavLink
} from 'react-router-dom';
import { Button, NavItem } from 'reactstrap';

import Home from './Home';
import Note from './Note';
import CreateNote from './CreateNote';
import UpdateNote  from './UpdateNote';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <div>
              <h1> Lambda Notes </h1>
              <Button color="info"><NavLink className='link' to={'/'}>View Your Notes</NavLink></Button>
              <Button color="info"><NavLink className='link' to={'/create'}>+ Create New Note</NavLink></Button>
            </div>
          <Route exact path='/' component={ Home }/>
          <Route path='/notes/:id' component={ Note } />
          <Route path='/create' component={ CreateNote } />
          <Route path='/notes/update/:id' component={ UpdateNote } />
        </div>
      </Router>
    );
  }
}

export default App;
