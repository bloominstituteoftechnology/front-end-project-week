import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CreateNote from './Notes/createNote';
import EditNote from './Notes/editNote';
import NotesList from './Notes/noteList';
import SideNav from './Notes/sideNav';
import NoteView from './Notes/viewNote';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
      axios
        .get(`http://localhost:5000/notes`)
        .then(response => {
          // console.log('response:', response);
          this.setState({ notes: response.data });
        })
        .catch(error => {
          console.error("Error!", error);
        });
  };

  render() {
    return (
      <div className="Body__note">
        <SideNav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <NotesList
                getNotes={() => this.componentDidMount()}
                notes={this.state.notes}
              />
            )}/>
          <Route
            path="/note/:id"
            render={({ match }) => (
              <NoteView getNotes={this.getNotes} match={match} />
            )}/>
          <Route
            path="/create"
            render={() => (
              <CreateNote
                getNotes={() => this.componentDidMount()}                     
              />
            )}/>
          <Route
            path="/edit"
            render={({ location }) => (
              <EditNote getNotes={this.getNotes} location={location} />
            )}/>
          </Switch>
      </div>
   );
  }
}
export default App;
