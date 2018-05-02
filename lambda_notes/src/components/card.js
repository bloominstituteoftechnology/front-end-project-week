// import React from "react";
// import { Link } from "react-router-dom";
// import { Component } from "react";
// import { connect } from "react-redux";
// import { deleteNote, editNote } from "../actions";
// import { Redirect } from "react-router";


// class NoteCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//   }
//   handleOpen = () => {
//     this.setState({ open: true });
//   };
//   handleClose = () => {
//     this.setState({ open: false });
//   };
//   handleDeleteNote = id => {
//     this.props.deleteNote(id);
//   };

//   render() {
//     const {id} = {this.props.match.params.id}
//     const actions = [
//       <button
//         label="Delete"
//         primary={true}
//         onClick={() => {
//           this.handleClose();
//           this.handleDeleteNote(id);
//         }}
//       />,
//       <button
//         label="No"
//         primary={true}
//         keyboardFocused={true}
//         onClick={this.handleClose}
//       />
//     ];
//     return (
//       <div className="Note">
//         <div
//           title="Dialog With Actions"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}
//         />
//         <div className="row">
//           <div className="col-md-12">
//             <Link
//               to={{
//                 pathname: "/editNote",
//                 state: {
//                   id: id
//                 }
//               }}
//             >
//               <button className="Note_button">Edit</button>
//             </Link>
//             <button className="Note_button" onClick={this.handleOpen}>
//               Delete
// 						</button>
//           </div>
//         </div>

//         {this.props.notess.includes(this.props.notes[id]) ? 
//           <div className="row">
//             <div className="col-md-12">
//               <div className="Note_content">
//                 <h3 className="Note_header">{this.props.notes[id].title}</h3>
//                 <p className="Note_text">{this.props.notes[id].text}</p>
//               </div>
//             </div>
//           </div>
//         :(
//             <Redirect to="/" />
//           )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     notes: state.notes
//   };
// };

// export default connect(mapStateToProps, {deleteNote,editNote})(NoteCard);