// React and Router
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Route path="/" component={Nav} />
        <div className="left-container">
          <Route
            exact
            path="/login"
            render={props => <Login {...props} onLogin={this.loginSuccess} />}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <Register {...props} onLogin={this.loginSuccess} />
            )}
          />
          <Route
            exact
            path="/logout"
            render={props => (
              <Logout {...props} onLogout={this.logoutSuccess} />
            )}
          />
          <Route exact path="/create-new-note" component={CreateNewNote} />
          <Route exact path="/notes" component={ListView} />
          <Route exact path="/" component={Home} />
          <Route exact path="/notes/:id" component={NoteView} />
          <Route exact path="/notes/edit/:id" component={EditNote} />
        </div>
      </div>
    );
  }
  loginSuccess = data => {
    localStorage.setItem('authtoken', data.token);
    console.log('login response', data);
  };

  logoutSuccess = () => {
    localStorage.clear('authtoken');
  };
} // end of App

export default App;
