import React from 'react';
import './styles/App.css';

// Components
import Sidebar from './comps/Sidebar';
import NoteList from './comps/NoteList';

class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <Sidebar />
        <div className="notesList__container">
          <h1 className="notesList__header">Your Notes:</h1>
          <div className="noteList">
            <NoteList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
