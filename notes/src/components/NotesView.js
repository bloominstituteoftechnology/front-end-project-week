import React, { Component } from "react";
import NotesList from './NotesList';

export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      note: '',

    };
  }
  render() {
    return (
      <div className="app">
        <NotesList notes={this.props.notes}/>
      </div>
    );
  }
}
