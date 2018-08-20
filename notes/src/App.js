import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import NotesView from './components/NotesView';
import AddNote from './components/AddNote';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Note Title",
          note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis"
        },
        {
          id: 2,
          title: "Note Title",
          note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis"
        },
        {
          id: 3,
          title: "Note Title",
          note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis"
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="navbar-title">Lambda Notes</div>
          <NavLink className="navlink" exact to="/">View Your Notes</NavLink>
          <NavLink className="navlink" to="/add-note">+ Add a Note</NavLink>
        </div>
        <div className="notesbody">
          <Route exact path="/" render={props => <NotesView {...props} notes={this.state.notes}/>}/>
          <Route path="/add-note" render={props => <AddNote {...props} notes={this.state.notes}/>}/>
        </div>
      </div>
    );
  }
}
