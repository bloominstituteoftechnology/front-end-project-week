import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: props.notes,
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
        <div>
          <Link to={`/edit/${note.id}`}> edit</Link>
          </div>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      )
    } 
  };

  render() {
    return (
      <div>
    <div>{this.props.notes.map(this.filterNotes)}
    </div>
    <button className="delete-button" >delete</button>
    </div>
    )
  }
}


export default Note;
