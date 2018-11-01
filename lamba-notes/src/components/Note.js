
import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  if(props.notes.length){
    let note = props.notes.find(note => `${note._id}` === props.match.params.id);

  return (
    <div className="singleNote">
      <Link
        to={`/note/edit/${note.id}`}
        onClick={() => props.editNote(note.title, note.textBody)}
      >
        edit
      </Link>{" "}
      <span onClick={props.deleteToggleOn}>delete</span>
      {/* <button
          onClick={event => {
            this.props.deleteNote(this.state.note._id);
            console.log(this.state.note);
          }}
        >
          Delete
        </button> */}
      {/* <button
          onClick={() => {
            this.props.editNote(this.state.note._id);
          }}
        >
          Edit
        </button> */}
      <h1>{this.state.note.title}</h1>
      <p>{this.state.note.textBody}</p>
    </div>
  );
};

export default Note;







// class Note extends React.Component {
//   }

// componentDidMount() {
//   axios
//     .get(
//       `http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
//     )
//     .then(response => this.setState({ note: response.data }))
//     .catch(error => console.log(error));
// }

// handleInputChange = event => {
//   this.setState({ [event.target.name]: event.target.value });
// };

// clickHandler = event => {
//   event.preventDefault();
// };

