import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Notes from './Notes.js';
import { NavBar } from './NavBar.js';
import { CreateNote } from './CreateNote.js';




class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [
        { id: 0, title: "Example Note", body: "here is an example note" },
        { id: 1, title: "superman", body: "here is another piece of text" },
        { id: 2, title: "batman", body: "here is another piece of text for batman" }

        // begin initial state in redux store
        // this.props.id += 1;
      ],
      title: "",
      content: ""
    }
  }

  handleChange = (event) => {
   // why is the [event.target.name] in square brackets?
   this.setState({ [event.target.name]:event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const noteList = this.state.notes;
     
  }

  createNew = () => {
    // create new note
    
  }

  viewExisting = () => {
    // search for note
  }

  editExisting = () => {
    // edit note
  }

  deleteExisting = () => {
    // delete note
  }

  render() {
    return (
      <Router>
        <div className="MainView">
          <NavBar />
          {/* only way to pass down props to child component in react-router */}
          <Switch>
            <Route exact path="/" render={() => <Notes notes={this.state.notes} blah={this.state.title} />} />
            <Route path="/createNew" render={() => <CreateNote content={this.state.content} title={this.state.title} handleChange={this.handleChange} /> }  />
          </Switch>
        </div>
      </Router>
    );
  }
}
// should I render my main default view in here?
// where to really start...
// notes is the child component of app.js because app.js is rendering notes
// can pass state down to a child component as props
// we can call the props whatever we want
// our app component is just rendering our child components
// we can more easily separate our logic this way
export default App;
