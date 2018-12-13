// Dependencies
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import fuzzyFilterFactory from 'react-fuzzy-filter';
// Components
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import LoginView from './views/LoginView';
import NoteView from './views/NoteView';
import NotesView from './views/NotesView';
import RegisterView from './views/RegisterView';
import Sidebar from './components/Sidebar';
// Styles
import './styles/App.css';

const { InputFilter, FilterResults } = fuzzyFilterFactory();

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('auth_token');
    if (!token && this.props.location.pathname !== '/register') {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="App">
        {/* LOGIN */}
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />

        {/* SIDEBAR DOESNT DISPLAY ON LOGIN */}
        {this.props.location.pathname !== '/login' &&
          (this.props.location.pathname !== '/register' && (
            <Route
              component={routerProps => (
                <Sidebar {...routerProps} InputFilter={InputFilter} />
              )}
            />
          ))}
        {/* Routes */}
        <Route
          exact
          path="/"
          component={routerProps => (
            <NotesView {...routerProps} FilterResults={FilterResults} />
          )}
        />
        <Route path="/create-note" component={CreateNoteView} />
        <Route path="/note/:id/edit" component={EditNoteView} />
        <Route exact path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default withRouter(App);
