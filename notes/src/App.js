import React from 'react';
import NavBar from './components/NavBar';
import NotesList from './containers/NotesList';
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
