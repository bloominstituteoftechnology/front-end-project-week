import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import {Route} from 'react-router-dom'; 
import  CreateNew  from './components/CreateNew';
import  NoteView   from './components/NoteView'; 
import axios from 'axios'
import  Edit  from './components/Edit.js'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: [],
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



  updateHandler = (title, details, id) => {
    this.setState({
      notes: [ ...this.state.notes,
        {title:title, details: details}
      ]
    })
    let updatedNote = {
      title: title,
      details: details,
    }
    axios
      .put(`http://localhost:4000/notes/${id}`, updatedNote)
      .then(response =>
        this.setState({
          updatedNote: { title: "", details: "" , id: null}
        })
      )
      .catch(error => {
        console.log(error);
      });
  };


    newNote = (newtitle, content) => {
      this.setState({
        notes:[
          ...this.state.notes, 
          {title: newtitle, details: content}
        ],
      })
      const newNote = {
        title: newtitle,
        details: content,
        
      }
      axios.post('http://localhost:4000/notes', newNote)
      .then( response => {
          this.setState({
            newNote: {
            title: '',
            details: '',
            }
          })
        })
        .catch( error => console.log( "we've encountered an error"))
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
              updateHandler={this.updateHandler}
            />)}
          />
        </div> 
      </div>
    );
  }
}

export default App;