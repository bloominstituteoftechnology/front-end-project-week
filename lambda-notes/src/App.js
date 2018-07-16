import React, { Component } from 'react';
import './App.css';
import SideBar from './components/Sidebar';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Notes from "./components/Notes";
import CreateNote from './components/CreateNote';

const URL = 'http://localhost:4444/notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then(response => {
        this.setState({ notes: response.data });
        console.log(this.state.notes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateNotes = data => this.setState({notes: data})


  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/notes" render={(props) => <Notes {...props} notes={this.state.notes} />} />
        <Route exact path="/create" render={(props) => <CreateNote {...props} addNote={this.addNote} notes={this.state.notes} updateNotes={this.updateNotes} />} />
      </div>
    );
  }
}

export default App;
