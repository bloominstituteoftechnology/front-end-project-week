import React, { Component } from "react";
import "./index.css";
import DeleteNote from "../DeleteNote/DeleteNote";

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      displayDelete: false,
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

  showModal = () => {
    this.setState({displayDelete: !this.state.displayDelete})
  };
  render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">{this.state.notesArray[0].title}</h3>
          <div>
            <a href="#" className="edit_delete">
              edit
            </a>
            <a href="#" className="edit_delete" onClick={this.showModal}>
              delete
            </a>
          </div>
        </div>
        <div className="notesList">
        <p className="">{this.state.notesArray[0].body}</p>
        </div>
        <DeleteNote toggle={this.state.displayDelete} showModal={this.showModal}/>
      </div>
    );
  }
}

export default NoteView;
