import React, { Component } from "react";
import "../App.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: []
    };
  }
  // componentDidMount() {
  //     const id = this.props.match.params.id;
  //     fetch(`http://localhost:3000/notes/${id}`)
  //     .then((response) => {
  //         console.log(response)
  //       this.setState(() => ({note: response.note}))

  //     })
  //   }
  // render(props) {
  //     return (
  //         <div className="note-card">
  //             <h3>{this.props.title}</h3>
  //             <p>{this.props.content}</p>
  //         </div>
  //      );
  // }
  // }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState(() => ({ id: Number(id), notes: this.props.notes }));
  }
  filterNotes = note => {
    if (note.id === this.state.id) {
      return (
        <div key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      );
    }
  };

  render() {
    return <div>{this.props.notes.map(this.filterNotes)}</div>;
  }
}

export default Note;
