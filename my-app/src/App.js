import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./components/SideBar";
import styled from "styled-components";
import NoteList from "./components/NoteList/NoteList";
import NewNote from "./components/NewNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
      // note: {}
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // fetch data from the api
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  // addToNotes = newNote => {
  //   axios
  //     .post("https://killer-notes.herokuapp.com/note/create", newNote)
  //     .then(res =>
  //       this.setState({ notes: res.data }, this.props.history.push("/"))
  //     )
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route
          path="/list-view"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create-new"
          render={props => (
            <NewNote
              {...props}
              notes={this.state.notes}
              postNote={this.addToNotes}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
