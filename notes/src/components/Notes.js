import React, { Component } from "react";
import Note from './Note';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    };
  }
  


  render() {
    return (
      <div className="yourNotes">
        Notes
        <Note notes={this.props.notes}/>
      </div>
    );
  }
}

export default Notes;
