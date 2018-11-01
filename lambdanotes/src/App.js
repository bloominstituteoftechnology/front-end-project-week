import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from './Components/ListView';
import NoteForm from './Components/NoteForm';
import SideBar from './Components/SideBar';
import Note from './Components/Note';
import Edit from './Components/Edit';

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: [],
        note: {}
    }
  };

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.log(error))
  }; 

  render() {
    return (
      <div className="App">
        <SideBar />

        <Route
          exact path="/"
          render={props => {
            return <ListView {...props} list={this.state.list} />
          }}
        />

        <Route path="/NoteForm" component={NoteForm} />

        <Route 
          path="/Note/:id" 
          render={props => {
            return <Note {...props} note={this.state.note} />
          }}  
        />

        <Route path="/Edit/:id" component={Edit} />
      </div>
    );
  };
};

export default App;
