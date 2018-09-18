import React from "react";
import { Link } from "react-router-dom";
// import {connect} from 'react-redux';
import "./Notes.css";

const searchingFor = term => {
  return function(note) {
    return note.textBody.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

const Notes = props => {
  console.log(props.notes);
  return (
    <div className="notes-page">
      <h2 className="page-title">Your Notes:</h2>
      <div className="search">
        <input
          onChange={props.searchHandler}
          type="text"
          name="search"
          placeholder="search"
          value={props.term}
        />
      </div>

      <i className="fas fa-sign-out-alt" onClick={props.logOut} />

      <div className="notes">
        
         {props.notes.filter(searchingFor(props.term)).map(note => ( 
          <Link key={note._id} to={`/notes/${note._id}`}>
            <div className="text">
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
          </Link>
         ))}
      </div>
    </div>
  );
};


// const mapStateToProps = state => {
//   const {notesReducer} = state;
//   return{
//     notes: notesReducer.notes,
    
//   };
// };



// export default connect(mapStateToProps)(Notes);

export default Notes;
