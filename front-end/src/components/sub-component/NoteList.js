import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NoteCard from "./NoteCard";

import "./NoteList.css";

class NoteList extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    console.log("NoteList: this.props", this.props.mainProps);
    return (
      <div className="NoteListContainer">
        <h1 className="NoteListYN">Your Notes: </h1>
        <div className="NoteListCol row p-0 m-0">
          {this.props.mainProps.noteArray.map((eachNote, index) => (
            <div className="NoteCardContainer col-4 m-0 p-0" key={index}>
              <div className="NoteCard">
                <Link to={`/note/${index}`}>
                  <NoteCard eachNote={eachNote} props={this.props} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NoteList;
