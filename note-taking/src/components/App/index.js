import React, { Component } from 'react';
import './App.css';
import  Notes  from '../Notes';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <NotesSideBar /> */}
      <Notes />

      </div>
    );
  }
}

export default App;
