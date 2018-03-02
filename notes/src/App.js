import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar'

import AllNotes from './Components/AllNotes';
import AddNote from './Components/AddNote';
import './App.css';



export default class App extends Component {
  nextId = 0;

  state = {
    notes: [{
      note: '',
      data: '',
    }
    ],
  }

  /*  componentDidMount = () => {
     this.setState({ note: this.state})
   }; 
*/
  /* 
    handleChange = addNote => {
      const newNote = {
        id: this.nextID++,
        note: addNote.note,
        data: addNote.data,
      };
      const newNotes = [...this.state.notes, newNote]
    }
   */
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

          {/* <AddNote handleInput={this.handleInput} handleSubmit={this.handleSubmit} namevalue={this.state.note} datavalue={this.state.data} /> */}
        </div>
      </Router >
    );
  }
}

/*   
   */
    /*     this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); */
/*    
 */
