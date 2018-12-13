// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';

// export default class NoteView extends Component {
//   state = {
//     note: null
//   };

//   render() {
//     console.log("props", this.props);
  
 
 import React from "react";
 import {Link} from "react-router-dom";
 
 const NoteView = (props) => {

     const enterDelete = e => {
       e.preventDefault();
       props.handleDelete(e, props.location.state.id);
       props.history.push("/");
       console.log("props", props);
     };
  return <div>
      <div className="HeaderBox">
        <ul>
          <li>
            <Link to={`/editView/${props.location.state.id}`}>Edit</Link>
          </li>
          <button onClick={enterDelete} >
          {/* <button onClick={e => props.handleDelete(e, props.location.state.id)}> */}
            Delete
          </button>
          <li />
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
