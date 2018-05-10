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
  notes = () => {
    return <NavLink className='link' to={'/'}>View Your Notes</NavLink>
  }
  render() {
    return (
      <Router>
        <div className='home'>
              <div className='home-nav'>
                <h1 className='home-nav-banner'> Lambda Notes </h1>
                <NavLink to='/'><Button color="info" className='home-nav-link'>View Your Notes</Button></NavLink>
                <NavLink to='/create'><Button color="info" className='home-nav-link'>+ Create New Note</Button></NavLink>
              </div>
              <div className='content'>
                <Route exact path='/' component={ Notes }/>
                <Route path='/notes/:id' component={ Note } />
                <Route path='/create' component={ CreateNote } />
                <Route exact path='/update/:id' component={ UpdateNote } />
              </div> 
        </div>
      </Router>
    );
  }
}

export default App;
