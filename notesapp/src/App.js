import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar/NavBar";
import NoteList from "./components/ListView/NoteList";
import { AppDiv } from "./Styles/AppStyles";
import { Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => alert(error));
  }

  render() {
    return (
      <AppDiv>
        <NavigationBar />
        <Route
        exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
      </AppDiv>
    );
  }
}

export default App;
