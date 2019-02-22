import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route, withRouter } from 'react-router-dom';
import Note from './components/Note';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import LoginForm from './components/LoginForm';
import EditForm from './components/EditForm';
import loading from './loading.gif'
import pageError from './components/pageError';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: null,
      searchStatus: false,
      loading: false,
      noSuccess: false,
      requestError: false,
      isLoggedIn: false
    }
  }
  componentDidMount() {
      
    this.setState({ loading: true, noSuccess: false})
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data.length)
          this.setState({
              notes: response.data,
              searchStatus: false,
              loading: false,
              noSuccess: false
          })
          
          // this.props.history.push(`/`);
      })
      .catch(err => {
        this.setState({
            notes: [],
            searchStatus: false,
            loading: false,
            noSuccess: err
        })
        console.log(err);
      })
    
  }
 
  
  fetchNotes = () => {
    this.setState({ loading: true, noSuccess: false})
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data.length)
          this.setState({
              notes: response.data,
              searchStatus: false,
              loading: false,
              noSuccess: false
          })
          
          this.props.history.push(`/`);
      })
      .catch(err => {
        this.setState({
            notes: [],
            searchStatus: false,
            loading: false,
            noSuccess: err
        })
        console.log(err);
      })
  }

  addNote = note => {
    this.setState({ loading: true });
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
              loading: false
          })
          this.props.history.push(`/note/${newNote._id}`);
          
      })
      .catch(err =>{
          console.log(err);
      })

  }

  editNote = (id, note) => {
    this.setState({ loading: true });

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
            loading: false
          })

          this.props.history.push(`/note/${id}`);
        
      })
      .catch(err => {
        console.log(err);
      })
  }

  viewNote = id => {
    // this.setState({ loading: true})
      axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => {
              
              this.setState({ 
                  note: response.data,
                  searchStatus: false,
                  // loading: false,
                  requestError: false
              });
            console.log(this.state.note._id)
              this.props.history.push(`/note/${this.state.note._id}`);
            
          })
          .catch(err => {
              console.log(err);
              this.setState({
                note: null,
                searchStatus: false,
                // loading: false,
                requestError: true
              })
            console.log(this.state.note._id)

              this.props.history.push(`/note/${this.state.note._id}`);
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

  searchTerm = term => {
    this.setState({searchStatus: `Searching...`})
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        
        let newNotes = []
        response.data.map(note => {

          if ((note.title.toLowerCase().includes(term.toLowerCase()) || note.textBody.toLowerCase().includes(term.toLowerCase()))) {
            newNotes.push(note)
          }
        });
        
        newNotes.length === 0 ?

        this.setState({
          notes: [],
          loading: false,
          searchStatus: `No notes with term: ${term} were found`
        })

        :
        this.setState({
          notes: newNotes,
          loading: false,
          searchStatus: false
        })
        this.props.history.push(`/`);

      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="App">
        
        {!this.state.isLoggedIn  ?
          <div className="login-container">
            <LoginForm />
          </div>
            : 
        
        <div className="app-container">
            
          <Route path="/"
            render={props =>
              <Sidebar {...props} fetchNotes={this.fetchNotes} searchTerm={this.searchTerm}/>
            }
          />

          <div className="section">
            <div className="header">
                <h1>Your notes</h1>
                {this.state.loading ? <div className="loading"><img src={loading} /></div> : null }
            </div>

            
            
            <Route exact path="/" 
              render={props => 
              <NotesList {...props} viewNote={this.viewNote} notes={this.state.notes} loading={this.state.loading} searchStatus={this.state.searchStatus}/>
              }
            />
            
            <Route path="/notes/create" 
              render={props => 
                <AddNoteForm {...props} addNote={this.addNote}/>
              }
            />
            <Route exact path="/note/:id" 
              render={props =>
                <Note {...props} notes={this.state.notes} requestError={this.state.requestError} viewNote={this.viewNote} deleteNote={this.deleteNote}/>
              }
            />

            <Route exact path="/edit/:id"
              render={props =>
                <EditForm {...props} note={this.state.note} notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}/>
              }
            />
            <div className="error-page">
            <Route path="/404" component={pageError} />
          </div>
          </div>
          
      </div>

        } 
          
      </div>
    );
  }
}

export default withRouter(App);
