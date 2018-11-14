import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      error: ''
    }
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response=>{
      this.setState({notes: response.data});
    })
    .catch(error=>{
      this.setState({error: 'Notes failed to load'});
    })
  }

  render() {
    return (
      <div>
        <NavSideBar/>

        <Route exact path="/" render={props=><NotesList notes={this.state.notes}/>}/>
        <Route path="/create-note" render={props=><CreateNote {...props}/>}/>
      </div>
    );
  }
}

export default App;
