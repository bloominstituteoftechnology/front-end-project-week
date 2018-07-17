import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { editNote } from "../actions/action";

class EditNote extends React.Component {
  constructor() {
    super();
    this.state = {
      editedTitle: "",
      editedBody: ""
    };
  }
  inputEditNote = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  editNote = event => {
    console.log("props: ", this.props.singleNote[0].id);
    event.preventDefault();
    let edited = {
      title: this.state.editedTitle,
      body: this.state.editedBody,
      id: this.props.singleNote[0].id
    };
    this.props.editNote(
      edited,
      this.props.singleNote[0].id
    );
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="editNote">
        <h4>Edit Note: </h4>
        <Form>
          <FormGroup>
            <Input
              onChange={this.inputEditNote}
              type="text"
              name="editedTitle"
              className="createNoteTitle"
              placeholder="Note Title"
            />
            <textarea
              onChange={this.inputEditNote}
              type="text"
              name="editedBody"
              className="createNoteComment"
              placeholder="Note Content"
            />
          </FormGroup>
          <Button onClick={this.editNote}>Update</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    singleNote: state.singleNote
  };
};

export default connect(
  mapStateToProps,
  { editNote }
)(EditNote);
