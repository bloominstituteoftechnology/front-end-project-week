import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input } from "reactstrap";
// import uuid from "uuid";

const NoteForm = props => {
  return (
    <div>
      <form>
        <h1>Create New Note:</h1>
        <FormGroup>
          <Input
            type="textarea"
            name="title"
            placeholder="Note Title"
            onChange={props.handleNoteChange}
            value={props.title}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="note-content-input"
            type="textarea"
            name="textBody"
            placeholder="Note Content"
            onChange={props.handleNoteChange}
            value={props.textBody}
          />
        </FormGroup>
        <Link to={"/"}>
          <button onClick={props.handleAddNote}>Save</button>
        </Link>
      </form>
    </div>
  );
};

export default NoteForm;



//class component for axios API management

// class NoteForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: [],
//       _id: "",
//       title: "",
//       textBody: ""
//     };
//   }

//   handleInputChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleNoteSubmit = event => {
//     event.preventDefault();
//     const newNote = {
//       _id: uuid(),
//       title: this.state.title,
//       textBody: this.state.textBody

//     };
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleNoteSubmit}>
//           <h1>Create New Note:</h1>
//           <FormGroup>
//             <Input
//               type="textarea"
//               name="text"
//               id="exampleText"
//               placeholder="Note Title"
//               onChange={this.handleInputChange}
//               value={this.state.notes.title}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               className="note-content-input"
//               type="textarea"
//               name="text"
//               id="exampleText"
//               placeholder="Note Content"
//               onChange={this.handleInputChange}
//               value={this.state.notes.textBody}
//             />
//           </FormGroup>
//           <Link to={"/"}>
//             <button>Save</button>
//           </Link>
//         </form>
//       </div>
//     );
//   }
// }

// export default NoteForm;
