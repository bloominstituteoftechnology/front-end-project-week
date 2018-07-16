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

  addNote = note => {
    
    const { notes } = this.state
   
    this.setState({
      notes: notes.concat({ 
        ...note, 
        id: notes[notes.length - 1].id + 1 || 0
      })
    })

  }
  
  render() {

    const { notes } = this.state

    return (
      <div style={{display: 'flex'}}>
        <Sidebar />
        <MainContainer>
          <Route exact path='/' render={() =>
            <NoteCardsContainer>
              {notes.map((note, index) =>
                <NoteCard 
                  key={note.id} 
                  id={note.id}
                  title={note.title}
                  text={note.text}
                />
              )}
            </NoteCardsContainer>
          }/>
        
          <Route path='/note/:id' render={props => 
            notes.filter(note => 
              String(note.id) === props.match.params.id
            ).map(note => <div key={note.id}>
              <h2>{note.title}</h2>
              <hr />
              <p>{note.text}</p>
            </div>
            )
          }/>
        
          <Route path='/new' render={props =>
            <NewNote {...props} addNote={this.addNote} />
          }/>
        </MainContainer>
      </div>
    );
  }
}

export default App;
