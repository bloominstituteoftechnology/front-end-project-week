import React, {Component} from "react";
import axios from "axios";
import "./App.css";

import Menu from "./components/Menu";
import ListView from "./components/ListView";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount = () => {
    console.log("CDM: Notes fetched", this.state.notes);
    this.fetchNotes();
  };

  fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({notes: response.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <ListView notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
