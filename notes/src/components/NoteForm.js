import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class NoteForm extends Component {
  render() {
    return (
      <Container className="my-5">
        <h3 className="header my-4">Create New Note:</h3>
        <Form>
          <FormGroup>
            <Input className="w-50" type="text" placeholder="Note Title" />
          </FormGroup>
          <FormGroup>
            <textarea
              className="form-control"
              placeholder="Note Content"
              name="textarea"
              rows="10"
              cols="50"
            />
          </FormGroup>
          <Button className="w-25" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(NoteForm);
