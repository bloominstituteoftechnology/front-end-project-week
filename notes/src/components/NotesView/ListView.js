import React, { Component } from "react";
import NoteItem from "./NoteItem";
import axios from "axios";
import "./listview.css";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: [],
      activeTag: "all",
      sortedNotes: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/notes`)
      .then(response => {
        console.log(response.data);
        let tags = "";
        let filteredTags = "";

        response.data.forEach(note => {
          tags += note.tags + ",";
        });

        tags = tags.slice(0, tags.length - 1);
        tags = tags.split(",");

        filteredTags = tags.filter((tag, index) => {
          return tags.indexOf(tag) === index;
        });

        this.setState({
          notes: response.data,
          sortedNotes: response.data,
          tags: filteredTags
        });
      })
      .catch(err => {
        console.log("Error retrieving notes");
      });
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
