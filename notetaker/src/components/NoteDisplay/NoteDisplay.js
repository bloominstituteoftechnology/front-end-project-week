import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteDisplay.css";

class NoteList extends Component {
  render() {
    return (
      <div className="Note">
        <div>
          <h1>Lambda Notes</h1>
          <Button className="Note-buttons">
            <Link to="/">View Your Notes</Link>
          </Button>
          <Button className="Note-buttons">
            <Link to="/CreateNote"> +Create New Notes </Link>
          </Button>
        </div>
        <div className="Note-box">
          <h1>Your Notes</h1>
          <div className="Note-list" />
          <Link to="/">
            <div>
              <h3>Note Title</h3>
              <p className="Note-content">
                fumo fumo fumo fumo fumo fumo fumo fumo fumo fumo fumo fumo fumo
                fumo fumofumo fumo fumo fumo fumo
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NoteDisplay;
