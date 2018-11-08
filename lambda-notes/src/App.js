import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Side from './component/Side';
import NoteForm from './component/NoteForm';
import Notes from './component/Notes';
import NoteList from './component/NoteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: ''
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  componentDidUpdate() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <Side />
        <Route
          path="/new-note"
          render={props => (
            <NoteForm
              {...props}
              changeHandler={this.changeHandler}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Notes
              {...props}
              notes={this.state.notes}
              changeHandler={this.changeHandler}
              editNote={this.editNote}
            />
          )}
        />
        <Route path="/notes/:id" render={props => <NoteList {...props} />} />
      </div>
    );
  }
}
export default App;
