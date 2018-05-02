// import React, { Component } from "react";
// import { viewNote } from "../actions";
// import { connect } from "react-redux";
// import { Link, Route } from "react-router-dom";
// import NoteCard from "./card";
// import {notes} from "./defaultNotes"
// import OneNote from "./OneNote";

// const mapStateToProps = state => {
// 	return {
// 		notes: state.notes
// 	};
// };

// class DisplayNotes extends Component {
  
//   render() {
//     return (
//       <div className="right-div">
//         <h3 className="notes-header">Your Notes:</h3>
//         <div className="notes-div">
//         {this.props.notes.map((note, index) => {
//           return <OneNote key={this.props.location.key}  params={match.params} />
//         })}
//       </div>
//       </div>
//     );
//   }

  

// }

// export default connect(mapStateToProps, { NoteCard })(DisplayNotes);