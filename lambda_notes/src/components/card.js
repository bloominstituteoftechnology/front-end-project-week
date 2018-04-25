import React from "react";
import { Link } from "react-router-dom";
import { viewNote} from '../actions'
import { Component } from "react";
import { connect } from "react-redux";
import notes from "./defaultNotes"

export default class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    note: notes
  }}

render(){
  if (!this.state.note) {
    return <div> hi</div>
  }
  const { title, text } = this.state.note
  return (
    <div className="notecard"> 
      <h5 className="note-title">{this.props.title}</h5>
      <div className="notes-text-div">{this.props.text}</div>
    </div>
  );
}};
