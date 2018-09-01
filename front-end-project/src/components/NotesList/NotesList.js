import React, { Component } from "react";
import "./index.css";

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      notesArray: [
        {
          _id: "sdlfjsldka12984729",
          title: "First Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "2394879076121"
        },
        {
          _id: "sdlfjsldka12984729",
          title: "Second Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "239487907612123"
        },
        {
          _id: "sdlfjsldka12984729",
          title: "Third Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "2394879076121234"
        },
        {
          _id: "sdlfjslddsfka12984729",
          title: "Fourth Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "239487903876121234"
        },
        {
          _id: "sdlfjsldka12ivn984729",
          title: "Fifth Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "239487009076121234"
        },
        {
          _id: "sdlfjsldka129840376729",
          title: "Sixth Note",
          body:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor purus, condimentum fringilla nunc id",
          createdAt: "2394871209076121234"
        }
      ]
    };
  }

  render() {
    return (
      <div classname="notelist_container">
        <div className="content_header">
          <h3> Your Notes: </h3>
        </div>
        <div className="notesList" />
        {this.state.notesArray.map((note, index) => {
          return (
            <div className="note" key={index + note.title}>
              <div>
                <h4>{note.title}</h4>
                <hr />
                <p>{note.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NotesList;
