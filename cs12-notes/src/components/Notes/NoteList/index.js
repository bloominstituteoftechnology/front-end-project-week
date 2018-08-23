import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Trimmer = input => {
  if (input.length > 124) {
    let modi = input;
    modi = modi
      .split("")
      .splice(0, 121)
      .join("");
    return modi + "...";
  } else {
    return input;
  }
};

const TitleMax = input => {
  if (input.length > 11)
    return (
      input
        .split("")
        .splice(0, 8)
        .join("") + "..."
    );
  return input;
};

const NoteDisplay = props => {
  console.log(props.data);
  return (
    <div className="note__container">
      {props.data.map((u, index) => (
        <div key={u._id} className="note__container-notes">
          <Link to={"/Notes/" + u._id}>
            <h1>{TitleMax(u.title)}</h1>
            <p>{Trimmer(u.textBody)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

class NoteList extends Component {
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
        <h3 className="note__container-h3">Notes:</h3>
        <NoteDisplay data={this.state.notes} />
      </div>
    );
  }
}

export default NoteList;
