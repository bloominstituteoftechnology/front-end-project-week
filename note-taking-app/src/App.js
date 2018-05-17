import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import NoteContainer from './components/NoteContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
