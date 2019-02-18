import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route, withRouter } from 'react-router-dom';
import Note from './components/Note';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import EditForm from './components/EditForm';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: null,
      modal: false
    }
  }
  componentDidMount() {
      
    this.fetchNotes();
    
  }
 
  fetchNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        
          this.setState({
              notes: response.data
          })

      })
      .catch(err => {
        console.log(err);
      })
  }

  addNote = note => {

    const newNote = {
      tags: note.tags,
      title: note.title,
      textBody: note.textBody
    }

    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
          newNote._id = response.data.success;
          
          this.setState({
              notes: [...this.state.notes, newNote],
          })
          this.props.history.push(`/note/${newNote._id}`);
          
      })
      .catch(err =>{
          console.log(err);
      })

  }

  editNote = (id, note) => {

    let updatedNote = {
      tags: note.tags,
      id: note._id,
      title: note.title,
      textBody: note.textBody,
    }

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
      .then(response => {
       
          let noteIndex = this.state.notes.findIndex(note => note._id === response.data._id)
          let firstHalf = this.state.notes.slice(0, noteIndex);
          let secondHalf = this.state.notes.slice(noteIndex + 1, this.state.notes.length - 1);
          let updatedNotes = firstHalf.concat([response.data]).concat(secondHalf);

          this.setState({
            notes: updatedNotes,
          })

          this.props.history.push(`/note/${id}`);
        
      })
      .catch(err => {
        console.log(err);
      })
  }

  viewNote = id => {
      axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => {
              
              this.setState({ 
                  note: response.data
              });
          })
          .catch(err => {
              console.log(err);
          })
          
  }

  deleteNote = id => {
      axios
          .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
          .then(response => {
              const newNotes = this.state.notes.filter(note => note._id !== id);
              this.setState({notes: newNotes});

          })
          .catch(err => {
              console.log(err);
          })
          this.props.history.push(`/`);
  }

  render() {
    return (
      <div className="App">
        
        {this.state.modal === true ? 
          <div className="container">
            {/* Modal */}
          </div>
          :
          <div className="container">
            <Route path="/"
              render={props =>
                <Sidebar {...props}/>
              }
            />
            <Route exact path="/" 
              render={props => 
               <NotesList {...props} viewNote={this.viewNote} editNote={this.editNote} notes={this.state.notes} />
              }
            />
            <Route path="/notes/create" 
              render={props => 
                <AddNoteForm {...props} addNote={this.addNote}/>
              }
            />

            <Route exact path="/note/:id" 
              render={props =>
                <Note {...props} notes={this.state.notes} editNote={this.editNote} viewNote={this.viewNote} deleteNote={this.deleteNote}/>
              }
            />

            <Route exact path="/edit/:id"
              render={props =>
                <EditForm {...props} note={this.state.note} notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}/>
              }
            />
        </div>
      }
        
        

      </div>
    );
  }
}

export default withRouter(App);
