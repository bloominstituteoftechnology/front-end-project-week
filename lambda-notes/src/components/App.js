import React from 'react';
import NotesPage from './NotesContainer/NotesPage';
import Authenticate from './Authenticate/Authenticate';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <NotesPage />

      </React.Fragment>
    );
  }
}

// Authenticate used to check if user is logged in
export default Authenticate(App);
