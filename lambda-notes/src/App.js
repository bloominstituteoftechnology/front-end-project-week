import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import NoteCardsContainer from './components/NoteCardsContainer'
import NoteCard from './components/NoteCard'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import { Route, Link } from 'react-router-dom'

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
        
          <Route exact path='/note/:id' render={props => 
            notes.filter(note => 
              String(note.id) === props.match.params.id
            ).map(note => <div key={note.id}>
              <h2>{note.title}</h2>
              <hr />
              <p>{note.text}</p>
              <br /><br />
              <span onClick={() => {
                this.deleteNote(props.match.params.id)
                props.history.push('/')
              }}>
                 [delete] 
              </span>
              <Link to={`/note/${props.match.params.id}/edit`}>
                [edit]
              </Link>
            </div>)
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
        } /> 

        
          <Route path='/new' render={props =>
            <NewNote {...props} addNote={this.addNote} />
          }/>
        </MainContainer>
      </div>
    );
  }
}

export default App;
