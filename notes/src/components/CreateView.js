// import React, { Component } from "react";
import React from "react";

import "./CreateView.css";

const CreateView = props => {
  return (
    <div className="new-container">
      <h5 className="create-header">Create New Note: </h5>
      <form className="note-form">
        <div>
          <input
            className="title-input"
            type="text"
            placeholder="Note Title"
            name="newNote"
            value={props.title}
            onChange={props.noteHandler}
          />
        </div>
        <div>
          <textarea
            className="content-input"
            type="text"
            placeholder="Note Content"
            name="newNote"
            value={props.content}
            onChange={props.noteHandler}
          />
        </div>
        <div>
          <button
            type="submit"
            className="save-button"
            onSubmit={props.submitNewNote}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

// class CreateView extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="new-container">
//         <h5 className="create-header">Create New Note: </h5>
//         <form className="note-form">
//           <div>
//             <input
//               className="title-input"
//               type="text"
//               placeholder="Note Title"
//               name="newNote"
//               value={this.props.newNote}
//               onChange={this.noteHandler}
//             />
//           </div>
//           <div>
//             <textarea
//               className="content-input"
//               type="text"
//               placeholder="Note Content"
//               name="newNote"
//               value={this.props.newNote}
//               onChange={this.noteHandler}
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="save-button"
//               onSubmit={this.submitNewNote}
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default CreateView;
