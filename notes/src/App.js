import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Form from './components/createNewView';
import YourNotes from './components/listView';
import Note from './components/noteView';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        tag: '',
        title: '',
        textBody: '',
      }
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))

  }

  addNote = (event, newNote) => {
    event.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        newNote._id = response.data.success;
        this.setState({ notes: [newNote, ...this.state.notes] })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))
  }
  

  render() {
    return (
      
      <div className='container'>
        <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
            <NavLink exact to='/'>
            <button className='side-button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new-note'>
            <button className='side-button'>+Create New Note</button>
            </NavLink>
          </div>
          
          {/* function NoteDetails({note}){
            <Link to = {`/notes/${note.id}`}> */}
            <Route
            path exact='/'
            render={props =>
            <YourNotes {...props}/> 
              /* </Link>} */}/>

          <Route
          path='/create-new-note' 
          render={props =>
          <Form {...props} addNote={this.addNote}/> }/>

            <Route 
            path='/:id' 
            render={props => (
              <Note 
              {...props}
              notes={this.state.notes}
              />
            )}
          />


        </div>
      </div>
    );
  }
}
export default App;
