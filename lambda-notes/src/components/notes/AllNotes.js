import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }
  componentDidUpdate(prevProps) {
    console.log("PREVPROPS", prevProps.notes.length);
    console.log("CURRENTPROPS", this.props.notes.length);
    if (this.props.notes.length !== prevProps.notes.length) {
      this.setState({ allNotes: this.props.notes });
    }
  }

  render() {
    return (
      <Fragment>
        <SideBar />
        {this.state.allNotes.map(note => {
          return (
            <Link to={`/notes/${note.id}`} className="noteCard" key={note.id}>
              <p>{note.title}</p>
              <p>{note.description}</p>
            </Link>
          );
        })}
      </Fragment>
    );
  }
}

export default AllNotes;
