import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/pages/SideBar';
import ViewNotesList from './components/pages/ViewNotesList';


class App extends Component {
  state = {
    notes: getNotes(),
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Route path='/ViewNotesList' render={state => <ViewNotesList notes={this.state.notes} exact />} />
        </div>
      </Router>
    );
  }









}

export default App;
