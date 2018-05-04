import React from "react";
import "./noteContainer.css";
import { Link } from "react-router-dom";
import lifecycle from 'react-pure-lifecycle';


const componentDidMount = (props) => {
  console.log('I mounted! here are my props:', props);
  props.onLoad()
}

const methods = {
  componentDidMount
};

 const NoteContainer = props => {
  console.log(props)
  //eslint-disable-next-line
  // console.log(props.onLoad());
  const contentChecker = note => {
    return note.body && note.body.length > 120
      ? note.body.substr(0, 124) + " ..."
      : note.body;
  };
  return (
    <div className="notesContainer">
      <h1 className="header">Your Notes: </h1>
      <div className="cardContainer">
        {props.state.notes.map(note => {
          return (
            <Link key={note._id} className="noteLink" to={`/viewnote/${note._id}`}>
              <div className="noteCard">
                <h4 className="noteTitle">{note.title}</h4>
                <div className="noteContent">{contentChecker(note)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default lifecycle(methods)(NoteContainer);
