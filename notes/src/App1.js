import React, { Component } from 'react';
import './App.css';
import AllNotes from './Components/AllNotes';
import AddNote from './Components/AddNote';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
export default class App extends Component {
  state = {
    notes: [{
      note: '',
      data: '',
    }
    ],
    note: '',
    data: '',
  }

  render() {
  
      return (
        <Router>
      <div className="App">
        <button>
          <NavLink to="/AllNotes" exact>
            View Your notes
         <AllNotes notes={this.state.notes} />
          </NavLink>
        </button>


        <button>
          <NavLink to= "/AddNote" exact>
            <AddNote handleInput={this.handleInput} handleSubmit={this.handleSubmit} namevalue={this.state.note} datavalue={this.state.data} />
          </NavLink>
        </button>
        <Route path="/AllNotes" exact component={AllNotes} />
        <Route path="/AddNote" exact component={AddNote} />
      </div>

      </Router > )
      
          }
}
