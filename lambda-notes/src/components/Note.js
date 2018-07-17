import React, { Component } from "react";
import "../App.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: props.notes
    };
  }


  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id: Number(id), notes: this.props.notes });
  }

  filterNotes = note => {
    if (note.id === this.state.id) {
      return (
        <div key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      )
    } 

  };

  render() {
    return (
    <div>{this.props.notes.map(this.filterNotes)}
    </div>
);
  }

}


export default Note;
