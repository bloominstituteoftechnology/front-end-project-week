import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";

import "./NoteList.css";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  render() {
    console.log("NoteList: this.props", this.props.mainProps);

    let filteredNotes = this.props.mainProps.noteArray.filter(note => {
      return (
        note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        note.content.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      );
    });
    return (
      <div className="NoteListContainer">
        <h1 className="NoteListYN">Your Notes: </h1>
        <div className="SearchBar">
          <div className="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_56429.png"
                  height="18"
                />
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Search note"
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
        </div>
        <div className="NoteListCol row p-0 m-0">
          {filteredNotes.map((eachNote, index) => (
            <div className="NoteCardContainer col-4 m-0 p-0" key={index}>
              <div className="NoteCard">
                <Link to={`/note/${index}`} style={{ textDecoration: "none" }}>
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
