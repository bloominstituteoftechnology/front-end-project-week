import React, { Component } from "react";
import NoteItem from "./NoteItem";
import "./listview.css";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: props.tags,
      activeTag: "all",
      sortedNotes: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ notes: nextProps.notes, sortedNotes: nextProps.notes });
  }

  tagSelect = e => {
    let sortedNotes = this.state.notes.slice();
    if (e.target.dataset.tag !== "all") {
      sortedNotes = sortedNotes.filter(note =>
        note.tags.includes(e.target.dataset.tag)
      );
      console.log(sortedNotes);
      this.setState({
        activeTag: e.target.dataset.tag,
        sortedNotes: sortedNotes
      });
    } else {
      this.setState({
        activeTag: e.target.dataset.tag,
        sortedNotes: this.state.notes
      });
    }
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="list-view">
        <h2>Your Notes: </h2>
        <div className="tags">
          {" "}
          Tags:
          {this.state.tags.map((tag, index) => (
            <span
              key={index}
              data-tag={`${tag}`}
              className={this.state.activeTag === tag ? "active" : null}
              onClick={this.tagSelect}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="notes-container">
          {this.state.sortedNotes.map(note => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListView;
