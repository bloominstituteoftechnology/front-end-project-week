// import React from "react";
// import { NavLink, Switch, Link, Route } from "react-router-dom";

// const ListView = () => (
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/create" component={Create} />
//   </Switch>
// );

// const Home = () => (
//   <div className="home">
//     <h1>Notes</h1>
//     <p> Blah Blah blah Notes</p>
//   </div>
// );

// const Create = () => (
//   <div className="create">
//     <h1>Create New Note:</h1>
//     <p>
//       title
//     </p>
//     <p>
//      content
//     </p>
//   </div>
// );

// export default Home;

import React, { Component } from "react";
import "./ListView.css";
// import axios from "axios";
import { Link } from "react-router-dom";
import Notes from "./Notes.js";

const linkStyles = {
  textDecoration: "none"
};

const ListView = props => {
  return (
    <div className="listView">
      <div className="note-title"> Your Notes:</div>
      <ul className="note-grid">
        {props.notes.map(note => {
          //  console.log("note", note);
          return (
            <div key={note.id} className="note-box">
              <Link
                style={linkStyles}
                to={{ pathname: `/noteView/${note.id}`, state: note }}
              >
                <Notes note={note} />
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListView;
