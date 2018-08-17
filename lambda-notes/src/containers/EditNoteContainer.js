import React from "react";
import NoteForm from "../components/NoteForm";
// import { connect } from "react-redux";
// import { updateNote } from "../actions";

export default class EditNoteContainer extends React.Component {
  state = {
    title: "",
    textBody: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Edit Note:</h1>
        <NoteForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          content={this.state.textBody}
        />
      </div>
    );
  }
}



// export default connect(
//   null,
//    { updateNote }
// )(EditNoteContainer);
