import React, { Component } from "react";
import SideBar from "./sidebar";
import ListView from "./listview";
import CreateNote from "./createnote";
import "./notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        },
        {
          title: "Test Note Title",
          text:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a. efficitur mollis ..."
        }
      ],
      view: "list"
    };
  }

  addNote = note => {
    this.state.notes.push(note);
    console.log(this.state);
    this.setState({ view: "list" });
    this.componentDidMount();
  };

  changeToList = () => {
    this.setState({ view: "list" });
  };

  changeToCreate = () => {
    this.setState({ view: "create" });
  };

  removeAllNotes = () => {
    this.setState({ notes: [] });
  };

  componentDidMount() {}

  render() {
    if (this.state.view === "list") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <ListView notes={this.state.notes} />
        </div>
      );
    }
    if (this.state.view === "create") {
      return (
        <div className="full-container">
          <SideBar
            changeToList={this.changeToList}
            changeToCreate={this.changeToCreate}
            removeAllNotes={this.removeAllNotes}
          />
          <CreateNote addNote={this.addNote} />
        </div>
      );
    }
    return <h1>Something didn't work</h1>;
  }
}
