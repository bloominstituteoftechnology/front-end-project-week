import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ListView from '../Page/ListView';
import CreateNewView from '../Page/CreateNewView';
import EditView from '../Page/EditView';
import NoteView from '../Page/NoteView';
import Nav from '../Nav';
import './App.css';

const API_URL = 'http://localhost:3333/notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  onAddNote = note => {
    axios
    .post(API_URL, note)
    .then(response => {
      console.log('posted', response);
      this.setState({ notes: response.data});
      window.location.href = '/';
    })
    .catch(error => console.log(error));    
  }

  componentDidMount() {
    axios.get(API_URL)
    .then(response => {
      this.setState({notes: response.data});
      console.log('GET', this.state.notes);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/" render={(props) => <Nav {...props} />} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/create" render={(props) => <CreateNewView {...props} onSubmitNote={this.onAddNote} />} />
        <Route exact path="/edit/:noteID" render={(props) => <EditView {...props} />} />
        <Route exact path="/note/:noteID" render={(props) => <NoteView {...props} notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
