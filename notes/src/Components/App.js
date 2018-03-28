import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddNote from '../containers/AddNote';
import VisibleNotesList from '../containers/VisibleNotesList';
import Nav from './Nav';

const App = () => (
  <div>
    <Router>
      <Fragment>
        <div className='container'>
        <Nav />
          <div className='content'>
          <Route path='/' exact component={VisibleNotesList} />
          <Route path='/add' component={AddNote} />
          </div>
        </div>
    </Fragment>
    </Router>
  </div>
)

export default App;