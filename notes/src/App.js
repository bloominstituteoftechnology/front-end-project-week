import React, { Component } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Note from "./components/Note"
import SingleNote from './components/SingleNote'
import Modal from './components/Modal'
import { Button } from 'reactstrap'
// import SideBar from './components/SideBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "note2",
          body: "Test Test Test Test"
        },
        {
          id: 2,
          title: "note1",
          body: "Test Test Test Test"
        },
        {
          id: 3,
          title: "note3",
          body: "Test Test Test Test"
        },
        {
          id: 4,
          title: "note4",
          body: "Test Test Test Test"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <h1 className="title">Lambda Notes </h1>
          <Link to="/notes" href="#about">
            <Button className="li">View Your Notes</Button>
          </Link>
          <Link to="/new" ref="#services">
            <Button className="li">Create New Note</Button></Link>
        </div>
        <Route exact path="/" render={() =>
          <div>Welcome young master</div>} />
        <Route exact path='/new' component={Modal} />
        <Route exact path='/notes' render={() =>
          <div><Notes notes={this.state.notes} /></div>} />
        <Route path="/notes/:id" render={(props) =>
          <SingleNote {...props} notes={this.state.notes} />
        } />
      </div>
    );
  }
}

export default App;
