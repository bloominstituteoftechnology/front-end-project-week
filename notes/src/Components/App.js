import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddNote from '../containers/AddNote';
import VisibleNotesList from '../containers/VisibleNotesList';
import FilterNote from '../containers/FilterNote';
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
          <Route path='/viewnote/:id' component={FilterNote} />
          </div>
        </div>
    </Fragment>
    </Router>
  </div>
)

export default App;