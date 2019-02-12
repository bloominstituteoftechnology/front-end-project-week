import React, { Component } from 'react';
import axios from 'axios';


import SidebarView from './sidebarComponent/sbView';
import NotesView from './NotesComponent/notesView';
import FormView from './formComponent/formView';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
          .then(res => this.setState({
              notes: res.data
          }))
          .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
          <SidebarView  />
          <NotesView notes={this.state.notes}/>
          <FormView />
      </div>
    );
  }
}

export default App;
