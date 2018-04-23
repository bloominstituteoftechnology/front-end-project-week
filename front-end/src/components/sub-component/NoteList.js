import React, { Component } from "react";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedNotes: []
    };
  }
  render() {
    console.log(this.props.savedNotes);
    return (
      <div>
        <div>noteExample1</div>
        <div>noteExample2</div>
        <div>noteExample3</div>
        <div>noteExample4</div>
        <div>noteExample5</div>
        <div>noteExample6</div>
      </div>
    );
  }
}
