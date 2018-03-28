import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/pages/SideBar';
import NotesList from './components/pages/NotesList';
import { getNotes } from './dummyData';
import SingleNote from './components/pages/SingleNote';
import NoteForm from './components/pages/NoteForm';
import DeleteNote from './components/pages/DeleteNote';


class App extends Component {
  constructor () {
    super()
    this.state = {
      notes: getNotes(),
    };
  }

  
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={SideBar} />
          <Route
            path='/noteslist'
            render={state => <NotesList notes={this.state.notes} exact />}
          />
          <Route
            render={routeProps => (
              <SingleNote
                {...routeProps}
                {...this.props}
                notes={this.state.notes}
              />
            )}
            path='/note/:id'
          />
          <Route path='/noteform' component={NoteForm} exact />
          <Route path='/delete/:id' component={DeleteNote} />
        </div>
      </Router>
    );
  }
}

export default App;









