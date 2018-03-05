import React from 'react';
import NotesList from './NotesList';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NotesList />
      </div>
    );
  }
}

export default App;
