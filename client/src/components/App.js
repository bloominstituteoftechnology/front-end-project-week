import React, { Component } from 'react';
import NavBar from './NavBar/index';
import Notes from './Notes/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar />
        <Notes />

      </div>
    );
  }
}

export default App;
