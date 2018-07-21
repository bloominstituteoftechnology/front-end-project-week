import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { editNote } from "../actions/action";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedTitle: this.props.singleNote.title,
      editedBody: this.props.singleNote.textBody
    };
  }
  inputEditNote = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  editNote = event => {
    event.preventDefault();
    let edited = {
      title: this.state.editedTitle,
      textBody: this.state.editedBody,
      _id: this.props.singleNote._id
    };
    this.props.editNote(edited, this.props.singleNote._id);
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
              value={this.state.editedTitle}
            />
            <textarea
              onChange={this.inputEditNote}
              type="text"
              name="editedBody"
              className="createNoteComment"
              placeholder="Note Content"
              value={this.state.editedBody}
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
