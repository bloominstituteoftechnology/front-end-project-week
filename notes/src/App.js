import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import {Route} from 'react-router-dom';
import axios from 'axios';
import ViewNote from './components/ViewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [

      ]
    }
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  setData = () => {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log("Set Data failed:", err)
      })
  }

  handleCreate() {
    console.log("Happy happy fun day");
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={props => <NotesList {...props}
          notes={this.state.notes} />} />
        <Route exact path="/create" component={props => <CreateNote {...props}
        handleCreate={this.handleCreate} setData={this.setData} />} />
        <Route exact path="/notes/:id" component={props => <ViewNote {...props}
        setData={this.setData} />} />
      </div>
    );
  }
}

export default App;
