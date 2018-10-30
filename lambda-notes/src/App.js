import React from 'react';
import './App.css';

import Authenticate from './components/Authenticate';
import NotesPage from './NotesPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    }


  render() {
    return (
        <NotesPage />
    )
  }
};

export default Authenticate(App);
