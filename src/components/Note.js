import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Note extends Component {

  render() {
    return (
      <div className = 'notes-items card'>

        <Link to = {`ViewNote/${this.props.id}`} className = 'card-link' >
          <h4>{this.props.note.title}</h4>
          <p>{this.props.note.text}</p>
        </Link>

      </div>
    )
  }
}

export default Note;
