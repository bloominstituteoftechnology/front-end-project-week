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

  render() {
    return (
      <div>
      <div>
        <Myheader p={'none'}  c={'titlefornotes'}/>
      </div>
      <div className="container0">
        <LeftPanal />
        <div className="container1">
          {this.state.notes.map(note => {
            return (
              <Link to= {`selectedNotes/${note.id}`} >
                <ShowNote p={note} c="Note" ic="single-note-title" />
              </Link>
           
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}
