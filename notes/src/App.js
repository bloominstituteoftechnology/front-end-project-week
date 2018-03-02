import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar'
import AddNote from './Components/AddNote';
import AllNotes from './Components/AllNotes';





export default class App extends Component {
  nextId = '';

  state = {
    notes: {
      note: '',
      data: '',

    }
  }



  getNextId = () => {
    let copyList = [...this.state.notes];
    const nextId = copyList.pop().id + 2;
    return nextId;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Sidebar} />
      
          <Route path="/Components/AllNotes"
            render={state => <AllNotes notes={this.state.notes} exact />}
          />
          <Route path="/Components/AddNote" component={state => <AddNote notes={this.states.notes} exact />}
          />

           <AddNote handleInput={this.handleInput} handleSubmit={this.handleSubmit} namevalue={this.state.note} datavalue={this.state.data} /> 
        </div>
      </Router >
    );
  }
}


