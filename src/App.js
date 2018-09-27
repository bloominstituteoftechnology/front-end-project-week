import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';
import Register from './components/Register';
import Login from './components/Login';

const jwtDecode = require('jwt-decode');

const URL = 'http://localhost:3300/notes/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      searchedNotes: [],
      search: ''
    }
  }



componentDidMount () {
    axios.get(URL)
    .then(response => {
        this.setState({
            notes: response.data,
            searchedNotes: response.data
        })
    })
    .catch(error => {
      console.log(error);
    });
}

/* componentDidMount () {
  this.getNotes();
}

getNotes = async () => {
const token = localStorage.getItem('token');
if (!token){
    Window.location = '/login';
}

try {
    const response = await axios({
        method: 'get',
        url: URL,
        headers: { authorization: token }
    });

    const decoded = jwtDecode(token);
    this.setState({
        username: decoded.username,
        notes: response.data,
        searchedNotes: response.data,
        loggedIn: true
    });
} catch (error) {
    console.log(error, error.message);
    this.setState({loggedIn: false})
}
} */

handleSearch = (event) => {
  this.setState ({
    search: event.target.value,
    notes: this.state.searchedNotes.filter((note) => 
      new RegExp(event.target.value, "i").exec(note.title))
  });
}

  render() {
    return (
      <div className='App'>
        
        <Navigation  />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/add-note' component={NewNote} />
        <Route exact path='/notes' render={(props) => (
          <NotesList {...props} notes={this.state.notes} 
          search={this.state.search} handleSearch={this.handleSearch} />)} />
        <Route path='/edit-note/:id' render={(props) => (
          <EditNote {...props} note={this.state.note} />)} />
        <Route path='/note/:id' render={(props) => (
          <NoteView {...props}  note={this.state.note} />) } />
          
      </div>
    );
  }
}

export default App;
