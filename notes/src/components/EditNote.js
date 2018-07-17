import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";

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
    console.log("hiiiii");
    event.preventDefault();
    let edited = {
      title: this.state.editedTitle,
      body: this.state.editedBody
    };
    this.editNote(edited);
  };
  render() {
    return (
      <div>
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
            <Input
              onChange={this.inputEditNote}
              type="text"
              name="editedBody"
              className="createNoteComment"
              placeholder="Note Comment"
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
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  {}
)(EditNote);
