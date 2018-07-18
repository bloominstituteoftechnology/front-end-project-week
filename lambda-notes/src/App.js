import React, { Component } from 'react';
import Flex from './components/Flex'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import NoteCardsContainer from './components/NoteCardsContainer'
import NoteCard from './components/NoteCard'
import NoteView from './components/NoteView'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import { Route, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

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

    let id = 0

    if(notes.length !== 0) {
      id = notes[notes.length - 1].id + 1
    }
   
    this.setState({
      notes: notes.concat({ 
        ...note, 
        id
      })
    })

  }

  deleteNote = id => {

    const { notes } = this.state

    this.setState({
      notes: notes.filter(note => 
        String(note.id) !== id 
      )
    })

  }

  editNote = (id, updatedNote) => {
   
    const { notes } = this.state

    this.setState({
      notes: notes.map(note => {
        if(String(note.id) === id){
          return {...note, ...updatedNote}
        }
        return note
      })
    })
  
  }
  
  render() {

    const { notes } = this.state

    return (
      <ThemeProvider theme={theme} >
        <Flex>
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
          
            <Route exact path='/note/:id' render={props => 
              notes.filter(note => 
                String(note.id) === props.match.params.id
              ).map(note => 
                <NoteView
                  id={props.match.params.id}
                  title={note.title}
                  text={note.text}
                  deleteNote={this.deleteNote}
                  {...props}
                />
              )
            }/>

            <Route exact path='/note/:id/edit' render={props =>
              notes.filter(note =>
                String(note.id) === props.match.params.id
              ).map(note => 
                <EditNote 
                  id={props.match.params.id}
                  title={note.title}
                  text={note.text}
                  editNote={this.editNote}
                  {...props}
                />
              )
            }/> 
          
            <Route path='/new' render={props =>
              <NewNote {...props} addNote={this.addNote} />
            }/>
        
          </MainContainer>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default App;
