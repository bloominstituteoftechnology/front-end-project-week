import React, { Component } from "react";
import NoteCard from './NoteCard';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div> 
        <NoteCard/>
    </div>;
  }
}

export default NoteList;
