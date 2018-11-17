import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, BrowserRouter, NavLink} from 'react-router-dom';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import Notes from './components/Notes';
import NoteView from './components/NoteView';

// NoteForm is the default list view -- need to build out a NoteView thing that displays when the user clicks an individual link.


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes: [],
    };
  }

  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
      <NavLink to="/">Go home</NavLink>
      <Route path="/note/:id" render={(props) => {
        return(<NoteView {...props}/>)}}/>
      <Route path="/notes-form" render={props =>
      <NoteForm addNote={this.addNote}/>}></Route>
      <NoteForm />
      <Route exact path="/" render={props => <Notes notes={this.state.notes} />}/>

      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
