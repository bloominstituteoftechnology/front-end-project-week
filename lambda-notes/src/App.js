import React, { Component } from 'react';
import axios from 'axios';
// import bootstrap from 'bootstrap';
import './reset.css';
import './App.css';
import { Route, Link } from 'react-router-dom';

import NoteList from './components/NotesList';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
    // setInterval(() => this.getNotes(), 500);
  }

  getNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        // console.log(response.data);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNote = id => {
    // console.log(`${id}`, ' deleted');
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        // console.log(res);
        this.getNotes();
      })
      .catch(err => {
        console.log('error deleting');
      });
  };

  render() {
    return (
      <div className="App">
        <aside>
          <h1>Lambda Notes</h1>
          <Link to="/" onClick={this.getNotes}>
            <div className="asideBtn">View Your Notes</div>
          </Link>
          <Link to="/create">
            <div className="asideBtn">+ Create New Note</div>
          </Link>
        </aside>
        <Route
          path="/"
          exact
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={props => <CreateNote {...props} getNotes={this.getNotes} />}
        />
        <Route
          path="/view/:id"
          render={props => (
            <ViewNote
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              getNotes={this.getNotes}
            />
          )}
        />
        {/* <Route path="/edit/:id" component={} /> */}
      </div>
    );
  }
}

export default App;
