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
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }
  addNote = note => {

    const newNote = {
      title: note.title,
      textBody: note.textBody
    }

    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
          newNote.id = response.data.success;
          
          this.setState({
              notes: [...this.state.notes, newNote],
          })
          this.props.history.push(`/note/${newNote.id}`);
          
      })
      .catch(err =>{
          console.log(err);
      })

  }

  editNote = (id, note) => {
    console.log('lol');

    let updatedNote = {
      id: note._id,
      title: note.title,
      textBody: note.textBody,
      tag: []
    }

    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
      .then(response => {
        console.log(response)
          updatedNote.id = response;
          // const newNotes = this.state.notes.slice();

          let newArray = this.state.notes.filter(note => note._id !== id).concat(updatedNote);
          // console.log(newNotes)

          this.setState({
              // note: updatedNote,
              notes: newArray,
          })
          // this.props.history.push(`note/${id}`);
      })
      .catch(err =>{
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
            <Sidebar />
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
                <Note {...props} note={this.state.note} notes={this.state.notes} editNote={this.editNote} viewNote={this.viewNote} deleteNote={this.deleteNote}/>
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
