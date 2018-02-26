import React from 'react';

// Components
import Sidebar from './comps/Sidebar';
import NoteList from './comps/NoteList';

class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <div className="sidebar__container">
          <Sidebar />
        </div>
        <div className="notesList__container">
          <NoteList />
        </div>
      </div>
    );
  }
}

export default App;