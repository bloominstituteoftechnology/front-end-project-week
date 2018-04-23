import React, { Component } from "react";
import SideBar from "./sidebar";
import ListView from "./listview";
import "./notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{title: 'Here we go', text: 'Is it working I wonder?'}],
      view: "list"
    };
  }

  componentDidMount() {}

  render() {
      console.log(this.state);
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar />
          <ListView notes={this.state.notes} />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
