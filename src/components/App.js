import React, { Component } from "react";
import "../style/App.css";
import axios from "axios";
import ListView from "../components/listView";
import { AddNote } from "../components/addNote";
import { Route } from "react-router-dom";
import SingleNoteHolder from './SingleNoteHolder';
import EditNoteHolder from './editNoteHolder'

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        console.log(response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(){
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({ notes: response.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
        <Route path="/addnote" render={props=> <AddNote  {...props}/>}/>
        <Route
          path="/notes/:id" 
          render={props=> <SingleNoteHolder {...props} notes={this.state.notes} />}
          />
           <Route
          path="/edit/:id" 
          render={props=> <EditNoteHolder {...props} notes={this.state.notes} />}
          />
       
      </div>
    );
  }
}

export default App;
