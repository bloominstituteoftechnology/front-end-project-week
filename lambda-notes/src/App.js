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

class App extends Component {
 
  state = { 
    notes: [
      {
        _id: 0,
        title: 'React',
        textBody: 'React is a UI Library developed by Facebook'
      },
      {
        _id: 1,
        title: 'Redux',
        textBody: 'Redux makes managing complex state a breeze'
      },
      {
        _id: 2,
        title: 'Complacency',
        textBody: 'We have to keep pushing ourselves'
      }
    ],
    filteredNotes: []
  }

  async componentDidMount() {

    try {
      
      const {
        data: notes 
      } = await get('https://killer-notes.herokuapp.com/note/get/all')

      this.setState({ notes, filteredNotes: notes })

    } catch(e) {
      
      console.log('error:', e)

    }

  }

  addNote = async note => {
    
    const { notes } = this.state

    try {

      const {
        data
      } = await post('https://killer-notes.herokuapp.com/note/create', note)

      const newNotes = [].concat({
        ...note,
        _id: data.success
      }, notes)


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

      const { data } = await _delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)

      const filteredNotes = notes.filter(note => 
        String(note._id) !== id 
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
      const { data } = await put(`https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote) 

      const newNotes = notes.map(note => {
        if(String(note._id) === id){
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
        || note.textBody.toLowerCase().includes(filter)
      )
    })
  }
  
  render() {

    const { notes, filteredNotes } = this.state

    return (
      <ThemeProvider theme={theme} >
        <Flex>
          <Sidebar filterNotes={this.filterNotes} />
          <MainContainer>
            <Route exact path='/' render={() =>
              <NoteCardsContainer>
                {filteredNotes.map(note =>
                  <NoteCard 
                    key={note._id} 
                    id={note._id}
                    title={note.title}
                    text={note.textBody}
                  />
                )}
              </NoteCardsContainer>
            }/>
          
            <Route exact path='/note/:id' render={props => 
              notes.filter(note => 
                String(note._id) === props.match.params.id
              ).map(note => 
                <NoteView
                  id={props.match.params.id}
                  title={note.title}
                  text={note.textBody}
                  deleteNote={this.deleteNote}
                  {...props}
                />
              )
            }/>

            <Route exact path='/note/:id/edit' render={props =>
              notes.filter(note =>
                String(note._id) === props.match.params.id
              ).map(note => 
                <EditNote 
                  id={props.match.params.id}
                  title={note.title}
                  text={note.textBody}
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
