import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      titleInput: "",
      descriptionInput: "",
      noteList: []
    };
  }

  handleAddNote = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //   handleSubmitNote = e => {
  //     this.setState({
  //       const
  //     })
  //   }
  
  render() {
    return <div>Placeholder Text</div>;
  }
}

export default App;
