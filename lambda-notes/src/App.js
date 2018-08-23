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
import {
  get,
  post,
  put,
  delete as _delete
} from 'axios'
import ObjectsToCsv from 'objects-to-csv'

class App extends Component {
 
  state = { 
    notes: [],
    filteredNotes: []
  }

  async componentDidMount() {

    try {
      
      const {
        data: notes 
      } = await get('https://allenhai-lambdanotes-back.now.sh/notes')

      this.setState({ notes, filteredNotes: notes })

    } catch(e) {
      
      console.log('error:', e)

    }

  }

  addNote = async note => {
    
    const { notes } = this.state

    try {

      const {
        data: newNote
      } = await post('https://allenhai-lambdanotes-back.now.sh/notes', note)

      const newNotes = [...notes, newNote]


      this.setState({
        // adds new notes to front of list
        notes: newNotes,
        filteredNotes: newNotes
      })

    } catch(e) {

      console.log('error:', e)

    }

  }

  deleteNote = async id => {

    const { notes } = this.state

    try {

      const { data } = await _delete(`https://allenhai-lambdanotes-back.now.sh/notes/${id}`)

      const filteredNotes = notes.filter(note => 
        String(note.id) !== id 
      )

      this.setState({
        notes: filteredNotes,
        filteredNotes
      })


    } catch(e){

      console.log('error:', e)

    }

  }

  editNote = async (id, updatedNote) => {
   
    const { notes } = this.state

    try {
      const { data } = await put(`https://allenhai-lambdanotes-back.now.sh/notes/${id}`, updatedNote) 

      const newNotes = notes.map(note => {
        if(String(note.id) === String(id)){
          return {...note, ...updatedNote}
        }
        return note
      })

      this.setState({
        notes: newNotes,
        filteredNotes: newNotes
      })

    } catch(e) {

      console.log('error:', e)
      
    }
    
  }

  filterNotes = e => {

    const { value: filter } = e.target

    const { notes } = this.state
   
    this.setState({
      filteredNotes: notes.filter(note => 
        note.title.toLowerCase().includes(filter) 
        || note.content.toLowerCase().includes(filter)
      )
    })
  }

  notesToCsv = async () => {
    
    const { notes } = this.state

    try {

      // https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
      
      
      let csvString = await new ObjectsToCsv(notes).toString()
      csvString = `data:text/csv;charset=utf-8,${csvString}`

      const encodedUri = encodeURI(csvString)
      
      window.open(encodedUri)

    } catch(e) {

        console.log('error:', e)

    }
  }
  
  render() {

    const { notes, filteredNotes } = this.state

    return (
      <ThemeProvider theme={theme} >
        <Flex>
          <Sidebar 
            filterNotes={this.filterNotes}
            notesToCsv={this.notesToCsv}
          />
          <MainContainer>
            <Route exact path='/' render={() =>
              <NoteCardsContainer notes={filteredNotes} />
            }/>
          
            <Route exact path='/note/:id' render={props => 
              notes.filter(note => 
                String(note.id) === props.match.params.id
              ).map(note => 
                <NoteView
                  id={props.match.params.id}
                  title={note.title}
                  content={note.content}
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
                  content={note.content}
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
