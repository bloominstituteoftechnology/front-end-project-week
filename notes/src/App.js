import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import CreateNote from './components/CreateNote';
import { Route } from 'react-router-dom';
import notesArray from './components/NotesArray';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({notes: notesArray})
  }

  submitForm = (title, textBody) => {
    this.setState(function (prevState, props) {
      console.log(prevState);
      return {
      notes: [...prevState.notes, {id: prevState.notes.length, title: title, textBody: textBody}]
    }});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={props => (<NotesList {...props} notes={this.state.notes} />)} />
        <Route path="/create" render={props => (<CreateNote {...props} notes={this.state.notes} submit={this.submitForm} />)} />
      </div>
    );
  }
}

export default App;
