import React from "react";

class Note extends React.Component {

  render() {
    return (
      <div key={this.props.id}>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <button
          onClick={() => this.props.deleteNote(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Note;