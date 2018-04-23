import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddNote from './Components/AddNote.js';
import VisibleNotesList from './Components/Viewer.js';
import FilterNote from './Components/FilterNote.js';
import EditNote from './Components/EditNote';
import Nav from './Components/Nav.js';


const App = () => (
  <div>
    <Router>
        <div className='container'>
        <Nav />
          <div className='content'>
          <Route path='/' exact component={VisibleNotesList} />
          <Route path='/add' component={AddNote} />
          <Route path='/viewnote/:id' component={FilterNote} />
          <Route path='/edit/:id' component={EditNote} />
          </div>
        </div>
    </Router>
  </div>
)

export default App;