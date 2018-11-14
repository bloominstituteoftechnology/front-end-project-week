import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';

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
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
