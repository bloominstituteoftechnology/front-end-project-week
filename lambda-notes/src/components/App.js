import React from 'react';
import NotesPage from './NotesContainer/NotesPage';
import Register from './Register/Register';
import Login from './Login/Login';
import { Route } from 'react-router-dom';
import RequireNotAuth from './Authenticate/RequireNotAuth';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Route path='/register' component={RequireNotAuth(Register)} />
        <Route path='/login' component={RequireNotAuth(Login)} />
        <Route path='/notes' component={NotesPage} />

      </React.Fragment>
    );
  }
}

// Authenticate used to check if user is logged in
export default App;
