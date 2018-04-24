import React, { Component } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import LeftPanal from "./LeftPanal";
import Myheader from "./Myheader";
import SelectedNotes from './SelectedNotes'; 
import ShowNote from './ShowNote';


export default class NotesList extends Component {
  state = {
    title: "",
    content: "",
    id: "",
    notes: []
  };

  componentDidMount() {
    this.setState({ notes: Data });
  }

  addNote = note => {};

 goToSelectedNote = (note) => {
 
 }

  render() {
    return (
      <div className="container0">
        <LeftPanal />
        <Myheader text="Your Notes" />
        <div className="container1">
          {this.state.notes.map(note => {
            return (
              <Link to= {`selectedNotes/${note.id}`} >
                <ShowNote p={note} c="Note" />
              </Link>
           
            );
          })}
        </div>
      </div>
    );
  }
}
