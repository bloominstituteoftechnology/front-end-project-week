import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SideMenu from './components/SideMenu.js';
import YourNotes from './components/YourNotes.js';
import CreateNote from './components/CreateNote.js';
import EditNotes from './components/EditNotes.js';
import DeleteNotes from './components/DeleteNotes.js';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={SideMenu} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/home" component={YourNotes} />
        <Route exact path="/Create" component={CreateNote} />
        <Route
          path="/note/:id"
          render={props => {
            return <DeleteNotes id={props.match.params.id} />;
          }}
        />
        <Route
          path="/edit/:id"
          render={props => {
            return <EditNotes id={props.match.params.id} />;
          }}
        />
      </div>
    );
  }
}

export default App;
