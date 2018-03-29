import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import { Button, Form, FormGroup, Input } from 'reactstrap';

class CreateNote extends Component {
  render() {
    return (
      <div className="CreateNote">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to="/">
            <Button className="LeftSideButtons">View Your Notes</Button>
          </Link>
          <Button className="LeftSideButtons">+ Create New Note</Button>
        </div>
        <div className="RightSide">
          <h4 className="CreateNewNote">Create New Note</h4>
          <div className="FormDiv">
            <Form onSubmit={this.props.addItem}>
              <FormGroup>
                <Input
                  // innerRef={e => (this._inputElement = e)}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Note Title"
                  onChange={this.props.handleTitleChange}
                  value={this.props.title}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  // innerRef={e => (this._inputElement2 = e)}
                  type="textarea"
                  rows="14"
                  name="content"
                  id="content"
                  placeholder="Note Content"
                  onChange={this.props.handleContentChange}
                  value={this.props.content}
                />
              </FormGroup>

              <Button className="SubmitButton float-left" type="submit">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNote;
