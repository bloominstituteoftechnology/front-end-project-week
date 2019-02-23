import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { Route, withRouter } from 'react-router-dom';
import Note from './components/Note';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import LoginForm from './components/LoginForm';
import EditForm from './components/EditForm';
import pageError from './components/pageError';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: null,
      searchStatus: '',
      loading: false,
      noSuccess: false,
      requestError: false,
      isLoggedIn: false,
      loginError: false,
      username: '',
      password: ''
    }
  }

  

  componentDidMount() {
    this.setState({ loading: true, searchStatus: '' });
    if (localStorage.getItem('username') === 'username' && localStorage.getItem('password') === 'password') {
      this.setState({ isLoggedIn: true, loading: false });
      axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
          this.setState({
              notes: response.data,
              loading: false,
              noSuccess: false
          })
      })
      .catch(err => {
        this.setState({
            notes: [],
            loading: false,
            noSuccess: err
        })
        console.log(err);
      })
      
    }
    else {
      this.setState({ isLoggedIn: false, loading: false });
      this.props.history.push('/login')
    }
  }
  
  fetchNotes = () => {
    this.setState({ loading: true, noSuccess: false, searchStatus: ''})
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
          this.setState({
              notes: response.data,
              loading: false,
              noSuccess: false
          })
          
          this.props.history.push(`/`);
      })
      .catch(err => {
        this.setState({
            notes: [],
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
          this.props.history.push(`/note/${response.data._id}`);
        
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        })
        this.props.history.push(`/edit/${id}`);
      })

  }

  viewNote = id => {
    this.setState({ loading: true})
      axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => {
              
              this.setState({ 
                  note: response.data,
                  loading: false,
                  requestError: false
              });
              this.props.history.push(`/note/${id}`);
          })
          .catch(err => {
              console.log(err);
              this.setState({
                loading: false,
                requestError: true
              })

              this.props.history.push(`/404`);
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
    this.setState({ searchStatus: 'Searching...'})
    let newNotes = [];
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        
        response.data.map(note => {

          if ((note.title.toLowerCase().includes(term.toLowerCase()) || note.textBody.toLowerCase().includes(term.toLowerCase()))) {
            newNotes.push(note)
          }
          return newNotes;
        });
        console.log(newNotes);
        if (newNotes.length > 0) {
          this.setState({
            notes: newNotes,
            searchStatus: `Here is what we found matching with ${term}: `
          })
        }
        else {
          this.setState({
            notes: [],
            searchStatus: 'Sorry, nothing found'
          })
        }
        

      })
      .catch(err => {
        console.log(err);
        
      })
      this.props.history.push(`/`);

  }
  

  loginUser = (name, pass) => {
    this.setState({ loading: true })

    if (name === 'username' && pass === 'password') {

      localStorage.setItem('username', name);
      localStorage.setItem('password', pass);
      
      this.setState({
        username: name,
        password: pass,
        isLoggedIn: true,
        loginError: false,
        loading: false,
      })
      this.props.history.push(`/`);
      
    }
    else {
      this.setState({
        isLoggedIn: false,
        loginError: true,
        loading: false,
      })
    }
    
  }

  render() {

    return (
      <div className="App">
        
        {this.state.isLoggedIn ?
         
         <div className="app-container">
            
          <Route path="/"
            render={props =>
              <Sidebar {...props} notes={this.state.notes} searchStatus={this.searchStatus} fetchNotes={this.fetchNotes} searchTerm={this.searchTerm}/>
            }
          />

          <div className="section">
            
            <Route exact path="/" 
              render={props => 
              <NotesList {...props} notes={this.state.notes} viewNote={this.viewNote} searchStatus={this.state.searchStatus} loading={this.state.loading}/>
              }
            />
            
            <Route path="/notes/create" 
              render={props => 
                <AddNoteForm {...props} addNote={this.addNote}/>
              }
            />
            <Route exact path="/note/:id" 
              render={props =>
                <Note {...props} note={this.state.note} requestError={this.state.requestError} viewNote={this.viewNote} deleteNote={this.deleteNote}/>
              }
            />

            <Route exact path="/edit/:id"
              render={props =>
                <EditForm {...props} notes={this.state.notes} editNote={this.editNote}/>
              }
            />
            <div className="error-page">
              <Route path="/404" component={pageError} />
            </div>
          </div>
          
        </div>
        
        :
        <Route path="/"
          render={props => 
            <LoginForm {...props} loginUser={this.loginUser}/>
          }
        />
        
        
        } 
          
      </div>
    );
  }
}

export default withRouter(App);
