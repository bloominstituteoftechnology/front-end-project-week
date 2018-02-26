import React from 'react';

// Components
import Sidebar from './comps/Sidebar';
import NoteList from './comps/NoteList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App__container">
        <div className="sidebar__container">
          <Sidebar />
        </div>
        <div className="notesList__container">
          <NoteList notes={['note1', 'note2', 'note3', 'note4']} />
        </div>
      </div>
    );
  }
}
