import React, { Component } from 'react';
import '../Styles.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Button } from 'reactstrap';
import EDITNOTE from './EditNote';

class NoteView extends Component {
  constructor (props){
    super(props)
    this.state = props
  }
  render() {
    const note = this.state.note;
    return (
      <div>
        NOTE VIEW
        <Link to={`/edit/${note.id}`} component={EDITNOTE}>edit</Link>
        <p>delete</p>
        <h2>{note.title}</h2>
      </div>
    );
  };
};

export default NoteView;