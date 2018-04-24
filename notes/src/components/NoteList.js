import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import "./NoteList.css";

const ascending = (a,b) => a.title.localeCompare(b.title);

class NoteList extends Component {
  state = {
    notes: this.props.notes,
    search: "",
    sortActive: false,
    sortLabel: "None"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleSort = () => {
    this.setState({sortActive: !this.state.sortActive});
  }

  changeSort = label => {
    this.setState({sortActive: !this.state.sortActive, sortLabel: label});
  }

  getNotes = () => {
    let notes = this.state.notes;
    if (this.state.sortLabel === "Ascending") {
      notes = notes.slice(0).sort(ascending);
    } else if (this.state.sortLabel === "Descending") {
      notes = notes.slice(0).sort(ascending).reverse();
    }
    return notes;
  }

  render() {
    return (
      <div className="NoteList-area">
        <div className="NoteList-header">
          <h2 className="NoteList-title">Your Notes:</h2>
          <div className="NoteList-sort-container">
            <div className="NoteList-sort-btn" onClick={this.toggleSort}>Sort: {this.state.sortLabel}</div>
            <div className={`NoteList-sort-menu${this.state.sortActive ? "" : " NoteList-sort-menu-inactive"}`}>
              <div className="NoteList-sort-menu-item" onClick={() => this.changeSort("None")}>None</div>
              <div className="NoteList-sort-menu-item" onClick={() => this.changeSort("Ascending")}>Ascending</div>
              <div className="NoteList-sort-menu-item" onClick={() => this.changeSort("Descending")}>Descending</div>
            </div>
            <input
              className="NoteList-search"
              type="text"
              placeholder="Filter"
              name="search"
              value={this.state.search}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="NoteList-container">
          {this.getNotes()
            .filter(x => x.title.includes(this.state.search))
            .map((note, index) => (
              <Link
                key={`note${index}`}
                to={`/view/${note.id}`}
                className="NoteList-link"
              >
                <NoteCard {...note} />
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default NoteList;
