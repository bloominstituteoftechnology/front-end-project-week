import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NotesList from './components/pages/NotesList';
import { getNotes } from './dummyData';
import SingleNote from './components/pages/SingleNote';
import CreateANote from './components/pages/CreateANote';
import DeleteNote from './components/pages/DeleteNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: getNotes(),
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="navBar">
            <h1>Lambda Notes</h1>
            <NavLink to="/">
              <button type="submit" className="navButton1">
                View Your Notes
              </button>
            </NavLink>
            <NavLink to="/CreateANote">
              <button type="submit" className="navButton2">
                +Create New Note
              </button>
            </NavLink>
          </div>
          <div className="pathContainer">
            <Route
              path="/"
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
              path="/note/:id"
            />
            <Route path="/createanote" component={CreateANote} />
            <Route path="/delete/:id" component={DeleteNote} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
