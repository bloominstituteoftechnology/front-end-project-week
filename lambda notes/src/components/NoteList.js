import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ViewNote from "./ViewNote";


class NoteList extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      //console.log("props", this.props.notes);
      return (
         <div className="page-wrapper">
            <h2>Your Notes:</h2>
            <div className="noteList">
               {this.props.notes.map(note => {
                  return(
                     <Link to={`/view/${note._id}`} key={note._id} className="note">
                        <p className="noteTitle">{note.title}</p>
                        <hr />
                        <p className="noteText">{note.textBody}</p>
                     </Link>
                  );
               })}
            </div>  
         </div>
      );
   }
}


export default NoteList;