import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NoteList from '../NoteList';
import Form from '../Form';
import './index.css';

import SideBar from '../SideBar';

class App extends Component {
  // state to track data
  state = {
    notes: [],
    title: "",
    textBody: ""
  }

  // component did mount 
  componentDidMount = () => { this.refetchNotes(); };

  // handle input change
  handleInputChange = e => { this.setState({ [e.target.name]: e.target.value }); };

  // handle form submit
  handleFormSubmit = () => {};

  // refetch notes
  refetchNotes = () => {
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({ notes: response.data });
    })
    .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <SideBar />

        <Route exact path="/" component={NoteList} />
        
        <Route path="/notes/add" component={Form} />
      </div>
    );
  }
}

export default App;
