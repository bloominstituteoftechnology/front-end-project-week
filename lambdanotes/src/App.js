import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from './Components/ListView';
import NoteForm from './Components/NoteForm';
import SideBar from './Components/SideBar';

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
  };  //add ID specific request 

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
        <Route 
          path="/NoteForm" component={NoteForm}
        />
      </div>
    );
  };
};

export default App;
