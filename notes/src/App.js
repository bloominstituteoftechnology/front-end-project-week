import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <NotesList />
      </div>
    );
  }
}

export default App;
