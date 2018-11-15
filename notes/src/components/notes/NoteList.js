import React, { Component } from "react";
import Note from "./Note";
import axios from 'axios';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  componentDidMount() {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {console.log(response)
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div className="note-list-container">
        <Note notes={this.state.notes} />
      </div>
    );
  }
}

export default NoteList;
