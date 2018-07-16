import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import NoteCardsContainer from './components/NoteCardsContainer'
import NoteCard from './components/NoteCard'
import NewNote from './components/NewNote'
import { Route } from 'react-router-dom'

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
        <MainContainer>
          <Route exact path="/" render={() =>
            <NoteCardsContainer>
              {notes.map((note, index) =>
                <NoteCard 
                  key={note.id} 
                  title={note.title}
                  text={note.text}
                />
              )}
            </NoteCardsContainer>
          }/>
          <Route path="/new" component={NewNote} />
        </MainContainer>
      </div>
    );
  }
}

export default App;
