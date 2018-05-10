// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// export default class NoteView extends Component {
//   state = {
//     note: null
//   };

//   render() {
//     console.log("props", this.props);
  
  // handleDelete = (event, id) => {
  //   event.preventDefault();
  //   let notesOriginal = this.state.notes;
  //   console.log(id);
  //   axios
  //     .delete(`http://localhost:5000/notes/${id}`)
  //     .then(response => {
  //       this.setState(() => ({
  //         notes: notesOriginal.filter(note => note.id !== id)
  //       }));
  //     })
  //     .catch(error => {
  //       console.error("error", error);
  //     });
  // };
 import React from "react";
 import {Link} from "react-router-dom";
 
 const NoteView = (props) => {
  return <div>
        <div className="HeaderBox">
          <ul>
            <li>
              <Link to={`/editView/${props.location.state.id}`}>
                Edit
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <div className="contentBox">
          <h1> Title: {props.location.state.title} </h1>
          <h3> Content: {props.location.state.content} </h3>
        </div>
      </div>;

 }

 export default NoteView;

//     return <div>
//         <div className="HeaderBox">
//           <ul>
//             <li>
//               <Link to={`/editView/${this.props.location.state.id}`}>
//                 Edit
//               </Link>
//             </li>
//             <li>
//               {/* <button onClick={this.handleDelete}> */}
//                 {/* e => this.handleDelete(e, this.props.location.state.id) */}
//                 {/* Delete
//               </button> */}
//             </li>
//           </ul>
//         </div>
//         <div className="contentBox">
//           {console.log(this.state)}

//           <h1> Title: {this.props.location.state.title} </h1>
//           <h3> Content: {this.props.location.state.content} </h3>
//         </div>
//       </div>;
//   }
// }
