import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, BrowserRouter, NavLink} from 'react-router-dom';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import Notes from './components/Notes';
import NoteView from './components/NoteView';
import UpdateNote from './components/updateNote'
import CreateNote from './components/CreateNote'

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
      <CreateNote />
      <Route exact path="/notes/:id" render={(props) =>
        <NoteView {...props}/>}/>
      <Route path="/notes/:id/edit" render={(props) => 
       <UpdateNote {...props} /> } />
      <Route exact path="/" render={props => <Notes notes={this.state.notes} />}/>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
