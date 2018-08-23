import React, { Component } from "react";
import "./index.css";
import { Route } from "react-router-dom";
import ViewNote from "../ViewNote";
import EditNote from "../EditNote";
import axios from "axios";

const NoteRoutes = props => {
  return (
    <div>
      {props.data.notes.map((u, index) => (
        <div key={index}>
          <Route
            exact
            path={"/Notes/" + u._id}
            component={ViewNote}
            key={u._id}
          />
          <Route path={"/Notes/edit/" + u._id} component={EditNote} />
        </div>
      ))}
    </div>
  );
};

class NoteNav extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  theMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  componentDidMount() {
    this.theMount();
  }

  componentDidUpdate() {
    this.theMount();
  }

  render() {
    return (
      <div className="note__container-bg">
        <NoteRoutes data={this.state} />
      </div>
    );
  }
}

export default NoteNav;
