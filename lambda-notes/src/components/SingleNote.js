// React import
import React, { Component } from 'react';
// CSS import
import './SingleNote.css';

class SingleNote extends Component {
  render() {
    const { title, textBody } = this.props.note;
    return (
      <div className="singleNote">
        <h3>{title}</h3>
        <p>{textBody}</p>
      </div>
    );
  }
}

export default SingleNote;
