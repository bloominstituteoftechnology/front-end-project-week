import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Link, NavLink
} from 'react-router-dom';
import { Button, NavItem } from 'reactstrap';

import Notes from './Notes';
import Note from './Note';
import CreateNote from './CreateNote';
import UpdateNote  from './UpdateNote';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='home'>
              <div className='home-nav'>
                <h1 className='home-nav-banner'> Lambda Notes </h1>
                <Button color="info" className='home-nav-link'><NavLink className='link' to={'/'}>View Your Notes</NavLink></Button>
                <Button color="info" className='home-nav-link'><NavLink className='link' to={'/create'}>+ Create New Note</NavLink></Button>
              </div>
              <div className='content'>
                <Route exact path='/' component={ Notes }/>
                <Route path='/notes/:id' component={ Note } />
                <Route path='/create' component={ CreateNote } />
                <Route path='/notes/update/:id' component={ UpdateNote } />
              </div> 
        </div>
      </Router>
    );
  }
}

export default App;
