import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote'
import Note from './components/Note';
import EditNote from './components/EditNote'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({
          notes: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  addNewNote = (note) => {    
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.setState({
          notes: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  editNote = (e, id, state) => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, state)
      .then(response => {
        const updateNotes = this.state.notes.map(note => {
          if (note._id === response.data._id) {
            return response.data;
          }
          return note;
        })
        this.setState({ notes: updateNotes })
      })
      .catch(err => {
        console.log(err)
      })
  }


  

  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <div className="side-header">
            <h1>Lambda </h1>
            <h1>Notes</h1>
          </div>
          <nav>            
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/create" >Create a Note</NavLink>
          </nav>          
        </div>
          <Route 
            exact path='/' 
            render={(props) => <NoteList {...props} notes={this.state.notes} delete={this.deleteNote} />} 
          />
          <Route 
            path='/create' 
            render={(props) => <CreateNote {...props} addNewNote={this.addNewNote} />} 
          />
          <Route 
            path='/note/:id'
            render={props => 
              <Note {...props}/>
            }
          />
          <Route
            path='/edit/:id'
            render={props =>
              <EditNote {...props} editNote={this.editNote} />
            }
          />        
      </div>
    );
  }
}

export default App;

