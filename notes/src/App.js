import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import {Route} from 'react-router-dom'; 
import  CreateNew  from './components/CreateNew';
import  NoteView   from './components/NoteView'; 
import axios from 'axios'
import { Edit } from './components/Edit.js'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: [],
      newId: 3,
      id: null,
      title: '',
      details: ''
    }  
  }

  componentDidMount(){
    axios
    .get("//localhost:4000/notes")
      .then(response => {
        this.setState({notes: response.data})
      })
        .catch(err => console.log(err)); 
}

  inputChange = e => {
    e.preventDefault();
    this.setState({
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value
      }
    });
  };

  addNote = () => {
    axios
      .post("http://localhost:4000/notes", this.state.newNote)
      .then(response =>
        this.setState({
          newNote: { title: "", details: "" }
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

  updateNote = id => {
    axios
      .put(`http://localhost:4000/notes/${id}`, this.state.newNote)
      .then(response =>
        this.setState({
          newNote: { title: "", details: "" }
        })
      )
      .catch(error => {
        console.log(error);
      });
  };

    newNote = (newtitle, newDetails) => {
      this.setState({
        notes:[
          ...this.state.notes, 
          {title: newtitle, details: newDetails}
        ],
       // newId: this.state.newId + 1
      })
    }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Route 
            exact path='/' 
            render = {props => <Notes {...props} 
            notes={this.state.notes} />}  
          />
          
          <Route 
            path='/CreateNew' 
            render = { props=> (
              <CreateNew
                {...props}
                notes={this.state.notes}
                id={this.state.newId}    
                newNote={this.newNote}
                post={this.inputChange}
              />)}
          /> 

          <Route exact path='/NoteView/:id' render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
            />)} 
          />  

          <Route exact path='/Edit/:id' render={props => (
            <Edit 
              {...props}
              notes={this.state.notes}
              inputChange={this.inputChange}
              newNote={this.newNote}
              updateNote={this.updateNote}
            />)}
          />
        </div> 
      </div>
    );
  }
}

export default App;