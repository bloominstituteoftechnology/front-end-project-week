import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/pages/SideBar';
import NotesList from './components/pages/NotesList';
import { getNotes } from './dummyData';


class App extends Component {
  state = {
    notes: getNotes(),
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Route path='/NotesList' render={state => <NotesList notes={this.state.notes} exact />} />
        </div>
      </Router>
    );
  }









}

export default App;
