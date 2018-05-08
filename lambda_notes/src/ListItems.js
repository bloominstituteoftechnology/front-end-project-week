import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import SideNav from'./SideNav';


export default class ListItems extends Component {


render() {
  return (
    <div className="notesContainer">
    <SideNav />
    <div className="listNotes">
    <div className="notesHeader">Your Notes:</div>
    <div className="listAllNotes">
    {this.props.notes.map((note, i) => {
      return (
        <div className="notesCard" key={note.id}>
        <Link to={`/list-view/${note.id}`}>
        <div className="noteTitle">{note.noteTitle}></div>
        <div className="noteContent">{note.noteContent}</div>
        </Link>
        </div>
      );
    })}
    </div>
    </div>
    </div>
  )
}
}












