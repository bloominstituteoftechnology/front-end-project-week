import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotesPage from './NotesContainer/NotesPage';
import Register from './Register/Register';
import Login from './Login/Login';
import Redirect from './Redirect/Redirect';
import RequireNotAuth from './Authenticate/RequireNotAuth';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>

        <Switch>

          <Route path='/register' component={RequireNotAuth(Register)} />
          <Route path='/login' component={RequireNotAuth(Login)} />
          <Route path='/notes' component={NotesPage} />

          <Route component={Redirect} />

        </Switch>

      </React.Fragment>
    );
  }
}

// Authenticate used to check if user is logged in
export default App;
