import React from 'react';
import NavBar from './components/NavBar';
import NotesList from './containers/NotesList';
import './App.css';

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <NotesList />
        </div> 
      </div>
    );
  }
}

export default App;
 