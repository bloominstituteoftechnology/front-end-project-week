import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import NoteCardsContainer from './components/NoteCardsContainer'
import NoteCard from './components/NoteCard'

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <Sidebar />
        <NoteCardsContainer>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </NoteCardsContainer>
      </div>
    );
  }
}

export default App;
