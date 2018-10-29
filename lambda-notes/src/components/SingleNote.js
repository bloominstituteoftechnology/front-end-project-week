import React, { Component } from "react";
import axios from "axios";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("noteID");
    console.log(id);
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`).then(res =>
      this.setState({
        note: res.data
      })
    );
    console.log(localStorage.getItem("noteID"));
  }
  render() {
    return (
      <div className="notes-container">
        <h1>{this.state.note.title}</h1>
        <p>{this.state.note.textBody}</p>
      </div>
    );
  }
}

export default SingleNote;
