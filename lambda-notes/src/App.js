import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import NoteCardsContainer from './components/NoteCardsContainer'
import NoteCard from './components/NoteCard'

class App extends Component {
 
  state = { 
    notes: [
      {
        id: 0,
        title: 'React',
        text: 'React is a UI Library developed by Facebook'
      },
      {
        id: 1,
        title: 'Redux',
        text: 'Redux makes managing complex state a breeze'
      },
      {
        id: 2,
        title: 'Complacency',
        text: 'We have to keep pushing ourselves'
      }
    ] 
  }
  
  render() {

    const { notes } = this.state

    return (
      <div style={{display: 'flex'}}>
        <Sidebar />
        <NoteCardsContainer>
          {notes.map((note, index) =>
            <NoteCard 
              key={note.id} 
              title={note.title}
              text={note.text}
            />
          )}
        </NoteCardsContainer>
      </div>
    );
  }
}

export default App;
