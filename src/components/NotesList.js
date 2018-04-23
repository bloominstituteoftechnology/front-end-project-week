import React, { Component } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import LeftPanal from "./LeftPanal";
import Myheader from "./Myheader";

export default class NotesList extends Component {
  state = {
    title: "",
    content: "",
    id: "",
    notes: []
  };

  componentDidMount() {
    this.setState({ notes: Data });
    console.log(this.props);
  }

  addNote = note => {};

  selectNote = (e) => {

  }

  render() {
    return (
      <div className="container0">
        <LeftPanal />
        <Myheader text="Your Notes" />

        <div className="container1">
          {this.state.notes.map(note => {
            return (
              <div>
                <div  onClick={this.selectNote} className="Note">
                  <div>{note.title}</div>
                  <div>{note.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
