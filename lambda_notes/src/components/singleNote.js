import React, { Component } from "react";
import { connect } from "react-redux";

class SingleNote extends Component {
  state = {
    title: "",
    text: "",
    id: "",
    deleting: false,
  };

  render() {
    console.log("props", this.props);
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <h3 className="heading">{this.props.notes[id].title}</h3>
        <p className="notetext">{this.props.notes[id].text}</p>
        </div>
    )}}

  export default SingleNote; 