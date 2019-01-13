// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./EditNote.css";
// import styled from 'styled-components'

// const EditNote = props => {
//   return (
//     <div className="new-note">
//       <h1>Edit Note</h1>
//       <div className="new-note-inputs">
//         <input
//           placeholder="Title"
//           type="text"
//           name="titleEdit"
//           className="title-input"
//           onChange={props.handleInputChange}
//           defaultValue={props.title}
//         />
//         <input
//           placeholder="Tags"
//           type="text"
//           name="tagsEdit"
//           className="title-input"
//           onChange={props.handleInputChange}
//           defaultValue={props.tags}
//         />
//         <textarea
//           placeholder="Content"
//           type="text"
//           name="contentEdit"
//           className="content-input"
//           onChange={props.handleInputChange}
//           defaultValue={props.content}
//         />
//         <NavLink
//           onClick={() => props.revisions(props.match.params.id)}
//           className="nav-btn"
//           to="/"
//         >
//           Add Revisions
//         </NavLink>
//       </div>
//     </div>
//   );
// };
// export default EditNote;
